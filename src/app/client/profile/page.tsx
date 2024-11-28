"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { WorkoutDataProps } from "../../types/page";
import BarChart from "@/components/BarChart";
import toast, { Toaster } from "react-hot-toast";
import WorkoutFavorite from "@/components/FavoriteWorkouts";
import { ExercisesInterfaces } from "../../types/page";
import { UserWorkoutContext } from "@/context/context";
import {
  Box,
  Button,
  Paper,
  Typography,
  CircularProgress,
  Container,
  Card,
  Grid,
} from "@mui/material";
import { ActionType } from "@/context/exerciseReducer";

export default function GymVisitsPage() {
  const [data, setData] = useState<WorkoutDataProps[]>([]);
  const [toggleCheckIn, setToggleCheckIn] = useState<boolean>(true);
  const [favData, setFavData] = useState<ExercisesInterfaces[]>([]);
  const { workoutState, workoutDispatch } = UserWorkoutContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavoriteWorkouts = async () => {
      try {
        const response = await axios.get("/api/workouts/favWorkouts");
        console.log("API Response:", response.data);
        const { date } = response.data;
        setFavData(date || []);
      } catch (error) {
        console.error("Failed to fetch workouts:", error);
        setFavData([]);
      }
    };

    fetchFavoriteWorkouts();
  }, []);

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
      <Paper
        elevation={6}
        sx={{ p: 4, borderRadius: 2, mt: 4, backgroundColor: "#f5f5f5" }}
      >
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
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
                px: 4,
                py: 1.5,
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {loading ? "Checking in..." : "Check In"}
            </Button>
          ) : (
            <WorkoutFavorite />
          )}
        </Box>

        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Favorite Workouts
        </Typography>

        {favData.length > 0 ? (
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {favData.map((e) => (
              <Grid item xs={12} sm={6} md={4} key={e.id}>
                <Card
                  sx={{
                    margin: 2,
                    padding: 3,
                    textAlign: "center",
                    height: "100%",
                    boxShadow: 3,
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  {e.gifUrl && (
                    <img
                      src={e.gifUrl}
                      alt={e.name || "Exercise"}
                      style={{
                        maxWidth: "100%",
                        borderRadius: "8px",
                        marginTop: "1rem",
                      }}
                    />
                  )}
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {e.name || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Body Part: {e.bodyPart || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Equipment: {e.equipment || "N/A"}
                  </Typography>

                  {Array.isArray(e.secondaryMuscles) &&
                    e.secondaryMuscles.length > 0 && (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mt: 1 }}
                      >
                        Secondary Muscles: {e.secondaryMuscles.join(", ")}
                      </Typography>
                    )}

                  {Array.isArray(e.instructions) &&
                    e.instructions.length > 0 && (
                      <Box
                        sx={{
                          mt: 2,
                          maxHeight: "150px",
                          overflowY: "auto",
                          padding: "8px",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          fontWeight="bold"
                        >
                          Instructions:
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {e.instructions.join(", ")}
                        </Typography>
                      </Box>
                    )}
                  <Button>Remove Favorite</Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" align="center" mt={2}>
            No favorite workouts available.
          </Typography>
        )}

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
