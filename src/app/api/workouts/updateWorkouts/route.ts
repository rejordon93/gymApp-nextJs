import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";

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
