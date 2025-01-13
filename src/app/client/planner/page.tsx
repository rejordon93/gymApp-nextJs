"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  CircularProgress,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { UserWorkoutContext } from "@/context/context";
import { ActionType } from "@/context/workoutReducer";
import { ProfileType } from "@/app/types/page";
import axios from "axios";
import { showToast } from "@/app/utils/ToastUtils";
import { cardStyle } from "@/styles/workout";
import { weekDays, cardData } from "@/app/utils/ToastUtils";
import Cards from "./components/Cards";

export default function Planer() {
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const { workoutState, workoutDispatch } = UserWorkoutContext();
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [favorited, setFavorited] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const res = await axios.get("/api/profile/get");
        if (res.data) {
          setProfileData(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    getProfileData();
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        paddingTop: "2rem",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column", // Stack elements vertically
        alignItems: "center", // Center align elements horizontally
      }}
    >
      {/* Centered Title */}
      <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
        {profileData?.firstName}&apos;s Workout Plan
      </Typography>

      {/* Cards Section */}
      <Box sx={{ width: "100%" }}>
        <Cards />
      </Box>
    </Box>
  );
}
