import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useWorkoutContext } from "@/context/context";
import { ExercisesInterfaces } from "@/app/types/page";
import { useRouter } from "next/navigation";

export default function ExercisesResults() {
  const { workoutData: initialWorkoutData } = useWorkoutContext();
  const [workoutData, setWorkoutData] =
    useState<ExercisesInterfaces[]>(initialWorkoutData);
  const router = useRouter();

  const handleBtn = () => {
    router.push("/client/workouts");
  };

  const handleDetailsBtn = (id: string) => {
    const selectedWorkout = initialWorkoutData.find(
      (exercise) => exercise.id === id
    );
    if (selectedWorkout) {
      setWorkoutData([selectedWorkout]); // Set in context
      router.push(`/client/workouts/exercises_result/${id}`);
    }
  };
  const handleLikeBtn = () => {
    console.log("You liked");
  };

  const havnleRemoveBtn = (id: string) => {
    setWorkoutData((prveData) =>
      prveData.filter((exercise) => exercise.id !== id)
    );
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {workoutData.map((exercise: ExercisesInterfaces) => (
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
                onClick={handleLikeBtn}
                variant="outlined"
                color="primary"
                sx={{ fontSize: "0.9rem" }}
              >
                Like
              </Button>
              <Button
                onClick={() => havnleRemoveBtn(exercise.id)}
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
                borderRadius: 0, // Square edges to blend with card width
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Details
            </Button>
          </Card>
        ))}
      </Box>
      <Button
        onClick={handleBtn}
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />} // Adds an icon to the button
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
        }}
      >
        Back
      </Button>
    </Box>
  );
}
