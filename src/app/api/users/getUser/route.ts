import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req: NextRequest) {
  try {
    // Extract token from headers
    const userId = await getDataFromToken(req);
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Authorization token is required" },
        { status: 401 }
      );
    }

    if (!userId) {
      return NextResponse.json({ error: "No user logged in" }, { status: 401 });
    }

    const user = await prisma.user.findMany();

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }

    // Fetch user from the database
    // const user = await prisma.user.findUnique({
    //   where: {
    //     id: userId,
    //   },
    // });

    // if (!user) {
    //   return NextResponse.json(
    //     { error: "User does not exist" },
    //     { status: 404 }
    //   );
    // }

    // Return the user data
    // return NextResponse.json({
    //   message: "Data from GET_USER",
    //   username: user.username,
    //   email: user.email,
    //   token: token,
    // });

    return NextResponse.json({
      message: { message: "Data from User" },
      user,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
