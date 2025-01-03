"use client";
import React, { useEffect } from "react";
import { Box, Button, Typography, Card, Stack } from "@mui/material";
import { InsertChart, FitnessCenter, Timeline } from "@mui/icons-material";
import { useContext } from "react";
import { VisitsContext } from "@/context/context";

export default function Planer() {
  const context = useContext(VisitsContext)!;
  const { visitState, visitDispatch } = context;

  useEffect(() => {
    const handleCheckin = () => {
      if (visitState.visit.checkout) {
        console.log(1);
      } else {
        console.log("No checkin");
      }
    };
    handleCheckin();
  }, [visitState.visit.checkout]);

  console.log(visitState);
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        borderRadius: "16px",
        minWidth: "300px",
        maxWidth: "1000px",
        mx: "auto",
      }}
    >
      {/* Centered Activity Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          My Activity
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Every step, every rep counts! Update your activity today.
        </Typography>
      </Box>

      <Button>Check ins</Button>

      {/* About Me Section */}
      <Box textAlign="center" mt={4}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          About Me
        </Typography>
        <Card
          sx={{
            p: 3,
            borderRadius: "16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Stack spacing={2}>
            <Button
              variant="contained"
              startIcon={<FitnessCenter />}
              sx={{
                borderRadius: "16px",
                textTransform: "capitalize",
                background: "linear-gradient(45deg, #6a1b9a, #8e24aa)",
                color: "#fff",
                px: 3,
                py: 1.5,
                "&:hover": {
                  background: "linear-gradient(45deg, #5e35b1, #6a1b9a)",
                },
              }}
            >
              What's your motivation?
            </Button>
            <Button
              variant="contained"
              startIcon={<Timeline />}
              sx={{
                borderRadius: "16px",
                textTransform: "capitalize",
                background: "linear-gradient(45deg, #6a1b9a, #8e24aa)",
                color: "#fff",
                px: 3,
                py: 1.5,
                "&:hover": {
                  background: "linear-gradient(45deg, #5e35b1, #6a1b9a)",
                },
              }}
            >
              What's your target?
            </Button>
            <Button
              variant="contained"
              startIcon={<InsertChart />}
              sx={{
                borderRadius: "16px",
                textTransform: "capitalize",
                background: "linear-gradient(45deg, #6a1b9a, #8e24aa)",
                color: "#fff",
                px: 3,
                py: 1.5,
                "&:hover": {
                  background: "linear-gradient(45deg, #5e35b1, #6a1b9a)",
                },
              }}
            >
              What are your stats?
            </Button>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}
