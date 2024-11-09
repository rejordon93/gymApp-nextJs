"use client";
import axios from "axios";
import { useState } from "react";
import { WorkoutDataProps } from "../../types/page";
import BarChart from "@/components/BarChart";
import toast, { Toaster } from "react-hot-toast";
import WorkoutFavorite from "@/components/FavoriteWorkouts";
import {
  Box,
  Button,
  Paper,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";

export default function GymVisitsPage() {
  const [data, setData] = useState<WorkoutDataProps[]>([]);
  const [toggleCheckIn, setToggleCheckIn] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateProfile = async () => {
    setLoading(true);

    const userCheckIn = {
      checkin: new Date().toISOString(),
      duration: 0,
      equipment: "",
      calories: 0,
      weightLifted: 0,
      distance: 0,
      repetitions: 0,
    };
    console.log(userCheckIn);

    try {
      const response = await axios.post(
        "/api/workouts/createWorkouts",
        userCheckIn
      );

      console.log("API Response:", response.data);
      const { workout } = response.data as {
        message: string;
        workout: WorkoutDataProps;
      };

      setData((prevData) => [...prevData, workout]);
      toast.success("Have a good Workout!", {
        icon: "💪",
        duration: 5000,
      });

      // Set toggleCheckIn to false to show the WorkoutFavorite component
      setToggleCheckIn(false);
    } catch (error) {
      console.error("Error adding workout:", error);
      setError(error instanceof Error ? error.message : String(error));
      toast.error("Failed to add workout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Gym Visits
        </Typography>

        <Box sx={{ my: 4 }}>
          <BarChart data={data} />
        </Box>

        <Box display="flex" justifyContent="center" mt={3}>
          {toggleCheckIn ? (
            <Button
              variant="contained"
              color="primary"
              onClick={updateProfile}
              disabled={loading}
              startIcon={
                loading && <CircularProgress size={20} color="inherit" />
              }
              sx={{
                px: 3,
                py: 1.5,
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              {loading ? "Checking in..." : "Check In"}
            </Button>
          ) : (
            <WorkoutFavorite />
          )}
        </Box>

        {error && (
          <Typography color="error" align="center" mt={2}>
            {error}
          </Typography>
        )}
        <Toaster />
      </Paper>
    </Container>
  );
}
