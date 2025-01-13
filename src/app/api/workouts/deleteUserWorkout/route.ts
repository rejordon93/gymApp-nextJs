import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { workout } = body;

    // Validate input
    if (!workout) {
      return NextResponse.json(
        { error: "Workout ID and workout details are required" },
        { status: 400 }
      );
    }

    // Get user token and extract user ID
    const userId = getDataFromToken(req);

    // Validate user token
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token or no user found" },
        { status: 401 }
      );
    }

    // Check if the workout exists for the user
    const existingUserWorkout = await prisma.userWorkout.findFirst({
      where: {
        userId, // Ensure that the workout belongs to the correct user
      },
    });

    if (!existingUserWorkout) {
      return NextResponse.json(
        {
          error: `User workout with ID ${userId} does not exist or does not belong to the current user`,
        },
        { status: 404 }
      );
    }

    // Delete the user workout
    await prisma.userWorkout.delete({
      where: { userId },
    });

    // Response
    return NextResponse.json(
      { message: `User workout with ID ${userId} successfully removed.` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the DELETE request:", error);
    return NextResponse.json(
      { error: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
