import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import bcrypt from "bcryptjs"; // For password hashing
import jwt from "jsonwebtoken"; // For token generation

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    // ✅ Get user by email
    const user = await prisma.user.findUnique({
      where: { email },
      include: { trainer: true }, // Ensure we include admin relation
    });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    // ✅ Check if user is an admin
    if (!user.trainer) {
      return NextResponse.json(
        { error: "Access denied. Admins only." },
        { status: 403 }
      );
    }

    // ✅ Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ Generate Token (Admin Only)
    const token = jwt.sign(
      { id: user.id, email: user.email, role: "trainer" },
      process.env.TOKEN_SECRET!,
      { expiresIn: "1h" }
    );

    // ✅ Prepare admin data
    const trainerData = user.trainer.map((trainer) => ({
      id: trainer.id,
      userId: user.id,
      createdAt: trainer.createdAt,
      isTrainer: true,
    }));

    // ✅ Set token in response cookie
    const response = NextResponse.json(
      { message: "Admin login successful", token, trainer: trainerData },
      { status: 200 }
    );
    response.cookies.set("token", token, { httpOnly: true, secure: true });

    return response;
  } catch (error) {
    console.error("Login failed:", error);
    return NextResponse.json({ error: "Failed to login" }, { status: 500 });
  }
}
