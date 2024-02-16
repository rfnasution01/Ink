import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Status } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  try {
    const status: Status = await prisma.status.create({
      data: {
        name: body.name,
        icon: body.icon,
        user: { connect: { id: body?.id } },
        isDeleted: false,
      },
    });
    return NextResponse.json(status, { status: 201 });
  } catch (error) {
    console.error("Error creating status:", error);
    return NextResponse.json(
      {
        message: "Failed to create status",
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

    const status: Status[] = await prisma.status.findMany({
      where: {
        userId: Number(paramsId),
        isDeleted: false,
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
