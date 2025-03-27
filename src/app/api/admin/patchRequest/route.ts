import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function PATCH(req: NextRequest) {
  // Check if path is Patch
  if (req.method !== "PATCH") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  // Get User from Token
  const userId = getDataFromToken(req);

  // Check if user is in Token
  if (!userId) {
    return NextResponse.json({ message: "No User" }, { status: 401 });
  }

  try {
    // Run prisma update
    const user = await prisma.user.update({
      where: { id: userId },
      data: { requestedAdmin: true },
    });

    // Return success message
    return NextResponse.json(
      { message: "Admin request sent!", user },
      { status: 200 }
    );
  } catch (error) {
    // Handle errors
    return NextResponse.json(
      { error: "Failed to request admin access" },
      { status: 500 }
    );
  }
}
