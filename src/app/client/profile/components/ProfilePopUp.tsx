"use client";
import { useState, useEffect } from "react";
import { ProfileType } from "@/app/types/page";
import { useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
// MUI Components
import {
  Box,
  Button,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Modal,
  Snackbar,
  Alert,
} from "@mui/material";
// Context and Reducer
import { VisitsContext } from "@/context/context";
import { ActionType } from "@/context/visitsReducer";
// Custom Component

interface Workout {
  workout: string;
}
export default function ProfilePopUp() {
  // State and Context
  const context = useContext(VisitsContext)!;
  const { visitState, visitDispatch } = context;
  // Local State
  const [data, setData] = useState<Workout[]>([]); // Workout data
  const [profileData, setProfileData] = useState<ProfileType | null>(null); // User profile data
  const [open, setOpen] = useState(false); // Modal open/close state
  const [selectedWorkouts, setSelectedWorkouts] = useState<number[]>([]); // Selected workouts
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const router = useRouter(); // routing to new page
  // Snackbar State
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  // Snackbar Handler
  const showSnackbar = (message: string, severity: "success" | "error") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };
  //useEffect --------------------------------- this is geting data from profile and workouts
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
  //useEffect --------------------------------- this is geting data from profile and workouts
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/workouts/getWorkout");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching workout data:", err);
        showSnackbar("Error fetching workout data", "error");
      }
    };
    getData();
  }, []);

  // Handle Start Workout Button
  const handleStartWorkout = () => {
    const selectedNames = selectedWorkouts.map((index) => data[index].workout);
    setOpen(false);
    router.push("/client/exercises");
    console.log(selectedNames);
    showSnackbar("Workout started successfully", "success");
  };

  // Handle Checkbox Change for Workout Selection
  const handleCheckboxChange = (index: number) => {
    setSelectedWorkouts((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((item) => item !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  // Handle Check-In Button
  const handleCheckInBtn = async () => {
    setLoading(true);
    setOpen(true);

    const data = {
      userId: profileData?.userId,
      checkin: new Date().toISOString(),
      checkout: null,
    };
    console.log(data);
    try {
      const res = await axios.post("/api/visits/usersVisits", data);
      console.log("API Response:", res.data);

      visitDispatch({
        type: ActionType.SET_VISIT,
        payload: {
          ...res.data,
          checkinBtn: false, // Set checkinBtn to false after check-in
        },
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

  // Handle Check-Out Button
  const handleCheckOutBtn = async () => {
    setLoading(true);
    const checkoutDate = new Date();

    const data = {
      userId: profileData?.userId,
      checkout: checkoutDate.toISOString(),
    };

    console.log("Data being sent to backend:", data);

    try {
      const res = await axios.patch("/api/visits/updateUsersVisits", data);
      console.log("API Response:", res.data);

      visitDispatch({
        type: ActionType.SET_UPDATED_VISIT,
        payload: {
          ...res.data,
          checkinBtn: true, // Set checkinBtn to true after check-out
        },
      });

      console.log("Updated visitState:", visitState);
      setOpen(false);
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

  return (
    <>
      {/* Main Profile Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#333" }}>
          Gym Member Profile
        </Typography>
        {visitState.visitData.checkinBtn ? (
          <Button
            onClick={handleCheckInBtn}
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Check In
          </Button>
        ) : (
          <Button
            onClick={handleCheckOutBtn}
            variant="contained"
            color="warning"
            disabled={loading}
          >
            Check Out
          </Button>
        )}
      </Box>

      {/* Workout Selection Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 4,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h5">Select a Plan for today</Typography>

          <FormGroup>
            {data.map((workout, workoutIndex) => (
              <FormControlLabel
                key={workoutIndex}
                control={
                  <Checkbox
                    checked={selectedWorkouts.includes(workoutIndex)}
                    onChange={() => handleCheckboxChange(workoutIndex)}
                  />
                }
                label={workout.workout}
              />
            ))}
          </FormGroup>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => setOpen(false)}
              variant="outlined"
              color="secondary"
            >
              Close
            </Button>
            <Button
              onClick={handleStartWorkout}
              variant="contained"
              color="primary"
            >
              Start Your Workout
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Snackbar Notification */}
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
