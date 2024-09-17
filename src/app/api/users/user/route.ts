import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    if (userId === null) {
      return NextResponse.json(
        { error: "Invalid token or no user found" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const workouts = await prisma.workout.findMany({
      where: { user_id: userId }, // Filter workouts by user ID
      select: {
        id: true,
        equipment: true,
        duration: true,
        checkin: true,
      },
    });

    return NextResponse.json({
      message: "User Found",
      user,
      workouts, // Return workouts data as well
    });
  } catch (error: any) {
    console.error("Error fetching user:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 400 }
    );
  }
}
