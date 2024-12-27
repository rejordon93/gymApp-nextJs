import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { WorkoutPlanInput } from "@/app/types/page";

export async function PATCH(req: NextRequest) {
  try {
    const body: WorkoutPlanInput = await req.json();
    const { userPlanId, checkout } = body;

    // Validate user token
    const userToken = getDataFromToken(req);
    if (!userToken) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    // Validate required fields
    if (!userPlanId || !checkout) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    // Update the workout plan
    const planWorkout = await prisma.workoutPlan.update({
      where: {
        userPlanId: userPlanId,
      },
      data: {
        userPlanId,
        checkout,
      },
    });

    return NextResponse.json(planWorkout, { status: 200 });
  } catch (error) {
    console.error("API Error: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
