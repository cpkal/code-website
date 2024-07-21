export async function GET(request) {
  const req = await request.formData();
  // find user
  const user = await prisma.user.findUnique({
    where: {
      email: req.get("email"),
      password: req.get("password")
    },
  });

  if(user) {
    return Response.json({user});
  }
  
  return Response.json("error");
}