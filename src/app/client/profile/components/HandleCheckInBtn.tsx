"use client"; // Client Component in Next.js

import { useState, useContext } from "react";
import { ProfileType } from "@/app/types/page"; // Custom TypeScript type for profile data
import axios from "axios";
import { VisitsContext } from "@/context/context"; // Context for visit state
import { ActionType } from "@/context/visitsReducer"; // Reducer action types
import { Button, Snackbar, Alert } from "@mui/material";

interface HandleCheckInBtnProps {
  profileData: ProfileType | null; // Pass profile data as a prop
  onModalOpen?: () => void; // Optional callback to open a modal
}

// Standalone Check-In Button Component
export default function HandleCheckInBtn({
  profileData,
  onModalOpen,
}: HandleCheckInBtnProps) {
  // --- State and Context Setup ---
  const context = useContext(VisitsContext)!; // Access VisitsContext
  const { visitState, visitDispatch } = context;

  // --- Local State ---
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  ); // Snackbar severity

  // --- Snackbar Utility Function ---
  const showSnackbar = (message: string, severity: "success" | "error") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // --- Handle Check-In Logic ---
  const handleCheckIn = async () => {
    if (!profileData?.userId) {
      showSnackbar("User profile not loaded", "error");
      return;
    }

    setLoading(true); // Indicate process has started
    if (onModalOpen) onModalOpen(); // Open modal if callback provided

    const data = {
      userId: profileData.userId, // Use profile data passed as prop
      checkin: new Date().toISOString(),
      checkout: null,
    };

    console.log("Data being sent to backend:", data);

    try {
      const res = await axios.post("/api/visits/usersVisits", data);
      console.log("API Response:", res.data);

      visitDispatch({
        type: ActionType.SET_VISIT,
        payload: { ...res.data, checkinBtn: false }, // Disable check-in button
      });

      console.log("Updated visitState:", visitState);
      showSnackbar("Checked in successfully", "success");
    } catch (error) {
      if (error instanceof Error) {
        visitDispatch({ type: ActionType.SET_ERROR, payload: error.message });
        showSnackbar(
          "ERROR: Missing profile data. Please update your profile.",
          "error"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // --- Render ---
  return (
    <>
      <Button
        onClick={handleCheckIn}
        variant="contained"
        color="primary"
        disabled={loading}
      >
        {loading ? "Checking In..." : "Check In"}
      </Button>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
