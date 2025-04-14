import { NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function GET() {
  try {
    const getAllEmployee = await prisma.employee.findMany({
      include: {
        roles: true,
        trainer: true,
      },
    });
    const getAllRoles = await prisma.role.findMany({
      include: {
        employees: true,
      },
    });

    return NextResponse.json({ getAllEmployee, getAllRoles });
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json(
      { error: "Failed to fetch employees" },
      { status: 500 }
    );
  }
}
