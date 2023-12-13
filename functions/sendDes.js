export async function onRequest(context) {
  try {
    // Process and get data from the form submission.
    const formData = await context.request.formData();
    var data = {};
    for (let pair of formData.entries()) { data[pair[0]] = pair[1]; }

    // Format the data as a URL-encoded string for form sending.
    const urlEncodedData = new URLSearchParams();
    for (let key in data) {
      urlEncodedData.append(key, data[key]);
    }

    // Send the data to the receiving api at the destination.
    const response = await fetch(`https://${data.destination}/receiveDes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: urlEncodedData
    });

    // Return the response from the receiving api.
    return new Response(JSON.stringify({ "response": response.status }, { status: response.status }));

  } catch (error) {
    return new Response(error.message || 'Unknown error', { status: 500 });
  }
}