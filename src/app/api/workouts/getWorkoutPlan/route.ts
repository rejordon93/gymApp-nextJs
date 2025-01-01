// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/database/prisma";
// import { getDataFromToken } from "@/helpers/getDataFromToken";

// const today = new Date();
// const startOfWeek = new Date(today);
// startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)

// const endOfWeek = new Date(startOfWeek);
// endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (Saturday)

// export async function GET(req: NextRequest) {
//   // Validate user token
//   const userToken = getDataFromToken(req);
//   if (!userToken) {
//     return NextResponse.json({ error: "No user logged in" }, { status: 401 });
//   }

//   try {
//     // Retrieve and filter workout plans
//     const filteredCheckouts = await prisma.visits.findMany({
//       where: {
//         OR: [
//           {
//             checkout: {
//               gte: startOfWeek, // Greater than or equal to the start of the week
//               lte: endOfWeek, // Less than or equal to the end of the week
//             },
//           },
//           {
//             checkin: {
//               gte: startOfWeek,
//               lte: endOfWeek,
//             },
//           },
//         ],
//       },
//       orderBy: {
//         checkout: "asc",
//       },
//     });

//     // Format the filtered dates (optional)
//     const formattedCheckouts = filteredCheckouts.map((plan) => ({
//       checkin: new Date(plan.checkin).toLocaleString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         hour12: true,
//       }),
//       checkout: new Date(plan.checkout).toLocaleString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         hour12: true,
//       }),
//     }));

//     return NextResponse.json({ checkouts: formattedCheckouts });
//   } catch (error) {
//     console.error("Error processing the request:", error);
//     return NextResponse.json(
//       { error: "An internal server error occurred. Please try again later." },
//       { status: 500 }
//     );
//   }
// }
