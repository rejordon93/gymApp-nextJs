import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function PATCH(req: NextRequest) {
  // check if method Patch
  if (req.method !== "PATCH") {
    NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }

  // get user form token
  const userId = getDataFromToken(req);

  // check if user in token
  if (!userId) {
    NextResponse.json({ message: "No User" }, { status: 401 });
  }

  // update user primsa requestedAdmin false
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { requestedAdmin: false },
    });

    // working  200
    NextResponse.json({ message: "Admin request rejected" }, { status: 200 });
    // not working  500
  } catch (error) {
    NextResponse.json(
      { error: "Failed to reject admin request" },
      { status: 500 }
    );
  }
}
