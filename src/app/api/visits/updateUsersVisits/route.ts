import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { WorkoutPlanInput } from "@/app/types/page";

export async function PATCH(req: NextRequest) {
  try {
    const body: WorkoutPlanInput = await req.json();
    const { userId, workoutReview } = body;

    const userToken = getDataFromToken(req);

    if (!userToken) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    if (!userId || !workoutReview) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    const userVisit = await prisma.visits.update({
      where: { userId: userId },
      data: {
        workoutReview: workoutReview,
      },
    });
    return NextResponse.json(
      {
        message: "Workout plan updated successfully",
        data: userVisit,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
