"use client";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WorkoutFavorite() {
  const [exercises, setExercises] = useState<string[]>([]);
  const [favoriteExercises, setFavoriteExercises] = useState<string[]>([]);

  const handleClick = () => {
    console.log(favoriteExercises);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/workouts/searchBarApi");
      setExercises(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFavoriteExercises = async () => {
      try {
        const response = await axios.get(`/api/workouts/favoriteWorkouts/`);
        console.log(response.data);
        setFavoriteExercises(response.data);
      } catch (error) {
        console.error("Error fetching favorite exercises:", error);
      }
    };
    fetchFavoriteExercises();
  }, []);

  return (
    <div>
      <h1>Exercises history</h1>
      <Autocomplete
        disablePortal
        options={exercises}
        sx={{ width: "500%" }}
        renderInput={(params) => <TextField {...params} />}
        onChange={handleClick}
      />
    </div>
  );
}
