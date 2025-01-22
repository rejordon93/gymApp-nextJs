import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  CardContent,
  Typography,
  Card,
  Box,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
import { UserWorkoutContext } from "@/context/context";
import axios from "axios";
import { ActionType } from "@/context/workoutReducer";

export default function Cards() {
  const { workoutState, workoutDispatch } = UserWorkoutContext();
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [workoutData, setWorkoutData] = useState<
    { id: string; workout: string }[]
  >([]);

  const cards = [
    { id: 1, title: "Chest", description: "Upper body" },
    { id: 2, title: "Back", description: "Upper body" },
    { id: 3, title: "Legs", description: "Lower body" },
    { id: 4, title: "Arms", description: "Upper/Lower arms" },
    { id: 5, title: "Cardio", description: "Core body" },
    { id: 6, title: "Abs", description: "Lower body" },
  ];

  const listStyle = {
    py: 0,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
    width: "100%",
  };

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  // Handle button click to add workout
  const handleBtn = async () => {
    try {
      const obj = {
        workout: selectedCard, // Use the selectedCard directly
      };

      const res = await axios.post("/api/workouts/postWorkout", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      workoutDispatch({
        type: ActionType.SET_UPDATED_WORKOUT,
        payload: res.data,
      });
      // After adding workout, fetch updated workout data
      getDate();
    } catch (error) {
      console.error("Error", error);
    }
  };

  // Fetch workout data from the backend
  const getDate = async () => {
    try {
      const { data } = await axios.get("/api/workouts/getWorkout");

      setWorkoutData(data);
    } catch (error) {
      console.error("Error fetching workout data:", error);
    }
  };

  const handleRemoveBtn = async (id: string, item: string) => {
    try {
      const obj = {
        id: id,
        workout: item,
      };

      const res = await axios.delete("/api/workouts/deleteWorkout", {
        headers: {
          "Content-Type": "application/json",
        },
        data: obj,
      });
      console.log(res.data);
      workoutDispatch({
        type: ActionType.SET_DELETE,
        payload: res.data.id,
      });
      // Optionally update local state as well if required
      setWorkoutData((prevData) => prevData.filter((i) => i.id !== id));
      console.log(res);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Grid layout for cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          width: "75%",
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            sx={{
              p: 2,
              border: "1px solid #ccc",
              "&:hover": {
                backgroundColor: "#2196f3",
                cursor: "pointer",
              },
            }}
            onClick={() => handleCardClick(card.title)}
          >
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Vertical List on the right */}
      <Box sx={{ width: "25%", padding: 0, marginLeft: "20px" }}>
        <List sx={listStyle}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Created Workouts
          </Typography>
          {workoutData.map((item, index) => (
            <ListItem key={index} sx={{ paddingY: 1 }}>
              <ListItemText
                primary={item.workout}
                sx={{
                  color: "text.primary",
                  fontWeight: index % 2 === 0 ? "bold" : "normal", // Alternate item styles
                }}
              />{" "}
              <Button onClick={() => handleRemoveBtn(item.id, item.workout)}>
                X
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Snackbar for Click Feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{ width: "100%" }}
        >
          You clicked {selectedCard}!
        </Alert>
      </Snackbar>

      {/* Button at the bottom */}
      <Box
        sx={{
          position: "absolute",
          top: "calc(100% + 16px)", // Position the button below the cards section
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={handleBtn} variant="contained" color="primary">
          Add Workout
        </Button>
      </Box>
    </Box>
  );
}
