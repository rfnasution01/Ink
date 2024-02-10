import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Status } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  const status: Status = await prisma.status.create({
    data: {
      name: body.name,
      icon: body.icon,
      isDeleted: false,
    },
  });
  return NextResponse.json(status, { status: 201 });
};
