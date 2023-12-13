export async function onRequest(context) {
  console.log(JSON.stringify(context.request));
  return new Response(JSON.stringify(context.request), { status: 200 });
}