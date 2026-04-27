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

    // Use stable model — the preview model is frequently overloaded
    const model = body.model || 'gemini-2.0-flash-lite';

    const requestBody = JSON.stringify({
      systemInstruction: body.systemInstruction,
      contents: body.contents,
      generationConfig: body.generationConfig
    });

    // Single attempt with one quick retry on 503/429
    const maxRetries = 2;
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: requestBody
        }
      );

      if (geminiRes.ok) {
        const data = await geminiRes.json();
        return Response.json(data, { status: 200 });
      }

      // Only retry on 503/429, otherwise return the error immediately
      if (geminiRes.status !== 503 && geminiRes.status !== 429) {
        const data = await geminiRes.json();
        return Response.json(data, { status: geminiRes.status });
      }

      // Short 1s wait before the single retry
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    return Response.json(
      { error: 'Model is currently experiencing high demand. Please try again in a moment.' },
      { status: 503 }
    );
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
};

export const config = { path: '/api/chat' };
