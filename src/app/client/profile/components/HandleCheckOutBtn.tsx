"use client"; // Client Component in Next.js

import { useState, useContext } from "react";
import { ProfileType } from "@/app/types/page"; // Custom TypeScript type for profile data
import axios from "axios";
import { VisitsContext } from "@/context/context"; // Context for visit state
import { ActionType } from "@/context/visitsReducer"; // Reducer action types
import { Button, Snackbar, Alert } from "@mui/material";

interface HandleCheckOutBtnProps {
  profileData: ProfileType | null; // Pass profile data as a prop
  onModalClose?: () => void; // Optional callback to close a modal
}

// Standalone Check-Out Button Component
export default function HandleCheckOutBtn({
  profileData,
  onModalClose,
}: HandleCheckOutBtnProps) {
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

  // --- Handle Check-Out Logic ---
  const handleCheckout = async () => {
    if (!profileData?.userId) {
      showSnackbar("User profile not loaded", "error");
      return;
    }

    setLoading(true); // Indicate process has started
    const checkoutDate = new Date();

    const data = {
      userId: profileData.userId, // Use profile data passed as prop
      checkout: checkoutDate.toISOString(),
    };

    console.log("Data being sent to backend:", data);

    try {
      const res = await axios.patch("/api/visits/updateUsersVisits", data);
      console.log("API Response:", res.data);

      visitDispatch({
        type: ActionType.SET_UPDATED_VISIT,
        payload: { ...res.data, checkinBtn: true }, // Re-enable check-in
      });

      console.log("Updated visitState:", visitState);
      showSnackbar("Checked out successfully", "success");
    } catch (error) {
      if (error instanceof Error) {
        visitDispatch({ type: ActionType.SET_ERROR, payload: error.message });
        showSnackbar("Error checking out", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  // --- Render ---
  return (
    <>
      <Button
        onClick={handleCheckout}
        variant="contained"
        color="warning"
        disabled={loading}
      >
        {loading ? "Checking Out..." : "Check Out"}
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
