import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const { checkin, weight, updateWeighIn, workoutReview, checkout } =
      await req.json();
    console.log("Received data:", {
      checkin,
      weight,
      updateWeighIn,
      workoutReview,
      checkout,
    });
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
    const workout = await prisma.workoutPlan.create({
      data: {
        checkin: new Date(checkin),
        weight: weight || 0,
        updateWeighIn: updateWeighIn || 0,
        workoutReview: workoutReview || "", // Ensure this is optional and handled
        checkout: checkout || false,
        user: {
          connect: { id: userId },
        },
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
