"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  CircularProgress,
  IconButton,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { UserWorkoutContext } from "@/context/context";
import { ActionType } from "@/context/workoutReducer";
import { ProfileType } from "@/app/types/page";
import axios from "axios";
import { showToast } from "@/app/utils/ToastUtils";
import { cardStyle } from "@/styles/workout";
import { weekDays, cardData } from "@/app/utils/ToastUtils";

export default function Cards() {
  const [cardVal, setCardVal] = useState<string>("");
  const { workoutState, workoutDispatch } = UserWorkoutContext();
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const [btnChange, setButChange] = useState(false); // Track if the button text should change
  const [isFirstWorkout, setIsFirstWorkout] = useState(true); // Flag to check if it's the first workout

  const handleClickBtn = (item: string) => {
    setCardVal(item); // Update state with the selected card name
    const today = new Date();
    const dayOfWeek = today.getDay();
    const dayName = weekDays[dayOfWeek];
    const workoutObj = {
      userId: profileData?.userId, // Make sure profileData is valid
      workoutDay: dayName,
      workout: [item],
      completed: true,
      createdAt: new Date().toISOString(),
    };
    workoutDispatch({ type: ActionType.SET_WORKOUT, payload: workoutObj });
    setButChange(true); // Set button to show "Add Workout"
  };

  const handleButton = async () => {
    try {
      if (!cardVal) {
        showToast("Please select a card before proceeding.");
        return;
      }
      const { workout } = workoutState;

      // POST request for the first workout (Create new workout)
      if (isFirstWorkout) {
        const res = await axios.post("/api/workouts/postWorkout", workout);
        showToast(`Workout ${workout.workout} added successfully!`);

        // Dispatch workout to context
        workoutDispatch({
          type: ActionType.SET_WORKOUT,
          payload: res.data,
        });

        setIsFirstWorkout(false); // Set the flag to false after the first workout
        setButChange(false); // Reset the button text to "Add more Workouts"
        console.log(res.data);
      } else {
        // PATCH request for subsequent workouts (Update existing workout)
        const res = await axios.patch("/api/workouts/patchWorkout", {
          newWorkout: workout,
        });
        showToast(`Workout ${workout.workout} updated successfully!`);

        // Dispatch updated workout to context
        workoutDispatch({
          type: ActionType.SET_UPDATED_WORKOUT,
          payload: res.data,
        });
        setButChange(false); // Reset the button text to "Add more Workouts"
        console.log(res.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showToast(`Error: ${error.response?.data?.message || error.message}`);
      } else {
        showToast(`Error: ${(error as Error).message}`);
      }
      console.error("error", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Grid container spacing={2} justifyContent="center" maxWidth={1200}>
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                padding: "1rem",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" }, // Add hover effect
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {item} {/* Display the card name */}
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleClickBtn(item)} // Pass the name directly
                  sx={{ marginTop: "1rem" }}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        sx={{ alignContent: "center", marginTop: "2rem" }}
        onClick={handleButton}
        disabled={!cardVal} // Disable button if no workout is selected
      >
        {btnChange ? "Add Workout" : "Add more Workouts"}{" "}
        {/* Button text changes */}
      </Button>
    </div>
  );
}
