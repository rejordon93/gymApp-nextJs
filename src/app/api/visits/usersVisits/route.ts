import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { WorkoutPlanInput } from "@/app/types/page";

export async function POST(req: NextRequest) {
  try {
    const body: WorkoutPlanInput = await req.json();
    const { userId, checkin } = body;

    // Validate user token
    const userToken = getDataFromToken(req);
    if (!userToken) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    if (!userId || !checkin) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    const checkinDate = new Date().toISOString();

    // Create workout plan in the database
    const userVisit = await prisma.visits.create({
      data: {
        userId,
        checkin: checkinDate,
        checkout: null,
      },
    });

    return NextResponse.json(
      {
        message: "Workout plan created successfully",
        data: userVisit,
      },
      { status: 201 }
    );
  } catch (error) {
    // Check if error is null or undefined
    if (!error) {
      return NextResponse.json(
        { error: "An unexpected error occurred. Please try again later." },
        { status: 500 }
      );
    }

    // If error is an object, log it
    if (error instanceof Error) {
      console.error("Error processing the request:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Fallback for unknown errors
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
