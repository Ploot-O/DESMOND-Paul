export async function onRequest(context) {
  try {
    // Process and get data from the form submission.
    const formData = await context.request.formData();
    var data = {};
    for (let pair of formData.entries()) { data[pair[0]] = pair[1]; }

    // Send the data to the receiving api at the destination.
    $.ajax({
      url: `https://${data.destination}/receiveDes`,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (response) {
        console.log('Response:', response);
      },
      error: function (error) {
        console.log('Error sending data: ', error);
      }
    });

  } catch (error) {
    return new Response(error.message || 'Unknown error', { status: 500 });
  }
}