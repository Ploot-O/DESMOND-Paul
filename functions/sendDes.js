export async function onRequest(context) {
  // Await for the json body from the request.
  const data = await context.request.json();

  // Send the data to the receiving api at the destination.
  const response = await fetch(`https://${data.destination}/receiveDes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: urlEncodedData
  });

  // Get the response data from the API
  const responseData = await response.json();

  // Return the response from the receiving api.
  return new Response(JSON.stringify(responseData), { status: response.status });
}