import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { UserWorkoutContext } from "@/context/context";
import { ActionType } from "@/context/workoutReducer";
import { ProfileType } from "@/app/types/page";
import axios from "axios";
import { showToast } from "@/app/utils/ToastUtils";
import { cardData } from "@/app/utils/ToastUtils";
import FavCards from "./FavCards";

export default function Cards() {
  const [cardVal, setCardVal] = useState<string>("");
  const { workoutState, workoutDispatch } = UserWorkoutContext();
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const [btnChange, setButChange] = useState(false);
  const [isFirstWorkout, setIsFirstWorkout] = useState(true);

  useEffect(() => {
    showToast("Click the card you want to add workout");
    const timer = setTimeout(() => {}, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClickCard = (item: string) => {
    setCardVal(item);
    const today = new Date();
    const dayOfWeek = today.getDay();
    const dayName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][dayOfWeek];
    const workoutObj = {
      userId: profileData?.userId,
      workoutDay: dayName,
      workout: [item],
      completed: true,
      createdAt: new Date().toISOString(),
    };
    workoutDispatch({ type: ActionType.SET_WORKOUT, payload: workoutObj });
    setButChange(true);
  };

  const handleButton = async () => {
    try {
      if (!cardVal) {
        showToast("Please select a card before proceeding.");
        return;
      }
      const { workout } = workoutState;

      if (isFirstWorkout) {
        const res = await axios.post("/api/workouts/postWorkout", workout);
        showToast(`Workout ${workout.workout} added successfully!`);
        workoutDispatch({
          type: ActionType.SET_WORKOUT,
          payload: res.data,
        });
        setIsFirstWorkout(false);
        setButChange(false);
        console.log(res.data);
      } else {
        const res = await axios.patch("/api/workouts/patchWorkout", {
          newWorkout: workout,
        });
        showToast(`Workout ${workout.workout} updated successfully!`);
        workoutDispatch({
          type: ActionType.SET_UPDATED_WORKOUT,
          payload: res.data,
        });
        setButChange(false);
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
      <Grid container spacing={3} justifyContent="center" maxWidth={1200}>
        {/* Left side: Cards */}
        <Grid item xs={12} sm={6} md={8}>
          <Grid container spacing={3} justifyContent="center">
            {cardData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 400,
                    height: 250,
                    padding: "1rem",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    },
                    borderRadius: "16px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => handleClickCard(item)}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        color: "#3f3f3f",
                      }}
                    >
                      {item}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right side: FavCards */}
        <Grid item xs={12} sm={6} md={4}>
          <FavCards />
        </Grid>
      </Grid>

      <Button
        sx={{
          marginTop: "2rem",
          padding: "0.8rem 2rem",
          fontSize: "1rem",
          backgroundColor: "#1976d2",
          color: "white",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
        onClick={handleButton}
        disabled={!cardVal}
      >
        {btnChange ? "Add Workout" : "Add more Workouts"}
      </Button>
    </div>
  );
}
