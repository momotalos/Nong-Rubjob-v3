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
    const model = body.model || 'gemini-2.0-flash-lite';

    // Forward the request to Gemini with the secret key
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: body.systemInstruction,
          contents: body.contents,
          generationConfig: body.generationConfig
        })
      }
    );

    const data = await geminiRes.json();
    return Response.json(data, { status: geminiRes.status });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
};

export const config = { path: '/api/chat' };
