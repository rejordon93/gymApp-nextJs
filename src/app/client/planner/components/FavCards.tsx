import { useState, useEffect } from "react";
import {
  CircularProgress,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import axios from "axios";

interface Workout {
  workout: string;
}

export default function FavCards() {
  const [favWorkouts, setFavWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/workouts/getWorkout");
        if (Array.isArray(res.data)) {
          setFavWorkouts(res.data);
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}
    >
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "1rem",
          padding: "0.5rem 1.5rem",
          "&:hover": {
            backgroundColor: "#155a9c",
          },
        }}
      >
        Show Created Plans
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        {favWorkouts.length > 0 ? (
          favWorkouts.map((workout, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              sx={{
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                padding: "0.75rem 1.5rem",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {workout.workout}
              </Typography>
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled sx={{ padding: "0.75rem 1.5rem" }}>
            <Typography variant="body1" color="text.secondary">
              No workouts found
            </Typography>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
