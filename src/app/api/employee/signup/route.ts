import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password } = body;

    // Validate inputs
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check for existing employee
    const existingEmployee = await prisma.employee.findFirst({
      where: { email },
    });
    if (existingEmployee) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create new employee
    const newEmployee = await prisma.employee.create({
      data: {
        username,
        email,
        password: hashedPassword,
        editedAt: new Date(),
      },
    });

    const role = await prisma.role.create({
      data: {
        name: "STAFF",
      },
    });

    await prisma.employeeAuthority.create({
      data: {
        employeeId: newEmployee.id,
        authorityId: role.id,
      },
    });

    // Generate JWT token
    const tokenData = {
      id: newEmployee.id,
      username: newEmployee.username,
      email: newEmployee.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    // Create response
    const response = NextResponse.json(
      {
        message: "Employee created successfully",
        employeeId: newEmployee.id,
      },
      { status: 201 }
    );

    // Set token in a cookie (optional, or you could return it in the body)
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return response;
  } catch (error) {
    console.error("Error creating employee:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
