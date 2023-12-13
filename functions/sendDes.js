export async function onRequest(context) {
  try {
    const formData = await context.request.formData();
    var data = {};
    for (let pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(error.message || 'Unknown error', { status: 500 });
  }
}