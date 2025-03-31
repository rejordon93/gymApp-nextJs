import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req: NextRequest) {
  // check if method is GET
  if (req.method !== "GET") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  // Get User from Token
  const userId = getDataFromToken(req);

  // Run check on user
  if (!userId) {
    return NextResponse.json({ message: "No User" }, { status: 401 });
  }

  // Fetch requests from the database
  try {
    const requests = await prisma.user.findMany({
      where: { requestedTrainer: true },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        isOnline: true,
      },
    });

    return NextResponse.json(requests, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error); // Detailed error log
    return NextResponse.json(
      { error: "Failed to fetch admin requests" },
      { status: 500 }
    );
  }
}
