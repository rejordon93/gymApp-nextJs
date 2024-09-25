import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { error } from "console";

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);

    console.log("User ID:", userId);

    if (userId === null) {
      return NextResponse.json(
        { error: "Invalid token or no user found" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    const workouts = await prisma.workout.findMany({
      where: { user_id: userId },
      select: {
        id: true,
        equipment: true,
        duration: true,
        calories: true,
        weightLifted: true,
        distance: true,
        repetitions: true,
        checkin: true,
        user_id: true,
        createdAt: true,
        editedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "User Found",
      user,
      workouts,
    });
  } catch (error: any) {
    console.error("Error fetching user:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 400 }
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
        checkout: checkoutDate, // Ensure this is a valid Date
        checkin: checkinDate,
        duration: duration || 0, // Default to 0 if duration is not calculated
        // include any other fields you want to update here
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
