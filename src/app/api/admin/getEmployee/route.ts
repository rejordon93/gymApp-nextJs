import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req: NextRequest) {
  try {
    // Get user ID from token
    const userID = getDataFromToken(req);

    if (!userID) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Get current user to verify existence
    const currentUser = await prisma.employee.findUnique({
      where: {
        id: userID,
      },
    });

    if (!currentUser) {
      return NextResponse.json(
        { message: "No user is online" },
        { status: 404 }
      );
    }

    // Fetch all employees including their roles and trainer relations
    const employees = await prisma.employee.findMany({
      include: {
        roles: true,
        trainer: true,
      },
    });

    const employeeRole = await prisma.employeeAuthority.findMany({
      include: {
        role: true,
      },
    });
    console.log(employeeRole);

    // Return employee data
    return NextResponse.json({ currentUser, employees, employeeRole });
  } catch (error) {
    console.error("Error while fetching employees:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
