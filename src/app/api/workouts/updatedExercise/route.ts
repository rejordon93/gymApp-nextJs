import { NextResponse, NextRequest } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { exerciseId, updateBody } = body;

    if (!exerciseId || !updateBody) {
      return NextResponse.json(
        { message: "Exercise ID and update data are required" },
        { status: 401 }
      );
    }

    const { name, equipment, gifUrl, instructions, secondaryMuscles, target } =
      updateBody;

    const userId = getDataFromToken(req);

    if (!userId) {
      return NextResponse.json(
        { message: "No Token or invalid user" },
        { status: 401 }
      );
    }

    const updateExercise = await prisma.favoritedExercise.update({
      where: { id: exerciseId },
      data: {
        name: name || "",
        equipment: equipment || "",
        gifUrl: gifUrl || "",
        instructions: instructions || "",
        secondaryMuscles: secondaryMuscles || "",
        target: target || "",
      },
    });
    console.log(updateExercise);
    return NextResponse.json({
      message: "Exercise updated successfully",
      updateExercise,
    });
  } catch (error) {
    console.error("Somthing want Wrong updateing", error);
  }
  return NextResponse.json(
    {
      message: "error",
    },
    { status: 401 }
  );
}
