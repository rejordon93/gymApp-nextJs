"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FormControl,
  MenuItem,
  Select,
  CircularProgress,
  InputLabel,
  Button,
  SelectChangeEvent,
} from "@mui/material";

export default function Workouts() {
  const [exercises, setExercises] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator
  const [selectedExercise, setSelectedExercise] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/workouts/searchBarApi");
        setExercises(response.data); // Set the exercises data
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this only runs once

  // Log exercises whenever it updates
  useEffect(() => {
    console.log("Exercises:", exercises);
  }, [exercises]); // This runs every time 'exercises' state updates

  // Update the selected exercise when the user selects a new one
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedExercise(event.target.value); // Update the selected exercise
    console.log("Selected Exercise:", event.target.value); // Log selected value
  };

  const handleClick = () => {
    console.log("Button Clicked - Selected Exercise:", selectedExercise);
    // Perform additional actions on button click
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedExercise || ""} // Set value to the selected exercise
        label="Exercise"
        onChange={handleSelectChange} // Use updated handler
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": { borderRadius: 2 },
        }}
      >
        {exercises.map((exercise, index) => (
          <MenuItem key={index} value={exercise}>
            {exercise}
          </MenuItem>
        ))}
      </Select>
      <Button onClick={handleClick}>Click</Button>
    </FormControl>
  );
}
