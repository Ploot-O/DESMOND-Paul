export async function onRequest(context) {
  // Await for the json body from the request.
  const data = await context.request.json();
  return data

  // Send the data to the receiving api at the destination.
  const response = await fetch(`https://${data.destination}/receiveDes`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: data
  });

  // Get the response data from the API
  const responseData = await response.json();

  console.log(responseData);

  // Return the response from the receiving api.
  return new Response(JSON.stringify(responseData), { status: response.status });
}