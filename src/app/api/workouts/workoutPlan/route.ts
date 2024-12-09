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

    const userToken = getDataFromToken(req);
    if (!userToken) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    if (
      !userPlanId ||
      !checkin ||
      !weight ||
      !updateWeighIn ||
      !workoutReview ||
      !checkout
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const planWorkout = await prisma.workoutPlan.create({
      data: {
        userPlanId,
        checkin,
        weight,
        updateWeighIn,
        workoutReview,
        checkout,
      },
    });
    if (!planWorkout) {
      return NextResponse.json(
        { message: "Missing planWorkout data" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "planWorkout added successsfully" },
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
