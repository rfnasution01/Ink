import { NextResponse } from "next/server";
import { Category, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  try {
    const kategori: Category = await prisma.status.create({
      data: {
        name: body.name,
        icon: body.icon,
        user: { connect: { id: body?.id } },
        isDeleted: false,
      },
    });
    return NextResponse.json(kategori, { status: 201 });
  } catch (error) {
    console.error("Error creating category", error);
    return NextResponse.json(
      {
        message: "Failed to create category",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = async (req: Request) => {
  try {
    const url = new URL(req.url || "");
    const paramsId = url.searchParams.get("id");

    const kategori: Category[] = await prisma.status.findMany({
      where: {
        userId: Number(paramsId),
        isDeleted: false,
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
