import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import bcryptjs from "bcryptjs";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password } = body;

    const userId = getDataFromToken(req);

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Missing input data" },
        { status: 409 }
      );
    }

    // make sure a empoyee must be a Staff || Manager to make new clients
    const authenticatedRole = await prisma.role.findUnique({
      where: { id: userId },
    });
    if (
      !authenticatedRole ||
      !["STAFF", "MANAGER"].includes(authenticatedRole.name)
    ) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    // 3. Check if an employee with the email already exists
    const existingEmployee = await prisma.employee.findUnique({
      where: { email },
    });

    if (existingEmployee) {
      return NextResponse.json(
        { message: "Email already registered to an employee" },
        { status: 409 }
      );
    }

    // 4. Create the employee
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newEmployee = await prisma.employee.create({
      data: {
        username,
        email,
        password: hashedPassword,
        editedAt: new Date(),
      },
    });

    return NextResponse.json(
      {
        message: "Employee created successfully",
        employee: newEmployee,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
