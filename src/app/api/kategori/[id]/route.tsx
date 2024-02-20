import { NextResponse } from "next/server";
import { Category, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const kategori: Category = await prisma.status.update({
    where: {
      id: Number(params.id),
    },
    data: {
      isDeleted: body.isDeleted,
      name: body.name,
      icon: body.icon,
    },
  });
  return NextResponse.json(kategori, { status: 201 });
};

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const kategori: Category | null = await prisma.status.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(kategori, { status: 200 });
  } catch (error) {
    console.error("Error fetching category", error);
    return NextResponse.json(
      {
        message: "Failed to fetch category",
      },
      {
        status: 500,
      }
    );
  }
};
