import { NextRequest, NextResponse } from "next/server"; // Import Next.js request/response utilities
import prisma from "@/database/prisma"; // Import Prisma client instance
import { getDataFromToken } from "@/helpers/getDataFromToken"; // Helper function to extract data from user token
import { WorkoutPlanInput } from "@/app/types/page"; // Import type definitions for the request body

// Handler for the PATCH HTTP request
export async function PATCH(req: NextRequest) {
  try {
    // Parse the JSON body from the incoming request
    const body: WorkoutPlanInput = await req.json();
    const { userId, checkin, checkout } = body; // Destructure required fields from the request body

    // Retrieve and validate user token
    const userToken = getDataFromToken(req);

    // If no valid user token is found, return a 401 Unauthorized response
    if (!userToken) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    // Validate that all required fields are present in the request body
    if (!userId || !checkin || !checkout) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    // Search for the user's visit record in the database
    const userVisit = await prisma.visits.findFirst({
      where: { userId: userId, checkin: checkin }, // Match by userId and checkin time
    });

    // If no visit record is found, return a 404 Not Found response
    if (!userVisit) {
      return NextResponse.json(
        { error: "No user visit found" },
        { status: 404 }
      );
    }

    // Update the visit record with the checkout time
    const updatedVisit = await prisma.visits.update({
      where: { id: userVisit.id }, // Use the unique id of the visit record
      data: { checkout: checkout }, // Update the checkout field
    });

    // Log the updated visit record for debugging purposes
    console.log(updatedVisit);

    // Return a success response with the updated visit data
    return NextResponse.json(
      { message: "Visit updated successfully", data: updatedVisit },
      { status: 200 }
    );
  } catch (error) {
    // Handle any unexpected errors and return a 500 Internal Server Error response
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
