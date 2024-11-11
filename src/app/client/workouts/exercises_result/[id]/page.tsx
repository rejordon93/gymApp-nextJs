"use client";
import { useState } from "react";
import { useWorkoutContext } from "@/context/context";
import { ExercisesInterfaces } from "@/app/types/page";
import { useRouter, useParams } from "next/navigation";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function WorkoutsById() {
  const { workoutData: initialWorkoutData } = useWorkoutContext();
  const [workoutData] = useState<ExercisesInterfaces[]>(initialWorkoutData);
  const router = useRouter();
  const { id } = useParams();

  // Find the selected workout by ID
  const selectedWorkout = workoutData.find((exercise) => exercise.id === id);

  if (!selectedWorkout) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 3,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h6" color="error" gutterBottom>
          Workout not found.
        </Typography>
        <Button
          onClick={() => router.push("/client/workouts/exercises_result")}
          variant="contained"
          color="primary"
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            borderRadius: "20px",
            backgroundColor: "#4A90E2",
            "&:hover": {
              backgroundColor: "#357ABD",
            },
            textTransform: "none",
          }}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Workout Details
      </Typography>

      {/* Container for details and image side by side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 4,
          maxWidth: 1200,
          width: "100%",
          flexWrap: "wrap", // Allow wrapping on smaller screens
        }}
      >
        {/* Left - Workout Details */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "600px", // Restrict width for better readability
            padding: 2,
          }}
        >
          <Card sx={{ boxShadow: 3, padding: 2 }}>
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                {selectedWorkout.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textTransform: "capitalize", marginBottom: 1 }}
              >
                Body Part: {selectedWorkout.bodyPart}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textTransform: "capitalize", marginBottom: 1 }}
              >
                Equipment: {selectedWorkout.equipment}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textTransform: "capitalize", marginBottom: 1 }}
              >
                Secondary Muscles: {selectedWorkout.secondaryMuscles}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textTransform: "capitalize", marginBottom: 2 }}
              >
                Target: {selectedWorkout.target}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {selectedWorkout.instructions ||
                  "No additional description available."}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Right - Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "500px", // Set a max width for the image section
            padding: 2,
            height: "auto",
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={selectedWorkout.gifUrl}
              alt={selectedWorkout.name}
              sx={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </Card>
        </Box>
      </Box>

      {/* Back Button */}
      <Button
        onClick={() => router.push("/client/workouts/exercises_result")}
        variant="contained"
        color="primary"
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          fontSize: "1.1rem",
          borderRadius: "20px",
          backgroundColor: "#4A90E2",
          "&:hover": {
            backgroundColor: "#357ABD",
          },
          textTransform: "none",
        }}
      >
        Back
      </Button>
    </Box>
  );
}
