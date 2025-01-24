import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { WorkoutPlanInput } from "@/app/types/page";

export async function PATCH(req: NextRequest) {
  try {
    const body: WorkoutPlanInput = await req.json();
    const { userId, checkout, checkinBtn } = body;

    console.log("Request body:", body); // Log the request body

    // Validate request body
    if (!userId || !checkout || checkinBtn === undefined) {
      return NextResponse.json(
        { error: "Missing required fields in request body" },
        { status: 400 }
      );
    }

    // Retrieve and validate user token
    const userToken = getDataFromToken(req);
    if (!userToken) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    console.log("Updating visit for userId:", userId); // Log the userId

    const visit = await prisma.visits.findFirst({
      where: { userId: userId },
    });

    if (!visit) {
      return NextResponse.json(
        { error: "Visit record not found for the provided userId" },
        { status: 404 }
      );
    }

    // Update the visit record with the checkout time and checkin button state
    const updatedVisit = await prisma.visits.update({
      where: { id: visit.id }, // Use the correct primary key (`id`)
      data: { checkout: checkout, checkinBtn: checkinBtn },
    });

    console.log("Updated visit:", updatedVisit); // Log the updated visit

    // Return a success response with the updated visit data
    return NextResponse.json(
      { message: "Visit updated successfully", data: updatedVisit },
      { status: 200 }
    );
  } catch (error) {
    // Ensure error is an object
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error updating visit:", errorMessage);

    // Return a 500 Internal Server Error response
    return NextResponse.json(
      { error: "Internal Server Error", details: errorMessage },
      { status: 500 }
    );
  }
}
