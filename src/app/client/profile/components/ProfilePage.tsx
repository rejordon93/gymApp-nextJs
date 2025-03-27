"use client";
import { useState, useEffect } from "react";
import { ProfileType } from "@/app/types/page";
import axios from "axios";
import ProfilePopUp from "./ProfilePopUp";

// MUI Components
import { Box, Snackbar, Alert } from "@mui/material";

export default function ProfilePage() {
  // Local state to store the user's profile data
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  // Snackbar state to manage notifications
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Controls Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Message to be displayed in Snackbar
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  ); // Type of message (success or error)

  // Fetch Profile Data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/profile/get"); // API call to get user profile data
        const data = Array.isArray(res.data) ? res.data[0] : res.data; // Ensure data format is correct
        setProfileData(data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching profile data:", error);
        showSnackbar("Error fetching profile data", "error"); // Show error message in Snackbar
      }
    };
    fetchData();
  }, []); // Runs only once when component mounts

  // Function to show Snackbar with a message and severity
  const showSnackbar = (message: string, severity: "success" | "error") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // Function to close Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box>
      {/* Pop-up component for additional profile actions */}
      <ProfilePopUp />
      {/* Snackbar for displaying notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Automatically hides after 3 seconds
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // Positioning of Snackbar
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity} // Sets severity level (success or error)
          sx={{ width: "100%" }}
        >
          {snackbarMessage} {/* Displays the message */}
        </Alert>
      </Snackbar>
    </Box>
  );
}
