export type WorkoutDataProps = {
  id: number;
  checkin: string; // or Date if you are using Date objects
  checkout?: string; // or Date
  duration: number; // Ensure this is a number
  equipment?: string;
  calories?: number;
  weightLifted?: number;
  distance?: number;
  repetitions?: number;
};

// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Box,
//   Grid,
//   Button,
// } from "@mui/material";

// interface Exercise {
//   id: string;
//   name: string;
//   gifUrl: string;
//   instructions: string[];
// }

// export default function WorkoutFavorite() {
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [expandedExerciseId, setExpandedExerciseId] = useState<string | null>(
//     null
//   );

//   useEffect(() => {
//     const getExercise = async () => {
//       try {
//         const response = await axios.get("/api/workouts/apiWorkouts");
//         setExercises(response.data);
//         console.log("API response:", response.data);
//       } catch (error) {
//         console.error("Error finding api:", error);
//       }
//     };

//     getExercise();
//   }, []);

//   const handleToggle = (id: string) => {
//     setExpandedExerciseId(expandedExerciseId === id ? null : id);
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Grid container spacing={2}>
//         {exercises.map((exercise) => (
//           <Grid item xs={12} sm={6} md={4} key={exercise.id}>
//             <Card sx={{ height: "100%", borderRadius: 2, boxShadow: 3 }}>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={exercise.gifUrl}
//                 alt={exercise.name}
//                 sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
//               />
//               <CardContent>
//                 <Typography
//                   variant="h6"
//                   fontSize={17}
//                   fontWeight={500}
//                   gutterBottom
//                 >
//                   {exercise.name}
//                 </Typography>
//                 <Button
//                   onClick={() => handleToggle(exercise.id)}
//                   variant="outlined" // Change to outlined button
//                   sx={{
//                     borderColor: "primary.main", // Custom border color
//                     color: "primary.main", // Custom text color
//                     "&:hover": {
//                       backgroundColor: "primary.main", // Background color on hover
//                       color: "white", // Text color on hover
//                     },
//                     marginTop: 1, // Add some margin on top
//                   }}
//                 >
//                   {expandedExerciseId === exercise.id
//                     ? "Show Less"
//                     : "Show More"}
//                 </Button>
//                 {expandedExerciseId === exercise.id && (
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     sx={{ marginTop: 1 }}
//                   >
//                     {exercise.instructions.join(" ")}
//                   </Typography>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
