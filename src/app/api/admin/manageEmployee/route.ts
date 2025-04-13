import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { username, email, password, name } = body;

  if (!username || !email || !password || !name) {
    return NextResponse.json({ message: "Missing User data" }, { status: 409 });
  }
}
