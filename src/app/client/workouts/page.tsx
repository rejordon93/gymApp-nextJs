"use client";
import {
  Autocomplete,
  TextField,
  Box,
  Typography,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WorkoutFavorite() {
  const [exercises, setExercises] = useState<string[]>([]);
  const [favoriteExercises, setFavoriteExercises] = useState<string[]>([]);

  const handleClick = () => {
    console.log(favoriteExercises);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get("/api/workouts/searchBarApi");
        const response2 = await axios.get(`/api/workouts/favoriteWorkouts`, {
          params: {
            searchValue: "back",
            myName: "Ethan",
          },
        });
        setExercises(() => [...response.data]);
        setFavoriteExercises(() => [...response2.data]);
      } catch (error) {
        console.error("Error fetching favorite exercises:", error);
      }
    };
    fetchAllData();
  }, []);

  // useEffect(() => {
  //   const fetchFavoriteExercises = async () => {
  //     try {
  //       const response = await axios.get(`/api/workouts/favoriteWorkouts`);
  //       setFavoriteExercises(response.data);
  //     } catch (error) {
  //       console.error("Error fetching favorite exercises:", error);
  //     }
  //   };
  //   fetchFavoriteExercises();
  // }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Exercise Favorites
      </Typography>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 500, width: "100%" }}>
        <Stack spacing={2}>
          <Autocomplete
            disablePortal
            options={exercises}
            renderInput={(params) => (
              <TextField {...params} label="Search Exercises" />
            )}
            onChange={handleClick}
            sx={{ width: "100%" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log(favoriteExercises)}
          >
            Show Favorite Exercises
          </Button>
          <Box>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
              Favorite Exercises:
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
