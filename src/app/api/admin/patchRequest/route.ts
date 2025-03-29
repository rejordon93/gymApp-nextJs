import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function PATCH(req: NextRequest) {
  // Check if the method is PATCH
  if (req.method !== "PATCH") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  try {
    // Extract the email from the request body
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    // Update the user to request admin access
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { requestedAdmin: true },
    });

    // Return success message
    return NextResponse.json(
      { message: "Admin request sent!", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PATCH request:", error);
    return NextResponse.json(
      { error: "Failed to request admin access" },
      { status: 500 }
    );
  }
}
