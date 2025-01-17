import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, workout, createdAt, completed, workoutDay } = body;

    // Validate request body
    if (
      !workout ||
      !createdAt ||
      typeof completed !== "boolean" ||
      !workoutDay
    ) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    // Validate user token
    let userId: number;
    try {
      userId = getDataFromToken(req);
    } catch {
      return NextResponse.json(
        { error: "Invalid token provided" },
        { status: 401 }
      );
    }
    if (!userId) {
      return NextResponse.json(
        { error: "No user associated with this request" },
        { status: 401 }
      );
    }

    // Check if the user already has a workout entry for the day
    const existingWorkout = await prisma.userWorkout.findFirst({
      where: {
        id: id,
      },
    });

    let response;
    // If no workout exists, create a new one
    if (!existingWorkout) {
      const newWorkout = await prisma.userWorkout.create({
        data: {
          workout,
          workoutDay,
          createdAt,
          completed,
          userId,
        },
      });
      response = {
        message: "Workout successfully added",
        userWorkout: newWorkout,
      };
    }

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    // Log and handle internal server errors
    console.error("Error processing workout creation or update:", error);
    return NextResponse.json(
      { error: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
