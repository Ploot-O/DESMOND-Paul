export async function onRequest(context) {
  // Await for the json body from the request.
  const data = await context.request.json();

  console.log(data);

  // Check if sender, subject, and body exist in the data object
  if (!data.destination || !data.sender || !data.subject || !data.body) {
    return new Response(JSON.stringify({ message: 'Error: sender, destination, subject, or body is missing.' }), { status: 400 });
  }

  // Send the data to the receiving api at the destination.
  const response = await fetch(`https://${data.destination}/receiveDes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });

  // Get the response data from the API
  const responseData = await response.json();

  console.log(responseData);

  // Return the response from the receiving api.
  return new Response(JSON.stringify(responseData), { status: response.status });
}