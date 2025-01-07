"use client";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { UserExercisesContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { ActionType } from "@/context/exerciseReducer";

export default function WorkoutsPage() {
  const [inputVal, setInputVal] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState(false);

  const { exercisesState, exercisesDispatch } = UserExercisesContext();
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
        params: {
          offset: exercisesState.option.offset || "0",
          limit: exercisesState.option.limit || "8",
        },

        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      console.log(exercisesState.exercisesArr);
      const option = options.params;
      console.log(option);
      const data = response.data;
      console.log(data);
      exercisesDispatch({
        type: ActionType.SET_WORKOUTS,
        payload: {
          workouts: data,
          option: exercisesState.option,
        },
      });
      router.push("/client/exercises/exercises_result");
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
        padding: 2,
      }}
    >
      {isLoading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <CircularProgress size={60} sx={{ color: "#4A90E2" }} />
        </Box>
      )}
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          Search Exercises
        </Typography>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 500, mt: 2 }}>
        <TextField
          fullWidth
          label="Exercise Name"
          placeholder="e.g., push up"
          value={inputVal}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          error={inputError}
          helperText={inputError ? "Please enter an exercise name" : ""}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: 500,
          mt: 3,
        }}
      >
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={isLoading}
          sx={{
            width: "100%",
            maxWidth: "200px",
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#ffffff",
            backgroundColor: "#4A90E2",
            borderRadius: "0.5rem",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.2s, background-color 0.2s",
            "&:hover": {
              backgroundColor: "#357ABD",
              transform: "scale(1.05)",
            },
            "&:active": {
              backgroundColor: "#2E5E8C",
            },
            "&:disabled": {
              backgroundColor: "#A3C9E2",
            },
          }}
        >
          {isLoading ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Search"
          )}
        </Button>
      </Box>
    </Box>
  );
}
