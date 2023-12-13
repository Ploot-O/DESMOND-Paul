export async function onRequest(context) {
  try {
    const request = context.request;
    const body = await request.json();

    // Prepare the database statement
    const ps = context.env.DB.prepare(`INSERT INTO dmails (sender, subject, body) VALUES (?, ?, ?)`);

    // Execute the statement
    await ps.run(body.sender, body.subject, body.body);

    return new Response('Success', { status: 200 });
  } catch (err) {
    const errorResponse = JSON.stringify({ error: err.message });
    return new Response(errorResponse, { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
}