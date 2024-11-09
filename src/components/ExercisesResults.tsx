"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useWorkoutContext } from "@/context/context";

export default function ExercisesResults() {
  const { workoutData } = useWorkoutContext();
  console.log(workoutData);
  return (
    <Box>
      <Typography variant="h4">Workout Results</Typography>
      {workoutData}
    </Box>
  );
}
