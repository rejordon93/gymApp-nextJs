import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function PATCH(req: NextRequest) {
  if (req.method !== "PATCH") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  try {
    const { email } = await req.json();
    console.log("Received email:", email); // Debugging line

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

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

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { requestedTrainer: true },
    });

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
