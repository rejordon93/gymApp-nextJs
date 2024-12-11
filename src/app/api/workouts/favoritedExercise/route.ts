import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

interface FavoritedExerciseType {
  id: number;
  name: string;
  equipment: string;
  gifUrl: string;
  instructions: string;
  secondaryMuscles: string;
  target: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: FavoritedExerciseType = await req.json();
    const {
      id,
      name,
      equipment,
      gifUrl,
      instructions,
      secondaryMuscles,
      target,
    } = body;

    // Check for logged in user
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

    // Check if an exercise with this name already exists
    const existingExercise = await prisma.favoritedExercise.findFirst({
      where: { name },
    });

    if (existingExercise) {
      return NextResponse.json(
        { error: "An exercise with this name already exists" },
        { status: 409 }
      );
    }

    // Create favoritedExercise since no matching name was found
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

    // Update userWorkout with the new favoritedExercise
    const userWorkoutUpdate = await prisma.userWorkout.update({
      where: { id: userWorkoutData.id },
      data: {
        favoritedExercise: {
          connect: { id: favoritedExerciseData.id },
        },
      },
    });

    if (!userWorkoutUpdate) {
      return NextResponse.json(
        { error: "Favorited exercise not updated!" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Favorited exercise added successfully" },
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
