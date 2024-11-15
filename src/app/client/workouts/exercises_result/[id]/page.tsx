"use client";
import React, { useState, useEffect } from "react";
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
  CircularProgress,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function WorkoutsById() {
  const { workoutState, workoutDispatch } = useWorkoutContext();
  // const [allWorkouts] = useState(workoutState.workout);
  // const [curentWorkout] = useState(workoutState.workoutStore);
  workoutState.currentWorkout;
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Simulate loading state for data fetching
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleBackBtn = () => {
    workoutDispatch({
      type: ActionType.GET_ALL_EXERCISES,
      payload: workoutState.workoutsArr,
    });
    router.push("/client/workouts/exercises_result");
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={4} sx={{ mt: 4, flexGrow: 1 }}>
        {workoutState.currentWorkout.map((workout) => (
          <React.Fragment key={workout.id}>
            <Grid item xs={12} md={8}>
              <Paper elevation={3}>
                <Card sx={{ padding: 3 }}>
                  <CardContent>
                    <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                      {workout.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      <strong>Target:</strong> {workout.target}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      <strong>Equipment:</strong> {workout.equipment}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      <strong>Body Part:</strong> {workout.bodyPart}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      <strong>Secondary Muscles:</strong>{" "}
                      {workout.secondaryMuscles}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      <strong>Instructions:</strong> {workout.instructions}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3}>
                <Card>
                  <CardMedia
                    component="img"
                    sx={{ width: "100%", height: "auto" }}
                    image={workout.gifUrl}
                    alt={workout.name}
                  />
                </Card>
              </Paper>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          onClick={handleBackBtn}
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          sx={{
            mt: 3,
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
            textTransform: "none",
          }}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}
