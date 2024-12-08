import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      id,
      name,
      equipment,
      gifUrl,
      instructions,
      secondaryMuscles,
      target,
    } = body;
    // check for loogged in User
    const userDate = getDataFromToken(req);
    if (!userDate) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }
    // Validate input fields
    if (
      !name ||
      !equipment ||
      !gifUrl ||
      !instructions ||
      !secondaryMuscles ||
      !target ||
      !id
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create favoritedExercise
    const favoritedExerciseData = await prisma.favoritedExercise.create({
      data: {
        name,
        equipment,
        gifUrl,
        instructions,
        secondaryMuscles,
        target,
      },
    });

    // check if favoritedExerciseDate us there
    if (!favoritedExerciseData) {
      return NextResponse.json(
        { error: "Failed to create favorited exercise" },
        { status: 500 }
      );
    }

    // Check if userWorkout exists
    const userWorkoutData = await prisma.userWorkout.findUnique({
      where: { id },
    });
    if (!userWorkoutData) {
      return NextResponse.json(
        { error: "User workout not found" },
        { status: 404 }
      );
    }

    //else update userWorkout wiht favoritedExercise by id
    const userWorkoutUpdate = await prisma.userWorkout.update({
      where: { id: userWorkoutData.id },
      data: {
        favoritedExercise: {
          connect: { id: favoritedExerciseData.id },
        },
      },
    });
    // if not updated show error
    if (!userWorkoutUpdate) {
      return NextResponse.json(
        { message: "Favorited exercise not update!" },
        { status: 400 }
      );
    }
    // return successfully message
    return NextResponse.json(
      { message: "Favorited exercise added successsfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing the workout creation request:", error);
    return NextResponse.json(
      { error: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
