export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const GEMINI_API_KEY = Netlify.env.get('GEMINI_API_KEY');
  if (!GEMINI_API_KEY) {
    return Response.json({ error: 'API key not configured in Netlify environment variables' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const primaryModel = body.model || 'gemini-3.1-flash-lite-preview';
    const fallbackModel = 'gemini-2.0-flash-lite';

    const requestBody = JSON.stringify({
      systemInstruction: body.systemInstruction,
      contents: body.contents,
      generationConfig: body.generationConfig
    });

    // Try with retries + exponential backoff, then fallback model
    const modelsToTry = [primaryModel, fallbackModel];

    for (const model of modelsToTry) {
      const maxRetries = 3;
      for (let attempt = 0; attempt < maxRetries; attempt++) {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: requestBody
          }
        );

        // If success or a non-retryable error, return immediately
        if (geminiRes.ok) {
          const data = await geminiRes.json();
          return Response.json(data, { status: 200 });
        }

        // Only retry on 503 (overloaded) or 429 (rate limit)
        if (geminiRes.status !== 503 && geminiRes.status !== 429) {
          const data = await geminiRes.json();
          return Response.json(data, { status: geminiRes.status });
        }

        // Wait before retrying: 1s, 2s, 4s (exponential backoff)
        if (attempt < maxRetries - 1) {
          const delayMs = Math.pow(2, attempt) * 1000;
          await new Promise(resolve => setTimeout(resolve, delayMs));
        }
      }
      // If all retries failed for this model, try the fallback
    }

    // All models and retries exhausted
    return Response.json(
      { error: 'All models are currently experiencing high demand. Please try again in a moment.' },
      { status: 503 }
    );
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
};

export const config = { path: '/api/chat' };
