import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import bcryptjs from "bcryptjs";
import { LoginType } from "@/app/types/page";

export async function POST(req: NextRequest) {
  try {
    const body: LoginType = await req.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    const checkIfEmployee = await prisma.employee.findUnique({
      where: { email },
    });

    if (checkIfEmployee) {
      return NextResponse.json(
        { message: "There is already a user with this email." },
        { status: 409 }
      );
    }

    const checkRole = await prisma.role.findUnique({
      where: { name: "ADMIN" },
    });

    if (!checkRole) {
      return NextResponse.json(
        { message: "Role 'ADMIN' not found." },
        { status: 500 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newEmployee = await prisma.employee.create({
      data: {
        username,
        email,
        password: hashedPassword,
        editedAt: new Date(),
      },
    });

    await prisma.employeeAuthority.create({
      data: {
        employeeId: newEmployee.id,
        authorityId: checkRole.id,
      },
    });

    return NextResponse.json(
      { message: "Admin employee created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
