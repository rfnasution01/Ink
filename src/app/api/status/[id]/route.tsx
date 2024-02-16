import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Status } from "@prisma/client";
import { NextApiRequest } from "next";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const status: Status = await prisma.status.update({
    where: {
      id: Number(params.id),
    },
    data: {
      isDeleted: body.isDeleted,
      name: body.name,
      icon: body.icon,
    },
  });
  return NextResponse.json(status, { status: 201 });
};

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const status: Status | null = await prisma.status.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(status, { status: 200 });
  } catch (error) {
    console.error("Error fetching statuses:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch statuses",
      },
      {
        status: 500,
      }
    );
  }
};
