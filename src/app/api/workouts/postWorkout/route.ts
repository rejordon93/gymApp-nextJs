import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { workout, createdAt, completed, workoutDay } = body;

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
    let userId;
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
        userId,
        workoutDay, // This assumes each user can have only one workout per day
      },
    });

    let response;

    if (existingWorkout) {
      // If a workout already exists, update it
      const updateWorkout = await prisma.userWorkout.update({
        where: {
          id: existingWorkout.id, // Use the existing workout ID
        },
        data: {
          workout,
          completed,
        },
      });

      response = {
        message: "Workout successfully updated",
        userWorkout: updateWorkout,
      };
    } else {
      // If no workout exists, create a new one
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
    if (error instanceof Error) {
      console.error("Error processing workout creation or update:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Error processing workout creation or update:", {
        message: String(error),
      });
    }
    return NextResponse.json(
      { error: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
