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
        { error: "Exercise ID is required" },
        { status: 400 }
      );
    }

    // get user token
    const userId = getDataFromToken(req);

    // Validate user token
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token or no user found" },
        { status: 401 }
      );
    }

    // Delete the user workout by its ID
    const deletedUserWorkout = await prisma.userWorkout.delete({
      where: { id: id },
    });

    // Delete all favorited exercises
    const deletedExercises = await prisma.favoritedExercise.deleteMany({});

    if (deletedExercises) {
      return NextResponse.json(
        { message: "all Exercises deleted" },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        message: `User workout with ID ${id} successfully removed`,
        deletedUserWorkout,
        deletedExercises,
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
