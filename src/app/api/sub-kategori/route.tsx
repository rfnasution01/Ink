import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  try {
    const subKategori = await prisma.subCategory.create({
      data: {
        name: body.name,
        icon: body.icon,
        categoryId: body.categoryId,
        isDeleted: false,
      },
    });
    return NextResponse.json(subKategori, { status: 201 });
  } catch (error) {
    console.error("Error creating sub category", error);
    return NextResponse.json(
      {
        message: "Failed to create sub category",
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

    const subKategori = await prisma.subCategory.findMany({
      where: {
        categoryId: Number(paramsId),
        isDeleted: false,
      },
    });
    return NextResponse.json(subKategori, { status: 200 });
  } catch (error) {
    console.error("Error fetching sub category", error);
    return NextResponse.json(
      {
        message: "Failed to fetch sub category",
      },
      {
        status: 500,
      }
    );
  }
};
