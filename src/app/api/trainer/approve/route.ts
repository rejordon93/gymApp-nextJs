import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function POST(req: NextRequest) {
  // Check if method is POST
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  // Get userId from the request body (not from token)
  const { userId } = await req.json();

  // Check if userId is provided in the request
  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if the user is already an admin before adding them again
    const existingAdmin = await prisma.trainer.findUnique({
      where: { userId },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { message: "User is already an admin" },
        { status: 400 }
      );
    }

    // Create an admin user in the admin table
    const trainer = await prisma.trainer.create({
      data: {
        // Removed isAdmin as it does not exist in the schema
        messages: "", // Provide a default value for the required 'messages' field
        user: {
          connect: {
            id: userId, // This connects the existing user
          },
        },
      },
    });

    // Update the user's 'requestedAdmin' to false and 'userAdmin' to true
    await prisma.user.update({
      where: { id: userId },
      data: { requestedTrainer: false, userTrainer: true }, // Mark them as admin
    });

    // Return success response
    return NextResponse.json(
      { ...trainer, message: "User has been promoted to Admin" },
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
