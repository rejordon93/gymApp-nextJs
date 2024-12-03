"use client";
import axios from "axios";
import { useState } from "react";
import { WorkoutDataProps } from "../../types/page";
import BarChart from "@/components/BarChart";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Paper,
  Typography,
  CircularProgress,
  Container,
  Input,
  Grid,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function GymProgressPage() {
  const [data, setData] = useState<WorkoutDataProps[]>([]);
  const [userWeight, setUserWeight] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const updateProfile = async () => {
    setLoading(true);

    const userCheckIn = {
      checkin: new Date().toISOString(),
      weight: userWeight,
      updateWeighIn: 0,
      workoutReview: "",
      checkout: new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        "/api/workouts/createWorkouts",
        userCheckIn
      );

      const { workout } = response.data as {
        message: string;
        workout: WorkoutDataProps;
      };

      setData((prevData) => [...prevData, workout]);
      toast.success("Keep up the great work!", {
        icon: "💪",
        duration: 5000,
      });
      setUserWeight(0);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
      toast.error("Failed to log workout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 4, color: "primary.main" }}
        >
          Welcome to Your 365 Fitness! 💪
        </Typography>

        <Box sx={{ mb: 4 }}>
          <BarChart data={data} />
        </Box>

        <Box
          sx={{
            p: 3,
            backgroundColor: "#e3f2fd",
            borderRadius: 2,
            mb: 4,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url('/path/to/hero-image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 3,
              p: 4,
              mb: 4,
              textAlign: "center",
              color: "#fff",
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              Push Your Limits & Achieve Your Goals!
            </Typography>
            <Typography variant="subtitle1">
              Track your progress and stay motivated every step of the way.
            </Typography>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Gym Member Profile
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#555" }}>
            Total Visits: {data.length}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#555", mb: 1 }}>
            Last Weigh-In:{" "}
            {userWeight > 0 ? `${userWeight} lbs` : "No weigh-in yet"}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#555" }}>
            Location: Seattle
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#555" }}>
            Gym Name: Union Gym
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#555" }}>
            Average Workout Duration: 1 hour/session
          </Typography>
          <Button
            startIcon={<EditIcon />}
            variant="outlined"
            color="primary"
            sx={{ mt: 2 }}
          >
            Update Profile
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <TextField
            multiline
            rows={4}
            placeholder="Enter your workout review or notes here..."
            fullWidth
            variant="outlined"
            sx={{ flex: 1 }}
          />
          <Paper
            elevation={3}
            sx={{
              p: 2,
              flex: 1,
              textAlign: "center",
              backgroundColor: "#f1f1f1",
            }}
          >
            <Typography variant="subtitle1" color="textSecondary">
              Your workout notes will appear here
            </Typography>
          </Paper>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 3,
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 1,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
              >
                Weigh-In
              </Typography>
              <Input
                placeholder="Enter your weight (lbs)"
                value={userWeight}
                onChange={(e) => setUserWeight(Number(e.target.value) || 0)}
                sx={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 1,
                  border: "1px solid #ddd",
                  mb: 2,
                  fontSize: "1rem",
                  "&:focus": {
                    borderColor: "primary.main",
                    boxShadow: "0 0 5px rgba(33, 150, 243, 0.5)",
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={updateProfile}
                disabled={loading}
                sx={{ borderRadius: 1, fontWeight: "bold" }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Log Workout"
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>

        {error && (
          <Typography color="error" align="center" sx={{ mt: 3 }}>
            {error}
          </Typography>
        )}

        <Toaster />
      </Paper>
    </Container>
  );
}
