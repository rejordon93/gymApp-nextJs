import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

interface IdType {
  id: number;
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id }: IdType = body;

    // Validate input
    if (!id) {
      return NextResponse.json(
        { error: "Exercise ID is required" },
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

    // Validate if the ID exists in userWorkout
    const existingUserWorkout = await prisma.userWorkout.findUnique({
      where: { id },
    });

    if (!existingUserWorkout) {
      return NextResponse.json(
        { error: `User workout with ID ${id} does not exist` },
        { status: 404 }
      );
    }

    // Delete user workout by ID
    const deletedUserWorkout = await prisma.userWorkout.delete({
      where: { id },
    });

    // Delete related exercise by ID
    const deletedExercise = await prisma.favoritedExercise.deleteMany({
      where: { id },
    });

    // Response
    return NextResponse.json(
      {
        message: `User workout with ID ${id} and related exercises successfully removed`,
        deletedUserWorkout,
        deletedExercise,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
