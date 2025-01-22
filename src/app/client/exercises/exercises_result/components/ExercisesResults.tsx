import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
} from "@mui/material";

import { UserExercisesContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { ActionType } from "@/context/exerciseReducer";
import axios from "axios";
import ExercisesAddBtnResults from "./ExercisesAddMoreBtn";
import Footer from "@/components/Footer";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
export default function ExercisesResults() {
  const { exercisesState, exercisesDispatch } = UserExercisesContext();
  const [isLoading] = useState(false);
  const [workoutId, setWorkoutId] = useState<number>();
  const router = useRouter();

  const showToast = (message: string, duration = 2000) => {
    Toastify({
      text: message,
      duration,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
    }).showToast();
  };

  const getWorkoutData = async () => {
    try {
      const res = await axios.get("/api/workouts/getWorkout");

      if (res.status === 200 && res.data) {
        setWorkoutId(res.data.id); // Assuming the API returns an object with `id`
      } else {
        console.error("Unexpected response:", res);
      }
    } catch (error) {
      console.error("Error fetching workout data:", error);
      showToast("Error fetching workout data.");
    }
  };

  useEffect(() => {
    getWorkoutData();
  }, []);

  const handleDetailsBtn = (id: string) => {
    const selectedWorkout = exercisesState.exercisesArr.find(
      (exercise) => exercise.id === id
    );

    if (selectedWorkout) {
      exercisesDispatch({
        type: ActionType.SET_CURRENT,
        payload: selectedWorkout,
      });

      router.push(`/client/exercises/exercises_result/${id}`);
    }
  };

  const handleLikeBtn = async (id: string) => {
    const addToFav = exercisesState.exercisesArr.find(
      (exercise) => exercise.id === id
    );

    if (!addToFav) {
      console.error("Workout not found");
      showToast("Exercise not found. Try a different name.");
      return;
    }

    if (!workoutId) {
      console.error("Workout ID is not set");
      showToast("You are not logged in. Please log in.");
      return;
    }

    const FavExercise = {
      name: addToFav.name,
      bodyPart: addToFav.bodyPart,
      equipment: addToFav.equipment,
      gifUrl: addToFav.gifUrl,
      instructions: addToFav.instructions || [""],
      secondaryMuscles: addToFav.secondaryMuscles || [""],
      target: addToFav.target,
      id: workoutId,
    };

    try {
      const response = await axios.post(
        "/api/exercises/favoritedExercise",
        FavExercise
      );
      console.log("API Response:", response.data);
      showToast(`${FavExercise} added to favorites!`);
      exercisesDispatch({
        type: ActionType.ADD_TO_FAVORITES,
        payload: [...exercisesState.favExercises, addToFav],
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
        showToast("Failed to add exercise to favorites.");
      }
    }
  };

  const handleRemoveBtn = (id: string) => {
    const removeBtn = exercisesState.exercisesArr.filter(
      (exercise) => exercise.id !== id
    );
    exercisesDispatch({
      type: ActionType.REMOVE_WORKOUT,
      payload: removeBtn,
    });
    showToast("Exercise removed successfully!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Workout Results
      </Typography>

      {isLoading ? (
        <CircularProgress sx={{ mt: 4 }} />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 3,
            width: "100%",
            maxWidth: 1200,
          }}
        >
          {exercisesState.exercisesArr.map((exercise) => (
            <Card
              key={exercise.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={exercise.gifUrl}
                alt={exercise.name}
                sx={{
                  objectFit: "cover",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {exercise.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textTransform: "capitalize" }}
                >
                  Body Part: {exercise.bodyPart}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textTransform: "capitalize" }}
                >
                  Equipment: {exercise.equipment}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 2,
                  pt: 0,
                }}
              >
                <Button
                  onClick={() => handleLikeBtn(exercise.id)}
                  variant="outlined"
                  color="primary"
                  sx={{ fontSize: "0.9rem", width: "48%" }} // Adjust width to match
                >
                  Like
                </Button>
                <Button
                  onClick={() => handleRemoveBtn(exercise.id)}
                  variant="outlined"
                  color="secondary"
                  sx={{ fontSize: "0.9rem", width: "48%" }} // Adjust width to match
                >
                  Remove
                </Button>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDetailsBtn(exercise.id)}
                fullWidth
                sx={{
                  borderRadius: 0,
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Details
              </Button>
            </Card>
          ))}
        </Box>
      )}
      <ExercisesAddBtnResults />
      <Footer />
    </Box>
  );
}
