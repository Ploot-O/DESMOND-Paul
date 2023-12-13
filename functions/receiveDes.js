export async function onRequest(context) {
  // Await for the json body from the request.
  const data = await context.request.json();

  // Check if sender, subject, and body exist in the data object
  if (!data.destination || !data.sender || !data.subject || !data.body) {
    return new Response(JSON.stringify({ message: 'Error: sender, destination, subject, or body is missing.' }), { status: 400 });
  }

  try {
    // Insert the data into the database.
    await context.env.DB.prepare(`INSERT INTO dmails (sender, subject, body) VALUES (?1, ?2, ?3)`)
      .bind(data.sender, data.subject, data.body).run();
  } catch (dbError) {
    // Respond with the database error.
    return new Response(JSON.stringify({ message: dbError.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  // Respond saying that the data was received.
  return new Response(JSON.stringify({ message: 'Dmail processed.', echo: data }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}