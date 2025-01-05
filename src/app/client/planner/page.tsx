"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

const cardData = ["Chest", "Back", "Legs", "Arms", "Cardio", "Abs"];

export default function Planer() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selections, setSelections] = useState<
    { title: string; value: string }[]
  >([]);

  const handleCardClick = (title: string) => {
    if (!selectedValue) {
      alert("Please select a day of the week before adding a workout.");
      return;
    }

    // Avoid duplicate entries for the same day and workout
    const alreadyExists = selections.some(
      (item) => item.title === title && item.value === selectedValue
    );

    if (!alreadyExists) {
      setSelections((prev) => [...prev, { title, value: selectedValue }]);
    } else {
      alert(`You already added "${title}" for "${selectedValue}".`);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };
  const handleBtnClick = () => {
    console.log("Test");
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px", // Max width for the entire content
        margin: "0 auto", // Center the content horizontally
        minHeight: "100vh",
        alignContent: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <Typography variant="h4" gutterBottom>
        make a weekly workout plan
      </Typography>
      <Box sx={{ minWidth: 120, marginTop: "2rem" }}>
        <FormControl fullWidth>
          <InputLabel id="dropdown-label">Day of the Week</InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={selectedValue}
            onChange={handleChange}
          >
            <MenuItem value="Monday">Monday</MenuItem>
            <MenuItem value="Tuesday">Tuesday</MenuItem>
            <MenuItem value="Wednesday">Wednesday</MenuItem>
            <MenuItem value="Thursday">Thursday</MenuItem>
            <MenuItem value="Friday">Friday</MenuItem>
            <MenuItem value="Saturday">Saturday</MenuItem>
            <MenuItem value="Sunday">Sunday</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
        {cardData.map((title, index) => (
          <Grid item xs={12} sm={4} key={`card-${index}`}>
            <Card
              sx={{
                width: "100%",
                height: 350,
                borderRadius: "16px",
                boxShadow: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 12,
                },
              }}
              onClick={() => handleCardClick(title)}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginTop: "3rem" }}>
        <Typography variant="h6">Your Plan:</Typography>
        {selections.length > 0 ? (
          <ul>
            {selections.map((item, index) => (
              <li key={index}>
                {item.value} - {item.title}
              </li>
            ))}
          </ul>
        ) : (
          <Typography>No workouts added yet.</Typography>
        )}
      </Box>
      <Button
        onClick={handleBtnClick}
        sx={{
          backgroundColor: "#1976d2", // Blue color for the button background
          color: "white", // White text color
          fontWeight: "bold", // Make the text bold
          padding: "10px 20px", // Add some padding for better size
          borderRadius: "8px", // Rounded corners
          textTransform: "none", // Keep the text case as it is
          boxShadow: 3, // Subtle shadow for depth
          "&:hover": {
            backgroundColor: "#1565c0", // Darker blue on hover
            boxShadow: 6, // Increase the shadow on hover for more emphasis
          },
        }}
      >
        Create Workout Plan
      </Button>
    </Box>
  );
}
