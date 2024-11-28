import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const { checkin, duration, distance, repetitions } = await req.json();

    if (!checkin) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Assuming you have a function to extract the user ID from the token
    const userId = getDataFromToken(req);

    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token or no user found" },
        { status: 401 }
      );
    }

    // Create workout in the database
    const workout = await prisma.workout.create({
      data: {
        duration: duration || null,
        checkin: new Date(checkin), // Ensure date format is correct
        distance: distance || null, // Optional field
        repetitions: repetitions || null, // Optional field
        user_id: userId,
      },
    });
    // Send success response
    return NextResponse.json({
      message: `User ID ${userId} successfully CheckedIn`,
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
