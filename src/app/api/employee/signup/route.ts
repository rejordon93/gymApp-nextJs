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

    const existingUser = await prisma.employee.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registerd" },
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

    const staffRole = await prisma.role.upsert({
      where: { name: "STAFF" },
      update: { editedAt: new Date() },
      create: {
        name: "STAFF",
        editedAt: new Date(),
      },
    });

    const createUserAuthority = await prisma.authority.upsert({
      where: { authority: "CREATEUSER" },
      update: { editedAt: new Date() },
      create: {
        authority: "CREATEUSER",
        editedAt: new Date(),
      },
    });

    await prisma.employeeRole.upsert({
      where: {
        roleId_authorityId: {
          roleId: staffRole.id,
          authorityId: createUserAuthority.id,
        },
      },
      update: {},
      create: {
        roleId: staffRole.id,
        authorityId: createUserAuthority.id,
      },
    });

    await prisma.employeeAuthority.create({
      data: {
        employeeId: newEmployee.id,
        authorityId: staffRole.id,
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
    const response = NextResponse.json({
      message: "Employee registered and linked to STAFF role",
      employee: newEmployee,
    });

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
