export async function onRequest(context) {
  try {
    // Process and get data from the form submission.
    const formData = await context.request.formData();
    var data = {};
    for (let pair of formData.entries()) { 
      data[pair[0]] = pair[1]; 
    }

    console.log('Form data processed:', data);

    // Prepare the database statement
    const ps = context.env.DB.prepare(`INSERT INTO dmails (sender, subject, body) VALUES (?, ?, ?)`);

    console.log('Database statement prepared');

    // Execute the statement
    await ps.run(data.sender, data.subject, data.body);

    console.log('Database statement executed');

    return new Response('Success', { status: 200 });
  } catch (err) {
    console.log('Error:', err.message);
    const errorResponse = JSON.stringify({ error: err.message });
    return new Response(errorResponse, { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
}