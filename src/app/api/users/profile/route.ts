import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);

    console.log("User ID:", userId);

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

    const workouts = await prisma.workout.findMany({
      where: { user_id: userId },
      select: {
        id: true,
        duration: true,
        distance: true,
        repetitions: true,
        checkin: true,
        user_id: true,
        createdAt: true,
        editedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "User Found",
      user,
      workouts,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching user:", error.message);
    }
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 400 }
    );
  }
}
