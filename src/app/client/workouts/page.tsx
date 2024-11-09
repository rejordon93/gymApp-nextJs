"use client";
import { Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useWorkoutContext } from "@/context/context";
import { useRouter } from "next/navigation";

export default function WorkoutsPage() {
  const [inputVal, setInputVal] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState(false);

  const { setWorkoutData } = useWorkoutContext();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    if (e.target.value.trim() !== "") {
      setInputError(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!inputVal.trim()) {
      setInputError(true);
      return;
    }

    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/name/${inputVal}`,
        params: { offset: "0", limit: "10" },
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      const data = response.data;
      setWorkoutData(data); // Set data in the context
      console.log("Fetched workout data:", data);
      router.push("/client/workouts/exercises_result");
    } catch (error) {
      console.error("Error fetching workout data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          Search Exercises
        </Typography>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <TextField
          fullWidth
          label="exercise name"
          id="exercise name"
          placeholder="push up"
          value={inputVal}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          error={inputError}
          helperText={inputError ? "Please enter an exercise name" : ""}
        />
      </Box>
    </Box>
  );
}
