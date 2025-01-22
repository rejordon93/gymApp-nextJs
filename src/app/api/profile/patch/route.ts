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

export async function PATCH(req: NextRequest) {
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

    // Validate required fields
    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: "Missing required fields: firstName or lastName" },
        { status: 400 }
      );
    }

    // Validate token and user ID
    const userId = await getDataFromToken(req);
    if (!userId) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    // Check if a profile already exists for this user
    const existingProfile = await prisma.profilePlan.findUnique({
      where: { userId },
    });

    let profileResponse;
    if (existingProfile) {
      // Update existing profile
      profileResponse = await prisma.profilePlan.update({
        where: { userId },
        data: {
          firstName,
          lastName,
          homeClub,
          memberSince,
          currentStatus,
          cellPhone,
          city,
          state,
          zipCode,
        },
      });
    } else {
      // No profile exists, create a new profile
      profileResponse = await prisma.profilePlan.create({
        data: {
          userId,
          firstName,
          lastName,
          homeClub,
          memberSince,
          currentStatus,
          cellPhone,
          city,
          state,
          zipCode,
        },
      });
    }

    console.log(profileResponse);

    return NextResponse.json(profileResponse, { status: 200 });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
