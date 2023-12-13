export async function onRequest(context) {
  try {
    const request = context.request;
    if (request.method === 'POST') {
      const formData = await request.formData();
      const body = Object.fromEntries(formData.entries());

      const formBody = new URLSearchParams();
      for (const property in body) {
        formBody.append(property, body[property]);
      }

      const response = await fetch(`https://${body.receiver}/receiveDes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
      });

      if (response.ok) {
        return new Response('Data sent successfully', { status: 200 });
      } else {
        throw new Error('Failed to post data');
      }
    } else {
      throw new Error('Invalid request method');
    }
  } catch (err) {
    const errorResponse = JSON.stringify({ error: err.message });
    return new Response(errorResponse, { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
}