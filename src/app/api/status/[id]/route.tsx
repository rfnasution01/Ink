import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Status } from "@prisma/client";
const prisma = new PrismaClient();

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const status: Status = await prisma.status.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(status, { status: 200 });
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  //   const body = await request.json();
  const status: Status = await prisma.status.update({
    where: {
      id: Number(params.id),
    },
    data: {
      isDeleted: true,
    },
  });
  return NextResponse.json(status, { status: 200 });
};
