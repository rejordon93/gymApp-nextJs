import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, equipment, gifUrl, instructions, secondaryMuscles, target } =
      body;

    // Assuming you have a function to extract the user ID from the token
    const userId = getDataFromToken(req);

    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token or no user found" },
        { status: 401 }
      );
    }

    // Create workout in the database
    const workout = await prisma.favoritedExercise.create({
      data: {
        name: name || "",
        equipment: equipment || "",
        gifUrl: gifUrl || "",
        instructions: instructions || "",
        secondaryMuscles: secondaryMuscles || "",
        target: target || "",
      },
    });

    console.log(workout);

    // Send success response
    return NextResponse.json({
      message: `User ID ${userId} successfully Added Workout`,
      workout,
    });
  } catch (error) {
    console.error("Error processing the request", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
