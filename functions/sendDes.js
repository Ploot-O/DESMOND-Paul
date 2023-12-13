export async function onRequest(context) {
  console.log('Request received');
  console.log(context.request);
  console.log(JSON.stringify(context.request));
  const request = context.request;
  const formData = await request.formData();
  const body = Object.fromEntries(formData.entries());

  const formBody = new URLSearchParams();
  for (const property in body) {
    formBody.append(property, body[property]);
  }

  return 'Done'

  // const response = await fetch(`https://${body.receiver}/receiveDes`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   body: formBody
  // });

  // if (response.ok) {
  //   return new Response('Data sent successfully', { status: 200 });
  // } else {
  //   throw new Error('Failed to post data');
  // }
}