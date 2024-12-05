import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { dayOfWeek, createdAt, editedAt, completed } = body;

    // Validate request body
    if (!dayOfWeek || !createdAt || !editedAt || !completed) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: dayOfWeek, createdAt, editedAt, completed",
        },
        { status: 400 }
      );
    }

    // Validate completed is a boolean
    if (typeof completed !== "boolean") {
      return NextResponse.json(
        { error: "The 'completed' field must be a boolean" },
        { status: 400 }
      );
    }

    // Extract user ID from the token
    const userId = getDataFromToken(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token or no user associated with this request" },
        { status: 401 }
      );
    }

    // Create a new user workout
    const userWorkout = await prisma.userWorkout.create({
      data: {
        dayOfWeek,
        createdAt,
        editedAt,
        completed,
        userId,
      },
    });

    // Send success response
    return NextResponse.json(
      {
        message: `userWorkout successfully added for User ID: ${userId}`,
        userWorkout: {
          id: userWorkout.id,
          dayOfWeek: userWorkout.dayOfWeek,
          createdAt: userWorkout.createdAt,
          editedAt: userWorkout.editedAt,
          completed: userWorkout.completed,
        },
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
