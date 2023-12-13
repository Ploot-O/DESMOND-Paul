export async function onRequest(context) {
  try {
    // Process and get data from the form submission.
    const formData = await context.request.formData();
    var data = {};
    for (let pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }

    // Check if sender, subject, and body exist in the data object
    if (!data.sender || !data.subject || !data.body) {
      return new Response('Error: sender, subject, or body is missing', { status: 400 });
    }

    // Prepare the database statement
    const db_response = await context.env.DB.prepare(`INSERT INTO dmails (sender, subject, body) VALUES (?1, ?2, ?3)`)
      .bind(data.sender, data.subject, data.body).run();

    // Respond saying that the data was received and logged.
    return new Response({ message: 'Received and Logged.', status: 200 });

  } catch (err) {
    // Respond with an error message if something went wrong.
    return new Response(err.message, { status: 501, headers: { 'Content-Type': 'application/json' } });
  }
}