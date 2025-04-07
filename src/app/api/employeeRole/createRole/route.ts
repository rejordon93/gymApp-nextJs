import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { name } = body;

  if (!name) {
    NextResponse.json({ message: "No name" }, { status: 401 });
  }

  await prisma.role.findUnique({
    where: {
      name: name,
    },
  });

  const updateRole = await prisma.role.update({
    where: {
      name: name,
    },
    data: {
      name: "MANAGER",
    },
  });

  return NextResponse.json({ message: "Data", updateRole }, { status: 200 });
}
