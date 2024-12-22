import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

interface ProfileType {
  firstName: string;
  lastName: string;
  homeClub?: string;
  memberSince?: string;
  currentStatus?: string;
  cellPhone?: string;
  city?: string;
  state: string;
  zipCode: string;
}

export async function GET(req: NextRequest) {
  try {
    const profilePlans = await prisma.profilePlan.findFirst({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(profilePlans);
  } catch (error) {
    console.error("Something went wrong:", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function POST(req: NextRequest) {
  try {
    const body: ProfileType = await req.json();
    const {
      firstName,
      lastName,
      homeClub,
      memberSince,
      currentStatus,
      cellPhone,
      city,
      state,
      zipCode,
    } = body;

    // Validate token and user ID
    const userId = await getDataFromToken(req);
    console.log("User ID:", userId); // Log the userId for debugging
    if (!userId) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !homeClub ||
      !memberSince ||
      !currentStatus ||
      !cellPhone ||
      !city ||
      !state ||
      !zipCode
    ) {
      return NextResponse.json(
        { error: "Invalid or missing required fields" },
        { status: 400 }
      );
    }

    // Check if a profile already exists for this user
    const existingProfile = await prisma.profilePlan.findUnique({
      where: { userId },
    });

    if (existingProfile) {
      // Update existing profile
      const updatedProfile = await prisma.profilePlan.update({
        where: { userId },
        data: {
          firstName,
          lastName,
          homeClub,
          memberSince, // Convert to Unix timestamp
          currentStatus,
          cellPhone, // Convert to number type
          city,
          state,
          zipCode, // Convert to number type
        },
      });
      return NextResponse.json(updatedProfile, { status: 200 });
    } else {
      // Create a new profile
      const newProfile = await prisma.profilePlan.create({
        data: {
          firstName,
          lastName,
          userId,
          homeClub,
          memberSince,
          currentStatus,
          cellPhone,
          city,
          state,
          zipCode,
        },
      });
      return NextResponse.json(newProfile, { status: 201 });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Something went wrong:", error.message);
    } else {
      console.error("Something went wrong:", error);
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
