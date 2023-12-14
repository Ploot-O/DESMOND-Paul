export async function onRequest(context) {
  // Await for the json body from the request.
  const data = await context.request.json();

  // Check if sender, subject, and body exist in the data object
  if (!data.id) {
    return new Response(JSON.stringify({ message: 'Error: id is missing.' }), { status: 400 });
  }

  try {
    // Remove the data into the database.
    await context.env.DB.prepare(`DELETE FROM dmails WHERE id = ?1`)
      .bind(data.id).run();
  } catch (dbError) {
    // Respond with the database error.
    return new Response(JSON.stringify({ message: dbError.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  // Respond saying that the data was received.
  return new Response(JSON.stringify({ message: 'Dmail removed.', echo: data }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}