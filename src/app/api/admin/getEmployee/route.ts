import { NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function GET() {
  try {
    console.log("Starting the query...");

    // Query the employee by email
    const getEmployee = await prisma.employee.findMany({
      include: {
        roles: true,
        trainer: true,
      },
    });

    // Check if employee was found
    if (!getEmployee) {
      console.log("No employee found with this email");
      return NextResponse.json(
        { message: "No employee found with this email" },
        { status: 404 }
      );
    }

    console.log("Employee found:", getEmployee);
    return NextResponse.json(getEmployee);
  } catch (error) {
    // Add more detailed error logging
    console.error("Error while fetching employee:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
