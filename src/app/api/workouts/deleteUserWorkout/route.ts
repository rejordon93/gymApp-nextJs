import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    // Validate input
    if (!id) {
      return NextResponse.json(
        { error: "Workout ID is required" },
        { status: 400 }
      );
    }

    // Get user token
    const userId = getDataFromToken(req);

    // Validate user token
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token or no user found" },
        { status: 401 }
      );
    }

    // Validate if the workout exists
    const existingUserWorkout = await prisma.userWorkout.findUnique({
      where: { id },
    });

    if (!existingUserWorkout) {
      return NextResponse.json(
        { error: `User workout with ID ${id} does not exist` },
        { status: 404 }
      );
    }

    // Delete the user workout (cascading delete will handle related exercises)
    await prisma.userWorkout.delete({
      where: { id },
    });

    // Response
    return NextResponse.json(
      { message: `User workout with ID ${id} successfully removed.` },
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
