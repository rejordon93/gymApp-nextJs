import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      userPlanId,
      checkin,
      weight,
      updateWeighIn,
      workoutReview,
      checkout,
    } = body;

    // Validate user token
    const userToken = getDataFromToken(req);
    if (!userToken) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    // Validate required input fields
    if (
      !userPlanId ||
      !checkin ||
      !weight ||
      !updateWeighIn ||
      !workoutReview ||
      !checkout
    ) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    // Validate date fields
    if (!new Date(checkin).getTime() || new Date(checkout).getTime()) {
      return NextResponse.json(
        { error: "Invalid date format for checkin or checkout" },
        { status: 400 }
      );
    }

    // Create workout plan in the database
    const planWorkout = await prisma.workoutPlan.create({
      data: {
        userPlanId,
        checkin: new Date(checkin),
        weight,
        updateWeighIn,
        workoutReview,
        checkout: new Date(checkout),
      },
    });

    return NextResponse.json(
      {
        message: "Workout plan created successfully",
        planWorkout,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
