import React, { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { UserWorkoutContext } from "@/context/context";
import { ActionType } from "@/context/exerciseReducer";

import axios from "axios";

export default function ExercisesAddBtnResults() {
  const { workoutState, workoutDispatch } = UserWorkoutContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleNextResults = async () => {
    setIsLoading(true);
    const currentOffset = parseInt(workoutState.option.offset || "0", 10);
    const currentLimit = parseInt(workoutState.option.limit || "9", 10);
    const newOffset = (currentOffset + 1).toString();
    const newLimit = (currentLimit + 9).toString();

    try {
      const options = {
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises`,
        params: {
          offset: newOffset,
          limit: newLimit,
        },
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      const newWorkouts = response.data;

      workoutDispatch({
        type: ActionType.SET_WORKOUTS,
        payload: {
          workouts: newWorkouts,
          option: {
            ...workoutState.option,
            offset: newOffset,
            limit: newLimit,
          },
        },
      });
    } catch (error) {
      console.error("Error fetching more workouts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap={2}
      mt={5}
    >
      <Button
        onClick={handleNextResults}
        variant="contained"
        disabled={isLoading}
        sx={{
          px: 8,
          py: 1.5,
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "1.5rem",
          background: "linear-gradient(45deg, #4A90E2, #357ABD)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            background: "linear-gradient(45deg, #357ABD, #4A90E2)",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
          },
          "&:disabled": {
            background: "linear-gradient(45deg, #B0BEC5, #90A4AE)",
            boxShadow: "none",
          },
        }}
      >
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Add More"
        )}
      </Button>
    </Box>
  );
}
