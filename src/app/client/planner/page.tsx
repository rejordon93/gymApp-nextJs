"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import { UserWorkoutContext } from "@/context/context";
import { ActionType } from "@/context/workoutReducer";
import { ProfileType } from "@/app/types/page";
import { useRouter } from "next/navigation";
import axios from "axios";

const cardData = ["Chest", "Back", "Legs", "Arms", "Cardio", "Abs"];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Planer() {
  const router = useRouter();
  const { workoutState, workoutDispatch } = UserWorkoutContext();
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  // out put current day
  const today = new Date().getDay();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/profile/get");
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setProfileData(data);
      } catch (error) {
        setSnackbarMessage("Error fetching profile data.");
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = (title: string) => {
    setSelectedWorkout(title);
    const today = new Date();
    const dayOfWeek = today.getDay();
    const dayName = days[dayOfWeek];
    const workoutObj = {
      userId: profileData?.userId,
      workoutDay: dayName,
      workout: title,
      completed: true,
      createdAt: new Date().toISOString(),
    };

    workoutDispatch({ type: ActionType.SET_WORKOUT, payload: workoutObj });
  };

  const handleBtnClick = async () => {
    if (!selectedWorkout) {
      setSnackbarMessage("Please select a workout before adding.");
      return;
    }

    try {
      setLoading(true);
      const { workout } = workoutState;
      const res = await axios.post("/api/workouts/postWorkout", workout);
      setSnackbarMessage("Workout added successfully!");
      router.push("/client/exercises");
      console.log(res);
    } catch (error) {
      setSnackbarMessage("Error adding workout.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const cardStyle = (title: string) => ({
    width: "100%",
    height: 350,
    borderRadius: "16px",
    boxShadow: selectedWorkout === title ? 12 : 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: selectedWorkout === title ? "#e3f2fd" : "#f5f5f5",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: 12,
    },
    cursor: "pointer",
  });

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "100vh",
        padding: "3rem 1rem",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {profileData?.firstName}'s Daily Workout Plan
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Choose a workout for {days[today]}
      </Typography>
      {loading && <CircularProgress />}
      <Grid container spacing={4}>
        {cardData.map((title, index) => (
          <Grid item xs={12} sm={4} key={`card-${index}`}>
            <Card
              sx={cardStyle(title)}
              onClick={() => handleCardClick(title)}
              role="button"
              aria-pressed={selectedWorkout === title}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 24, fontWeight: "bold", color: "#333" }}
                >
                  {title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        onClick={handleBtnClick}
        disabled={loading}
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          fontWeight: "bold",
          padding: "10px 20px",
          marginTop: "2rem",
          borderRadius: "8px",
          textTransform: "none",
          boxShadow: 3,
          "&:hover": {
            backgroundColor: "#1565c0",
            boxShadow: 6,
          },
        }}
      >
        {loading ? "Adding..." : "Add Exercises"}
      </Button>
      <Snackbar
        open={Boolean(snackbarMessage)}
        autoHideDuration={3000}
        onClose={() => setSnackbarMessage(null)}
        message={snackbarMessage}
      />
    </Box>
  );
}
