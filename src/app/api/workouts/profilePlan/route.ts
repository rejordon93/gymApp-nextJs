import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

interface ProfileType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  homeClub: string;
  memberSince: string;
  cellPhone: string;
  city: string;
  zipPostal: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ProfileType = await req.json();
    const {
      id,
      firstName,
      lastName,
      email,
      homeClub,
      memberSince,
      cellPhone,
      city,
      zipPostal,
    } = body;

    // Validate token and user ID
    const userId = await getDataFromToken(req);
    if (!userId) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    // Validate required fields
    if (
      !id ||
      !firstName ||
      !lastName ||
      !email ||
      !homeClub ||
      !memberSince ||
      !cellPhone ||
      !city ||
      !zipPostal
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if the associated workout plan exists
    const workoutPlan = await prisma.workoutPlan.findUnique({
      where: { id },
    });

    if (!workoutPlan) {
      return NextResponse.json(
        { error: "Workout plan not found" },
        { status: 404 }
      );
    }

    // Check if a profile already exists
    const existingProfile = await prisma.profilePlan.findUnique({
      where: { id },
    });

    if (existingProfile) {
      return NextResponse.json(
        { error: "Profile already exists for this workout plan" },
        { status: 400 }
      );
    }

    // Create a new profile
    const newProfile = await prisma.profilePlan.create({
      data: {
        firstName,
        lastName,
        email,
        homeClub,
        memberSince: new Date(memberSince), // Ensure `memberSince` is parsed as a Date
        cellPhone,
        city,
        zipPostal,
        workoutPlanId: id, // Link to the associated workout plan
      },
    });

    return NextResponse.json(newProfile, { status: 201 });
  } catch (error) {
    console.error("Something went wrong:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
