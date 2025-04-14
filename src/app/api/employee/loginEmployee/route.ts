import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { LoginType } from "@/app/types/page";

export async function POST(req: NextRequest) {
  try {
    const body: LoginType = await req.json();
    const { email, password } = body;

    const employee = await prisma.employee.findUnique({
      where: { email },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, employee.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const tokenData = { id: employee.id };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const role = await prisma.role.findUnique({
      where: { name: "STAFF" },
    });

    if (!role) {
      return NextResponse.json({ error: "Role not found" }, { status: 400 });
    }

    // 👇 This line ensures the authority is created only if it doesn't exist
    const authority =
      (await prisma.authority.findUnique({
        where: { authority: "CREATEUSER" },
      })) ??
      (await prisma.authority.create({
        data: {
          authority: "CREATEUSER",
          editedAt: new Date(),
        },
      }));

    if (!authority) {
      return NextResponse.json(
        { error: "Authority not found" },
        { status: 400 }
      );
    }
    const existingEmployeeRole = await prisma.employeeRole.findFirst({
      where: {
        roleId: role.id,
        authorityId: authority.id,
      },
    });

    if (!existingEmployeeRole) {
      await prisma.employeeRole.create({
        data: {
          roleId: role.id,
          authorityId: authority.id,
        },
      });
    }

    const response = NextResponse.json({
      message: "Login successful",
      token,
      username: employee.username,
      email: employee.email,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
