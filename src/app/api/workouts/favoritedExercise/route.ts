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

    // Check if userWorkout exists
    const userWorkout = await prisma.userWorkout.findUnique({
      where: { id },
    });

    if (!userWorkout) {
      return NextResponse.json(
        { error: "User workout not found" },
        { status: 404 }
      );
    }

    // Check if an exercise with this name already exists
    let favoritedExercise = await prisma.favoritedExercise.findUnique({
      where: { name },
    });

    // If the exercise doesn't exist, create it
    if (!favoritedExercise) {
      favoritedExercise = await prisma.favoritedExercise.create({
        data: {
          name,
          equipment,
          gifUrl,
          instructions,
          secondaryMuscles,
          target,
        },
      });
    }

    // Update userWorkout with the new favoritedExercise
    const updatedUserWorkout = await prisma.userWorkout.update({
      where: { id: userWorkout.id },
      data: {
        favoritedExercise: {
          connect: { id: favoritedExercise.id },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Favorited exercise added successfully",
        favoritedExercise,
        updatedUserWorkout,
      },
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
