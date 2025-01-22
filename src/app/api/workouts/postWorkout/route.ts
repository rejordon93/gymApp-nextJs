import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { workout } = body;
    console.log(workout);
    // Check if the workout title is provided
    if (!workout) {
      return NextResponse.json(
        { error: "Missing required workout title" },
        { status: 400 }
      );
    }

    // Get the userId from the token
    const userId = getDataFromToken(req);

    // Check if the userId is valid
    if (!userId) {
      return NextResponse.json({ message: "No user token" }, { status: 401 });
    }

    // Create the new user workout
    const postWorkout = await prisma.userWorkout.create({
      data: {
        workout,
        userId,
      },
    });

    // Retrieve the visit ID for the user
    // const visit = await prisma.visits.findFirst({
    //   where: { userId },
    // });

    // // Check if a visit exists for the user
    // if (!visit) {
    //   return NextResponse.json(
    //     { error: `No visit found for user ID ${userId}` },
    //     { status: 404 }
    //   );
    // }

    // Update the Visits table by linking the new UserWorkout
    //  const updateVisit = await prisma.visits.update({
    //    where: {
    //      id: visit.id, // Use the visit's ID for the update
    //    },
    //    data: {
    //      userWorkouts: {
    //        connect: { id: postWorkout.id }, // Connect the new UserWorkout to the visit
    //      },
    //    },
    //  });

    console.log("Post Workout:", postWorkout); // Debugging line

    // Return a successful response with the created workout
    return NextResponse.json(postWorkout, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/workouts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
