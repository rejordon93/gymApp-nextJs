import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req: NextRequest) {
  const employeeId = getDataFromToken(req);

  if (!employeeId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const employee = await prisma.employee.findUnique({
    where: { id: employeeId },
    include: {
      roles: {
        include: {
          role: true,
        },
      },
    },
  });
  console.log(employee?.roles);

  return NextResponse.json({ employee }, { status: 200 });
}
