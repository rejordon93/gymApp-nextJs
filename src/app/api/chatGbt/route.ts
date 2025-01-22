import { NextResponse } from "next/server";
import openai from "@/utils/openAi";

export async function GET() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo", // Replace with a valid model
    });
    return NextResponse.json(completion);
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
