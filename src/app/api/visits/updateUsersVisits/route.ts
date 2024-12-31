import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { WorkoutPlanInput } from "@/app/types/page";

export async function PATCH(req: NextRequest) {
  try {
    const body: WorkoutPlanInput = await req.json();
    const { userId, checkin, checkout } = body;

    const userToken = getDataFromToken(req);

    if (!userToken) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    if (!userId || !checkin || !checkout) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }
    const userVisit = await prisma.visits.findFirst({
      where: { userId: userId, checkin: checkin },
    });
    if (!userVisit) {
      return NextResponse.json(
        { error: "No user visit found" },
        { status: 404 }
      );
    }
    console.log(userVisit);
    const updatedVisit = await prisma.visits.update({
      where: { id: userVisit.id },
      data: { checkout: checkout },
    });
    console.log(updatedVisit);

    return NextResponse.json(
      { message: "Visit updated successfully", data: updatedVisit },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
