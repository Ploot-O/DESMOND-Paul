export async function onRequest(context) {
  try {
    // Process and get data from the form submission.
    const formData = await context.request.formData();
    var data = {};
    for (let pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }

    console.log('Form data processed:', data);

    // Check if sender, subject, and body exist in the data object
    if (!data.sender || !data.subject || !data.body) {
      console.log('Error: sender, subject, or body is missing in the form data');
      return new Response('Error: sender, subject, or body is missing', { status: 400 });
    }

    // Prepare the database statement
    const db_response = await context.env.DB.prepare(`INSERT INTO dmails (sender, subject, body) VALUES (?1, ?2, ?3)`)
      .bind(data.sender, data.subject, data.body).run();

    console.log('Database statement executed.');

    return new Response('Success', { status: 200 });
  } catch (err) {
    console.log('Error:', err.message);
    const errorResponse = JSON.stringify({ error: err.message });
    return new Response(errorResponse, { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
}