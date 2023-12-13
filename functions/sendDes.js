export async function onRequest(context) {
  try {
    // Process and get data from the form submission.
    const formData = await context.request.formData();
    var data = {};
    for (let pair of formData.entries()) { data[pair[0]] = pair[1]; }

    // Create new FormData object to send as body in fetch request
    const fetchFormData = new FormData();
    for (let key in data) {
      fetchFormData.append(key, data[key]);
    }

    // Send the data to the receiving api at the destination.
    const response = await fetch(`https://${data.destination}/receiveDes`, {
      method: 'POST',
      body: fetchFormData
    });

    if (!response.ok) {
      console.log('Error sending data: ', response.statusText);
    } else {
      const responseData = await response.json();
      console.log('Response:', responseData);
    }

  } catch (error) {
    return new Response(error.message || 'Unknown error', { status: 500 });
  }
}