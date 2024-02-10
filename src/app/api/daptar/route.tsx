import { NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  try {
    const user: User = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
        photo: body.photo,
        status: { connect: { id: 1 } },
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        message: "Failed to create user",
      },
      {
        status: 500,
      }
    );
  }
};
