import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received body:", body); // Debugging the incoming request body

    const { newWorkout } = body;

    if (!newWorkout) {
      return NextResponse.json(
        { error: "Missing required field: newWorkout" },
        { status: 400 }
      );
    }

    const userId = getDataFromToken(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token or no user associated with this request" },
        { status: 401 }
      );
    }
    const existingWorkout = await prisma.userWorkout.findUnique({
      where: { userId },
    });

    console.log("Existing workout:", existingWorkout);

    const updatedWorkout = await prisma.userWorkout.update({
      where: { userId },
      data: {
        workout: {
          push: newWorkout.workout, // Append to the existing workout array
        },
        editedAt: new Date(),
      },
    });

    console.log("Updated workout:", updatedWorkout); // Log updatedWorkout here

    // Check if update returned null or invalid response
    if (!updatedWorkout) {
      console.error("Failed to update workout for user:", userId);
      return NextResponse.json(
        { error: "Failed to update workout" },
        { status: 500 }
      );
    }

    return NextResponse.json(updatedWorkout, { status: 200 });
  } catch (error) {
    console.error("Error updating workout:", error); // Improved error logging
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
