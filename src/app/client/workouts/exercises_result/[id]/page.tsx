"use client";
import React, { useState } from "react";
import { useWorkoutContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { ActionType } from "@/context/exerciseReducer";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

export default function WorkoutsById() {
  const { workoutState, workoutDispatch } = useWorkoutContext();
  const [allWorkouts] = useState(workoutState.workout);
  const [curentWorkout] = useState(workoutState.workoutStore);
  const router = useRouter();

  const handleBackBtn = () => {
    workoutDispatch({
      type: ActionType.GET_ALL_EXERCISES,
      payload: allWorkouts,
    });
    router.push("/client/workouts/exercises_result");
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Button
        onClick={handleBackBtn}
        variant="contained"
        color="primary"
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          fontSize: "1.2rem",
          borderRadius: "20px",
          backgroundColor: "#4A90E2",
          "&:hover": {
            backgroundColor: "#357ABD",
          },
          textTransform: "none",
        }}
      >
        Back
      </Button>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {curentWorkout.map((workout) => (
          <React.Fragment key={workout.id}>
            <Grid item xs={12} md={8}>
              <Card sx={{ padding: 3 }}>
                <CardContent>
                  <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                    {workout.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Target: {workout.target}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Equipment: {workout.equipment}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Body Part: {workout.bodyPart}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Secondary Muscles: {workout.secondaryMuscles}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    Instructions: {workout.instructions}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: "auto" }}
                  image={workout.gifUrl}
                  alt={workout.name}
                />
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
