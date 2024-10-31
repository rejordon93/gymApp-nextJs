import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const GET = async (req: NextRequest) => {
  console.log("From FavoriteWorkouts");
  console.log(req.url);
  const { searchParams } = new URL(req.url);
  const searchValue = searchParams.get("searchValue");
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchValue}`,
    params: {
      limit: "10",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
  }
};
