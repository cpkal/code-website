export async function GET(request) {
  // simulate a long running process
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = { message: 'Hello World!' };

  return Response.json({res});
}