import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

type TokenProps = {
  id: number;
};

export const getDataFromToken = (request: NextRequest) => {
  try {
    // Retrieve the token from cookies
    const token = request.cookies.get("token")?.value;

    if (!token) {
      console.error("No token provided");
      throw new Error("No token provided");
    }

    // Decode the token
    const decodedToken = jwt.verify(
      token,
      process.env.TOKEN_SECRET!
    ) as TokenProps;
    console.log("Decoded token:", decodedToken);

    return decodedToken.id;
  } catch (error: any) {
    console.error("Token verification failed:", error.message);
    throw new Error("Invalid token");
  }
};
