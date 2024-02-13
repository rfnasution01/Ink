import { NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  try {
    // Cari pengguna berdasarkan username
    const user: User | null = await prisma.user.findFirst({
      where: {
        username: body.username,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    // Bandingkan password yang diberikan dengan hash password di database

    const passwordMatch = await bcrypt.compare(body.password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        {
          message: "Incorrect password",
        },
        {
          status: 401,
        }
      );
    }

    // Jika password cocok, buat token JWT
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined!");
    }

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
      },
      secret,
      { expiresIn: "3d" }
    );

    // Response token
    return NextResponse.json({ token: token, user: user }, { status: 200 });
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      {
        message: "Failed to login",
      },
      {
        status: 500,
      }
    );
  }
};
