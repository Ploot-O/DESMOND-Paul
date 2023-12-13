export async function onRequest(context) {
  try {
    const request = context.request;
    if (request.method === 'POST') {
      const formData = await request.formData();
      const body = Object.fromEntries(formData.entries());

      const response = await fetch(`https://${body.destination}/receiveDes`, {
        method: 'POST',
        body: JSON.stringify(body)
      });

      if (response.ok) {
        return new Response('Success', { status: 200 });
      } else {
        throw new Error(JSON.stringify(response));
      }
    } else {
      throw new Error('Invalid request method');
    }
  } catch (err) {
    const errorResponse = JSON.stringify({ error: err.message });
    return new Response(errorResponse, { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
}