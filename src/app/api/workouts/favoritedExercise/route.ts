import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const userId = getDataFromToken(req);

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access: token invalid or missing" },
        { status: 401 }
      );
    }
    const favoriteWorkouts = await prisma.favoriteWorkout.findMany({
      where: { user_id: userId },
    });
    return NextResponse.json(
      {
        date: favoriteWorkouts,
        message: "Fetched favorite workouts successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching favorite workouts:", error);
    return NextResponse.json(
      { error: "Failed to fetch workouts" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      bodyPart,
      equipment,
      gifUrl,
      instructions,
      secondaryMuscles,
      name,
      target,
    } = await req.json();

    // Check for required fields
    if (!bodyPart || !target || !gifUrl) {
      return NextResponse.json(
        { error: "Missing required fields: bodyPart, target, or gifUrl" },
        { status: 400 }
      );
    }

    // Get the user ID from the token
    const userId = getDataFromToken(req);

    if (!userId) {
      console.error("Invalid token: unable to retrieve user ID");
      return NextResponse.json(
        { error: "Invalid token or no user found" },
        { status: 401 }
      );
    }

    // Create a favorite workout entry in the database
    const favoriteWorkout = await prisma.favoriteWorkout.create({
      data: {
        name: name || "",
        bodyPart,
        equipment: equipment || null,
        gifUrl,
        instructions: instructions || [],
        secondaryMuscles: secondaryMuscles || [],
        target,
        user_id: userId,
      },
    });

    return NextResponse.json({
      message: `User ID ${userId} successfully added workout to favorites`,
      favoriteWorkout,
    });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
