import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      bodyPart,
      equipment,
      gifUrl,
      instructions,
      secondaryMuscles,
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
        bodyPart,
        equipment: equipment || null,
        gifUrl,
        instructions: instructions || null,
        secondaryMuscles: secondaryMuscles || null,
        target,
        createdAt: new Date(),
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
