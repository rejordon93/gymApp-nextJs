import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Snackbar,
  SnackbarContent,
  Button,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { UserWorkoutContext } from "@/context/context";
import { ActionType } from "@/context/workoutReducer";
import axios from "axios";
import FavCards from "./FavCards";

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState(""); // Dynamic message state
  const [isError, setIsError] = useState(false); // Track success or error
  const { workoutState, workoutDispatch } = UserWorkoutContext();

  const cards = [
    { id: 1, title: "Chest", description: "Upper body" },
    { id: 2, title: "Back", description: "Upper body" },
    { id: 3, title: "Legs", description: "Lower body" },
    { id: 4, title: "Arms", description: "Upper/Lower arms" },
    { id: 5, title: "Cardio", description: "Core body" },
    { id: 6, title: "Abs", description: "Lower body" },
  ];

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    setMessage(`You selected: ${title}`);
    setIsError(false);
    setOpenMessage(true);
  };

  const handleClose = () => setOpenMessage(false);

  const handleBtn = async () => {
    if (!selectedCard) {
      setMessage("Please select a workout first.");
      setIsError(true);
      setOpenMessage(true);
      return;
    }
    try {
      const data = { workout: selectedCard };
      const res = await axios.post("/api/workouts/postWorkout", data);

      if (res.status === 201) {
        workoutDispatch({ type: ActionType.SET_WORKOUT, payload: res.data });
        setMessage(`Workout "${selectedCard}" added successfully!`);
        setIsError(false);
        setOpenMessage(true);
      } else {
        throw new Error("Unexpected error occurred.");
      }
    } catch (error) {
      setMessage("Failed to add workout. Please Check in First.");
      setIsError(true);
      setOpenMessage(true);
    }
  };

  const renderSnackbarContent = () => (
    <SnackbarContent
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: isError ? "#d32f2f" : "#2e7d32",
        color: "#fff",
      }}
      message={
        <Box display="flex" alignItems="center">
          {isError ? (
            <ErrorIcon sx={{ marginRight: "8px" }} />
          ) : (
            <CheckCircleIcon sx={{ marginRight: "8px" }} />
          )}
          {message}
        </Box>
      }
    />
  );

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "350px",
              alignItems: "center",
              textAlign: "center",
              padding: 2,
              boxShadow: 3,
            }}
          >
            <CardActionArea
              onClick={() => handleCardClick(card.title)}
              data-active={selectedCard === card.title ? "" : undefined}
              sx={{
                width: "100%",
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    marginBottom: 1,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Snackbar
        open={openMessage}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {renderSnackbarContent()}
      </Snackbar>
      <Stack
        direction="row"
        marginTop="2rem"
        height="4rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          onClick={handleBtn}
          variant="contained"
          sx={{
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "2rem",
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#155a9c",
            },
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          Add A Workout
        </Button>
        <Button sx={{ padding: 0 }}>
          <FavCards />
        </Button>
      </Stack>
    </>
  );
}
