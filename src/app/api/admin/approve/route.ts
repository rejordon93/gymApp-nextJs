import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  // Check if method is POST
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  // Get user from token
  const userId = getDataFromToken(req);

  // Check if user exists in the token
  if (!userId) {
    return NextResponse.json({ message: "No User Found" }, { status: 401 });
  }

  try {
    // Check if the user is already an admin before adding them again
    const existingAdmin = await prisma.admin.findUnique({
      where: { userId },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { message: "User is already an admin" },
        { status: 400 }
      );
    }

    // Create an admin user in the admin table
    await prisma.admin.create({
      data: { userId }, // associate the admin with the user
    });

    // Update the user's 'requestedAdmin' to false and 'userAdmin' to true
    await prisma.user.update({
      where: { id: userId },
      data: { requestedAdmin: false, userAdmin: true }, // Mark them as admin
    });

    // Return success response
    return NextResponse.json(
      { message: "User has been promoted to Admin" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      { error: "Failed to promote user to admin" },
      { status: 500 }
    );
  }
}
