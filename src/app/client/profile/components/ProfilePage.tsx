"use client";
import { useState, useEffect } from "react";
import { ProfileType } from "@/app/types/page";
import axios from "axios";
import ProfilePopUp from "./ProfilePopUp";

// MUI Components
import { Box, Snackbar, Alert } from "@mui/material";

// Custom Components
import ProfileLowerBtn from "./ProfileLowerBtns";
import ProfileInfo from "./ProfileInfo";

interface Workout {
  workout: string;
}

export default function ProfilePage() {
  // State and Context
  // Local State
  const [data, setData] = useState<Workout[]>([]); // Workout data
  const [profileData, setProfileData] = useState<ProfileType | null>(null); // User profile data
  // Snackbar State
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  ); // Snackbar severity

  // Fetch Profile Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/profile/get");
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        showSnackbar("Error fetching profile data", "error");
      }
    };
    fetchData();
  }, []);

  // Show Snackbar
  const showSnackbar = (message: string, severity: "success" | "error") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box>
      {/* Update Profile */}
      <ProfilePopUp />
      <ProfileInfo />
      {/* Action Buttons */}
      <ProfileLowerBtn />

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
