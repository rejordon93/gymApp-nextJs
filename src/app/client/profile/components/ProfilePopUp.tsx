"use client"; // Client Component in Next.js

import { useState, useEffect, useContext } from "react";
import { ProfileType } from "@/app/types/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
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
import { VisitsContext } from "@/context/context";
import HandleCheckInBtn from "./HandleCheckInBtn";
import HandleCheckOutBtn from "./HandleCheckOutBtn";
import { HandleCheckboxChange } from "./HandleCheckBoxChange";
import { HandleStartWorkout } from "./HandleStartWorkout";

export interface Workout {
  workout: string; // Export this so HandleStartWorkout can use it
}

export default function ProfilePopUp() {
  const context = useContext(VisitsContext)!;
  const { visitState } = context;

  const [data, setData] = useState<Workout[]>([]);
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedWorkouts, setSelectedWorkouts] = useState<number[]>([]);
  const router = useRouter();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const showSnackbar = (message: string, severity: "success" | "error") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

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

  return (
    <>
      <Box
        display="flex"
        marginTop="2rem"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Button
          component={Link}
          href="/client/myHomePage"
          variant="outlined"
          color="primary"
          startIcon={<EditIcon />}
        >
          Edit Profile
        </Button>

        {visitState.visitData.checkinBtn ? (
          <HandleCheckInBtn
            profileData={profileData}
            onModalOpen={() => setOpen(true)}
          />
        ) : (
          <HandleCheckOutBtn
            profileData={profileData}
            onModalClose={() => setOpen(false)}
          />
        )}
      </Box>

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
                    onChange={() =>
                      HandleCheckboxChange(
                        workoutIndex,
                        selectedWorkouts,
                        setSelectedWorkouts
                      )
                    }
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
              onClick={() =>
                HandleStartWorkout(
                  selectedWorkouts,
                  data,
                  setOpen,
                  router,
                  showSnackbar
                )
              }
              variant="contained"
              color="primary"
            >
              Start Your Workout
            </Button>
          </Box>
        </Box>
      </Modal>

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
