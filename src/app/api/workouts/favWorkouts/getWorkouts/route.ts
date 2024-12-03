import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req: NextRequest) {
  try {
    // Assuming you extract userId from token
    const userId = getDataFromToken(req);

    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token or no user found" },
        { status: 401 }
      );
    }

    const workoutHours = await prisma.workout.findMany({
      where: {
        user_id: userId,
        duration: { not: null }, // Only include workouts with a non-null duration
      },
      select: {
        id: true, // Only select the `id` field
        duration: true,
        checkin: true,
        checkout: true,
      },
      orderBy: {
        duration: "desc", // Order by duration in descending order
      },
    });

    if (!workoutHours) {
      return NextResponse.json(
        { message: "No duration hours" },
        { status: 404 }
      );
    }

    // Return the workouts
    return NextResponse.json(workoutHours);
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return NextResponse.json(
      { error: "Failed to fetch workouts" },
      { status: 500 }
    );
  }
}
