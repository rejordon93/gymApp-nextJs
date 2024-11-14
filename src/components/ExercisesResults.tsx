"use client";
import React from "react";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function WorkoutsById() {
  const { workoutState, workoutDispatch } = useWorkoutContext();
  const router = useRouter();

  const currentWorkout = workoutState.workoutStore; // directly using workoutState

  const handleBackBtn = () => {
    workoutDispatch({
      type: ActionType.GET_ALL_EXERCISES,
      payload: workoutState.workout, // passing workoutState.workout directly
    });
    router.push("/client/workouts/exercises_result");
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {currentWorkout.map((workout) => (
          <React.Fragment key={workout.id}>
            <Grid item xs={12} md={8}>
              <Card sx={{ padding: 2 }}>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                    {workout.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Target: {workout.target}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Equipment: {workout.equipment}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Body Part: {workout.bodyPart}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Secondary Muscles: {workout.secondaryMuscles}
                  </Typography>
                  <Typography
                    variant="body1"
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

      {/* Move the Back button to the bottom */}
      <Box sx={{ mt: 3 }}>
        <Button
          onClick={handleBackBtn}
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />} // Adds an icon to the button
          sx={{
            px: 10,
            py: 1.3,
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "1.5rem",
            background: "linear-gradient(45deg, #4A90E2, #357ABD)", // Adds a gradient background
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Adds a soft shadow
            "&:hover": {
              background: "linear-gradient(45deg, #357ABD, #4A90E2)", // Reverse gradient on hover
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
            },
            textTransform: "none", // Keeps text from becoming uppercase
          }}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}
