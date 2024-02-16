import { NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  try {
    const saltRound = parseInt(process.env.SALT_ROUND || "10");
    const hashedPassword = await bcrypt.hash(body.password, saltRound);

    const user: User = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
        photo: body.photo,
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
