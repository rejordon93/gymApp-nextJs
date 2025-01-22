import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, workoutDay, workout, completed, createdAt } = body;

    // Validate required fields
    if (!id || !workout) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    // Find the existing workout by id
    const existingWorkout = await prisma.userWorkout.findFirst({
      where: { id },
    });

    if (!existingWorkout) {
      return NextResponse.json({ error: "Workout not found" }, { status: 404 });
    }

    // Update the workout by appending new items or updating specific fields
    const updatedWorkout = await prisma.userWorkout.update({
      where: { id },
      data: {
        workout: {
          // Appending new workouts to the existing workout array
          set: [...existingWorkout.workout, ...workout], // Using `set` to update workout array
        },
        workoutDay: workoutDay ?? existingWorkout.workoutDay, // Update workout day if provided, else keep old value
        completed: completed ?? existingWorkout.completed, // Update completed if provided, else keep old value
        createdAt: createdAt ?? existingWorkout.createdAt, // Update createdAt if provided, else keep old value
      },
    });

    return NextResponse.json(updatedWorkout, { status: 200 }); // Return the updated workout
  } catch (error) {
    console.error("Error updating workout:", error);
    return NextResponse.json(
      { error: "Failed to update workout. Please try again." },
      { status: 500 }
    );
  }
}
