import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { showToast } from "@/app/utils/ToastUtils";
import axios from "axios";

export default function FavCards() {
  const [favWorkouts, setFavWorkouts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/workouts/getWorkout");
        setFavWorkouts(res.data.workout);
        setLoading(false);
        showToast("Favorited workouts loaded!");
      } catch (error) {
        console.error("error", error);
        setLoading(false);
        showToast("Failed to load workouts.");
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginTop: "-6.6rem", // Adjust this value to move it upwards
          paddingBottom: "4rem", // Adjust or remove this if unnecessary
        }}
      >
        Created Plans
      </Typography>

      {loading ? (
        <CircularProgress
          sx={{ display: "block", margin: "auto", marginTop: "2rem" }}
        />
      ) : favWorkouts.length === 0 ? (
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginTop: "2rem" }}
        >
          No favorite workouts found.
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center" maxWidth={1200}>
          {favWorkouts.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 550,
                  height: 250,
                  padding: "1rem",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  },
                  borderRadius: "16px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "center", padding: "2rem" }}
                  >
                    {item}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
