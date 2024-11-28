import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { UserWorkoutContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { ActionType } from "@/context/exerciseReducer";
import axios from "axios";

export default function ExercisesResults() {
  const { workoutState, workoutDispatch } = UserWorkoutContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleBtn = () => {
    router.push("/client/workouts");
  };

  const handleDetailsBtn = (id: string) => {
    const selectedWorkout = workoutState.workoutsArr.find(
      (exercise) => exercise.id === id
    );

    if (selectedWorkout) {
      workoutDispatch({
        type: ActionType.SET_CURRENT,
        payload: selectedWorkout,
      });

      router.push(`/client/workouts/exercises_result/${id}`);
    }
  };
  const handleLikeBtn = async (id: string) => {
    const addToFav = workoutState.workoutsArr.find(
      (exercise) => exercise.id === id
    );

    if (!addToFav) {
      console.error("Workout not found");
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
    };

    try {
      const response = await axios.post(
        "/api/workouts/favWorkouts",
        FavExercise
      );
      console.log("API Response:", response.data);

      workoutDispatch({
        type: ActionType.ADD_TO_FAVORITES,
        payload: [...workoutState.favExercises, addToFav], // Pass the object directly
      });
    } catch (error) {
      console.error("Error adding workout to favorites:", error);
    }
  };

  const handleRemoveBtn = (id: string) => {
    const removeBtn = workoutState.workoutsArr.filter(
      (exercise) => exercise.id !== id
    );
    workoutDispatch({
      type: ActionType.REMOVE_WORKOUT,
      payload: removeBtn,
    });
  };

  const handleNextResults = async () => {
    setIsLoading(true); // Start loading
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
      setIsLoading(false); // End loading
    }
  };

  const handlePrevResults = () => {
    console.log("-");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Workout Results
      </Typography>

      {isLoading ? ( // Show loader while fetching data
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
          {workoutState.workoutsArr.map((exercise) => (
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
                  sx={{ fontSize: "0.9rem" }}
                >
                  Like
                </Button>
                <Button
                  onClick={() => handleRemoveBtn(exercise.id)}
                  variant="outlined"
                  color="secondary"
                  sx={{ fontSize: "0.9rem" }}
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

      <Button
        onClick={handleBtn}
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
          background: "linear-gradient(45deg, #4A90E2, #357ABD)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            background: "linear-gradient(45deg, #357ABD, #4A90E2)",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        Back
      </Button>
      <Button onClick={handleNextResults}>+</Button>
      <Button onClick={handlePrevResults}>-</Button>
    </Box>
  );
}
