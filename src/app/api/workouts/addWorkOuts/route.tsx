import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  // Check if the environment variables are defined
  const rapidApiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
  const rapidApiHost = process.env.NEXT_PUBLIC_RAPIDAPI_HOST;

  if (!rapidApiKey || !rapidApiHost) {
    return NextResponse.json(
      { error: "API keys are not defined." },
      { status: 500 }
    );
  }

  try {
    const response = await axios.get(
      "https://exercise-db-fitness-workout-gym.p.rapidapi.com/exercises/mechanic/isolation",
      {
        headers: {
          "x-rapidapi-key": rapidApiKey, // Use the defined variables
          "x-rapidapi-host": rapidApiHost,
        },
        withCredentials: true, // Include credentials if needed
      }
    );

    return NextResponse.json(response.data); // Return the fetched data as JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch workout equipment" },
      { status: 500 }
    );
  }
}
