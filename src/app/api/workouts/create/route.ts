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
export async function POST(req: NextRequest) {
  try {
    const {
      checkin,
      equipment,
      duration,
      calories,
      weightLifted,
      distance,
      repetitions,
    } = await req.json();

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
        equipment: equipment || null,
        duration: duration || null,
        checkin: new Date(checkin), // Ensure date format is correct
        calories: calories || 0, // Default to 0 if not provided
        weightLifted: weightLifted || null, // Optional field
        distance: distance || null, // Optional field
        repetitions: repetitions || null, // Optional field
        user_id: userId,
      },
    });
    // Send success response
    return NextResponse.json({
      message: "Workout added successfully",
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

export async function PATCH(req: NextRequest) {
  try {
    const { id, checkout, checkin } = await req.json(); // Ensure you're extracting the correct properties from the request body

    if (!id || !checkout || !checkin) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert checkin and checkout to Date objects
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    // Calculate duration in milliseconds
    const duration = (checkoutDate.getTime() - checkinDate.getTime()) / 1000; // Convert to seconds

    // Update the workout in the database
    const workout = await prisma.workout.update({
      where: { id }, // Ensure you have the workout ID to update
      data: {
        id: id,
        checkout: checkoutDate,
        checkin: checkinDate,
        duration: duration || 0,
      },
    });

    return NextResponse.json({
      message: "Workout updated successfully",
      workout,
    });
  } catch (error) {
    console.error("Error updating the workout:", error);
    return NextResponse.json(
      { error: "Failed to update workout" },
      { status: 500 }
    );
  }
}
