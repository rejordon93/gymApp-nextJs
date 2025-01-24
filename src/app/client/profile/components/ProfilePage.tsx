"use client";
import { useState, useEffect } from "react";
import { ProfileType } from "@/app/types/page";
import { useContext } from "react";
import axios from "axios";

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

// Custom Components
import ProfileLowerBtn from "./ProfileLowerBtns";
import ProfileInfo from "./ProfileInfo";

export default function ProfilePage() {
  // State and Context
  const context = useContext(VisitsContext)!;
  const { visitState, visitDispatch } = context;

  // Local State
  const [data, setData] = useState<string[]>([]); // Workout data
  const [profileData, setProfileData] = useState<ProfileType | null>(null); // User profile data
  const [open, setOpen] = useState(false); // Modal open/close state
  const [selectedWorkouts, setSelectedWorkouts] = useState<number[]>([]); // Selected workouts

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

  // Fetch Workout Data
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

  // Handle Check-In Button
  const handleCheckInBtn = async () => {
    setOpen(true);

    setTimeout(async () => {
      const data = {
        userId: profileData?.userId,
        checkin: new Date().toISOString(),
        checkout: null,
        checkinBtn: false, // Set to false after check-in
      };

      try {
        const res = await axios.post("/api/visits/usersVisits", data);
        console.log("API Response:", res.data);

        visitDispatch({
          type: ActionType.SET_VISIT,
          payload: {
            id: res.data.data.id,
            userId: res.data.data.userId,
            checkin: res.data.data.checkin,
            checkout: res.data.data.checkout,
            checkinBtn: res.data.data.checkinBtn,
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
      }
    }, 1000);
  };

  // Handle Check-Out Button
  const handleCheckOutBtn = async () => {
    const checkoutDate = new Date();
    const data = {
      userId: profileData?.userId,
      checkin: visitState.visit.checkin, // Ensure this is correctly passed
      checkout: checkoutDate.toISOString(),
      checkinBtn: true, // Set to true after check-out
    };
    console.log("Data being sent to backend:", data);

    try {
      const res = await axios.patch("/api/visits/updateUsersVisits", data);
      console.log("API Response:", res.data);

      visitDispatch({
        type: ActionType.SET_VISIT,
        payload: {
          id: res.data.data.id,
          userId: res.data.data.userId,
          checkin: res.data.data.checkin,
          checkout: res.data.data.checkout,
          checkinBtn: res.data.data.checkinBtn,
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
    }
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

  // Handle Start Workout Button
  const handleStartWorkout = () => {
    const selectedNames = selectedWorkouts.map((index) => data[index].workout);
    setOpen(false);
    console.log(selectedNames);
    showSnackbar("Workout started successfully", "success");
  };

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
    <Box
      sx={{
        p: 4,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: "900px",
        mx: "auto",
        mt: 6,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/path/to/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          p: 6,
          mb: 4,
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
          }}
        />

        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ zIndex: 1, position: "relative", mb: 2 }}
        >
          Welcome to Gold Gym
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ zIndex: 1, position: "relative", opacity: 0.9 }}
        >
          Your fitness journey starts here. Let’s get stronger together.
        </Typography>
      </Box>

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
        {visitState.visit.checkinBtn ? (
          <Button
            onClick={handleCheckInBtn}
            variant="contained"
            color="primary"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "uppercase",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              background: "linear-gradient(to right, #2196F3, #21CBF3)",
              "&:hover": {
                background: "linear-gradient(to right, #21CBF3, #2196F3)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            Check In
          </Button>
        ) : (
          <Button
            onClick={handleCheckOutBtn}
            variant="contained"
            color="warning"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "uppercase",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              background: "linear-gradient(to right, #FF9800, #FFC107)",
              "&:hover": {
                background: "linear-gradient(to right, #FFC107, #FF9800)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            Check Out
          </Button>
        )}
      </Box>

      {/* Workout Selection Modal */}
      <div>
        {data.map((item, index) => (
          <Modal key={index} open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "background.paper",
                borderRadius: 2,
                p: 4,
                width: "380px",
                maxWidth: "90%",
                boxShadow: 24,
                mx: "auto",
                mt: "15%",
                transition: "all 0.3s ease",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                  color: "primary.main",
                  textAlign: "center",
                  fontSize: "1.25rem",
                }}
              >
                Select a Plan for today
              </Typography>

              <FormGroup sx={{ width: "100%", mb: 3 }}>
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
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      mb: 1,
                    }}
                  />
                ))}
              </FormGroup>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: 3,
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpen(false)}
                  sx={{
                    width: "48%",
                    borderRadius: "30px",
                    padding: "12px 24px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      backgroundColor: "secondary.light",
                      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Close
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleStartWorkout}
                  sx={{
                    width: "48%",
                    borderRadius: "30px",
                    padding: "12px 24px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Start Your Workout
                </Button>
              </Box>
            </Box>
          </Modal>
        ))}
      </div>

      {/* Update Profile */}
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
