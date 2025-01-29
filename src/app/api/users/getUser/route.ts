import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function GET(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email } = reqBody;
    console.log(reqBody);

    if (!email) {
      return NextResponse.json(
        { error: "Authorization email is required" },
        { status: 401 }
      );
    }

    // Extract token from headers
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");

    // Validate token
    if (!token) {
      return NextResponse.json(
        { error: "Authorization token is required" },
        { status: 401 }
      );
    }

    // Fetch user from the database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Check if the user exists
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }

    // Return the user data
    return NextResponse.json({
      message: "Data from GET_USER",
      token: token, // For debugging purposes only; avoid exposing tokens in production
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
