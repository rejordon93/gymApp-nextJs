import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const userId = getDataFromToken(req);

    if (!userId) {
      NextResponse.json({ error: "Invalid token or no user found" }),
        { status: 401 };
    }

    const deletedExercise = await prisma.favoritedExercise.delete({
      where: { id: id },
    });

    console.log(deletedExercise);

    return NextResponse.json({
      message: `Exercise with ID ${id} successfully remove`,
      deletedExercise,
    });
  } catch (error) {
    console.error("Error processing the request", error);
  }
}
