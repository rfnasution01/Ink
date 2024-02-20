import { NextResponse } from "next/server";
import { PrismaClient, SubCategory } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const subCategory: SubCategory = await prisma.subCategory.update({
    where: {
      id: Number(params.id),
    },
    data: {
      isDeleted: body.isDeleted,
      name: body.name,
      icon: body.icon,
      categoryId: body.categoryId,
    },
  });
  return NextResponse.json(subCategory, { status: 201 });
};

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const subKategori: SubCategory | null = await prisma.subCategory.findUnique(
      {
        where: {
          id: Number(params.id),
        },
      }
    );
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
