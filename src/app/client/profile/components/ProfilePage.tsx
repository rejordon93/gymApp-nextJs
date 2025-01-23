"use client";
import { useState, useEffect } from "react";
import { ProfileType } from "@/app/types/page";
import { useContext } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import {
  Box,
  Button,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Modal,
} from "@mui/material";

import { VisitsContext } from "@/context/context";
import { ActionType } from "@/context/visitsReducer";
import ProfileLowerBtn from "./ProfileLowerBtns";
import ProfileInfo from "./ProfileInfo";

export default function ProfilePage() {
  const context = useContext(VisitsContext)!;
  const { visitState, visitDispatch } = context;
  const [data, setData] = useState<string[]>([]);
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const [btn, setBtn] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedWorkouts, setSelectedWorkouts] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/profile/get");
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/workouts/getWorkout");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    getData();
  }, []);

  const handleCheckInBtn = async () => {
    // Update the state before making the API call
    setOpen(true);

    // Wait for the UI to render the open state before proceeding
    setTimeout(async () => {
      const data = {
        userId: profileData?.userId,
        checkin: new Date().toISOString(),
        checkOut: null,
      };

      try {
        const res = await axios.post("/api/visits/usersVisits", data);
        visitDispatch({ type: ActionType.SET_VISIT, payload: res.data });
        console.log("Visit updated successfully:", res.data);
        setBtn(false);
      } catch (error) {
        if (error instanceof Error) {
          visitDispatch({ type: ActionType.SET_ERROR, payload: error.message });
          Toastify({
            text: "ERROR: Missing profile data. Please update your profile.",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
          }).showToast();
        }
      }
    }, 1000); // Small delay to allow rendering of the state change
  };

  const handleCheckOutBtn = async () => {
    const checkoutDate = new Date(); // Current timestamp for checkout
    // const checkinDate = new Date(visitState.visit.data.checkin); // Convert checkin to Date object

    // Calculate the time difference in hours
    // const timeDifference = (checkoutDate - checkinDate) / (1000 * 60 * 60);

    const data = {
      userId: visitState.visit.data.userId,
      checkin: visitState.visit.data.checkin, // Existing checkin
      checkout: checkoutDate.toISOString(), // Current timestamp as ISO string
      // time: parseFloat(timeDifference.toFixed(2)), // Time in hours, rounded to 2 decimal places
    };

    console.log("Checkout Data:", data);

    try {
      const res = await axios.patch("/api/visits/updateUsersVisits", data);
      visitDispatch({ type: ActionType.SET_VISIT, payload: res.data });
      console.log("Visit updated successfully:", res.data);
      setBtn(true);
      setOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        visitDispatch({ type: ActionType.SET_ERROR, payload: error.message });
      }
    }
  };

  const handleCheckboxChange = (index: number) => {
    setSelectedWorkouts((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((item) => item !== index); // Uncheck the box
      } else {
        return [...prevSelected, index]; // Check the box
      }
    });
  };

  const handleStartWorkout = () => {
    // Log the selected workouts
    const selectedNames = selectedWorkouts.map((index) => data[index].workout);
    setOpen(false);
    console.log(selectedNames);
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
        {btn ? (
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
              borderRadius: "12px", // Rounded corners
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect
              background: "linear-gradient(to right, #2196F3, #21CBF3)", // Gradient background
              "&:hover": {
                background: "linear-gradient(to right, #21CBF3, #2196F3)", // Reverse gradient
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Slightly larger shadow
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
              borderRadius: "12px", // Rounded corners
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect
              background: "linear-gradient(to right, #FF9800, #FFC107)", // Gradient background
              "&:hover": {
                background: "linear-gradient(to right, #FFC107, #FF9800)", // Reverse gradient
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Slightly larger shadow
              },
            }}
          >
            Check Out
          </Button>
        )}
      </Box>

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
                p: 4, // Increased padding for better spacing
                width: "380px", // Increased width
                maxWidth: "90%",
                boxShadow: 24,
                mx: "auto",
                mt: "15%", // Adjusted margin top for better positioning
                transition: "all 0.3s ease",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3, // Increased bottom margin
                  fontWeight: "bold",
                  color: "primary.main",
                  textAlign: "center", // Center the title
                  fontSize: "1.25rem", // Increased font size for better readability
                }}
              >
                Select a Plan for today
              </Typography>

              <FormGroup sx={{ width: "100%", mb: 3 }}>
                {" "}
                {/* Increased margin-bottom */}
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
                      mb: 1, // Added margin-bottom to separate checkboxes
                    }}
                  />
                ))}
              </FormGroup>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: 3, // Increased gap for more space between buttons
                }}
              >
                {/* Close Button */}
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpen(false)}
                  sx={{
                    width: "48%",
                    borderRadius: "30px",
                    padding: "12px 24px", // Increased padding for a larger button
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      backgroundColor: "secondary.light",
                      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Close
                </Button>

                {/* Start Workout Button */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleStartWorkout}
                  sx={{
                    width: "48%",
                    borderRadius: "30px",
                    padding: "12px 24px", // Increased padding for a larger button
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

      {/* update Profile */}
      <ProfileInfo />
      {/* Action Buttons */}
      <ProfileLowerBtn />
    </Box>
  );
}
