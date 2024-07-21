import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function POST(request) {
  const req = await request.formData();

  try {
    const user = await prisma.user.create({
      data: {
        email: req.get("email"),
        name: req.get("name"),
        password: req.get("password"),
      },
    });

    return NextResponse.json({user}, {status: 201});
  } catch (error) {
    return NextResponse.error(error);
  }
}