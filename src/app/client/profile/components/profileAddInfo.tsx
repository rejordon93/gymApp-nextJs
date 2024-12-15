"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Box, Typography, Button } from "@mui/material";
import { EmojiEmotions, FitnessCenter, Person } from "@mui/icons-material";

export default function ProfileAddInfo() {
  const [motivation, setMotivation] = useState("");

  const handleChangeMotivation = () => {
    setMotivation("Push harder, you got this!");
    toast.success("Motivation updated!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography variant="h4" textAlign="center" mb={2}>
        About Me
      </Typography>

      {/* Motivation Button */}
      <Button
        variant="outlined"
        sx={{
          mb: 2,
          height: "4rem",
          width: "83%",
          borderRadius: "2rem",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column", // Stack icon, label, and value vertically
          textTransform: "none", // Preserve original case of the text
        }}
        onClick={handleChangeMotivation}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1, // Add spacing between the icon and the label
          }}
        >
          <EmojiEmotions />
          <Typography>What's your motivation?</Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "gray",
          }}
        >
          {motivation}
        </Typography>
      </Button>

      {/* Target Button */}
      <Button
        variant="outlined"
        sx={{
          mb: 2,
          height: "4rem",
          width: "83%",
          borderRadius: "2rem",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "none", // Preserve original case of the text
        }}
        startIcon={<FitnessCenter />}
      >
        Set your target
      </Button>

      {/* Fitness Profile Button */}
      <Button
        variant="outlined"
        sx={{
          mb: 2,
          height: "4rem",
          width: "83%",
          borderRadius: "2rem",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "none", // Preserve original case of the text
        }}
        startIcon={<Person />}
      >
        Create your fitness profile
      </Button>

      <Toaster />
    </Box>
  );
}
