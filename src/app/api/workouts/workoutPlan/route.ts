import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

interface WorkoutPlanInput {
  userPlanId: number;
  checkin: Date | string;
  weight: number;
  updateWeighIn: number;
  workoutReview: string;
  checkout: Date | string;
}

export async function POST(req: NextRequest) {
  try {
    const body: WorkoutPlanInput = await req.json();
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

    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    if (isNaN(checkinDate.getTime()) || isNaN(checkoutDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid date format for checkin or checkout" },
        { status: 400 }
      );
    }

    if (checkinDate >= checkoutDate) {
      return NextResponse.json(
        { error: "Checkout time must be after checkin time" },
        { status: 400 }
      );
    }

    // Create workout plan in the database
    const planWorkout = await prisma.workoutPlan.create({
      data: {
        userPlanId,
        checkin: checkinDate,
        weight,
        updateWeighIn,
        workoutReview,
        checkout: checkoutDate,
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
