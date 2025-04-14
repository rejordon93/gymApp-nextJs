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
        { message: "Missing username, email, or password" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    // Check if STAFF role exists, otherwise create it
    const staffRole =
      (await prisma.role.findUnique({
        where: { name: "STAFF" },
      })) ??
      (await prisma.role.create({
        data: {
          name: "STAFF",
          createdAt: new Date(),
        },
      }));

    // Create employee
    const newEmployee = await prisma.employee.create({
      data: {
        username,
        email,
        password: hashedPassword,
        editedAt: new Date(),
      },
    });

    // Link employee to STAFF role
    await prisma.employeeAuthority.create({
      data: {
        employeeId: newEmployee.id,
        authorityId: staffRole.id,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        employee: {
          id: newEmployee.id,
          username: newEmployee.username,
          email: newEmployee.email,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
