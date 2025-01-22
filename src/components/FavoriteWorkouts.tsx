"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExercisesInterfaces } from "@/app/types/page";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Autocomplete,
  TextField,
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Collapse,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

export default function WorkoutFavorite() {
  const [exercises, setExercises] = useState<string[]>([]);
  const [favoriteExercises, setFavoriteExercises] = useState<
    ExercisesInterfaces[]
  >([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectFavoriteExercises, setSelectFavoriteExercises] = useState<
    ExercisesInterfaces[]
  >([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (item: string | null) => {
    if (item) {
      try {
        setSelectedItem(item);
        setLoading(true);
        const response = await axios.get("/api/workouts/favoriteWorkouts", {
          params: { searchValue: item },
        });

        console.log("API response:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const searchResponseApi = await axios.get("/api/workouts/searchBarApi");
        setExercises([...searchResponseApi.data]);

        if (selectedItem) {
          const responseFavorites = await axios.get(
            `/api/workouts/favoriteWorkouts`,
            { params: { searchValue: selectedItem } }
          );
          setFavoriteExercises([...responseFavorites.data]);
        }
      } catch (error) {
        console.error("Error fetching favorite exercises:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, [selectedItem]);

  const handleBtnClick = () => {
    setSelectFavoriteExercises(favoriteExercises);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const toggleRemoveBtn = (id: string) => {
    setSelectFavoriteExercises((prevExercises) =>
      prevExercises.filter((exercise) => exercise.id !== id)
    );
    console.log(`Remove exercise with id ${id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 6,
        p: 2,
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "primary.main",
          textAlign: "center",
        }}
      >
        Exercise Favorites
      </Typography>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          maxWidth: 900,
          width: "100%",
          borderRadius: 3,
        }}
      >
        {/* Check if loading is true, and display a CircularProgress spinner if so */}
        {loading ? (
          <Stack alignItems="center" sx={{ mb: 4 }}>
            <CircularProgress />
          </Stack>
        ) : (
          <Stack spacing={3}>
            <Autocomplete
              disablePortal
              options={exercises}
              renderInput={(params) => (
                <TextField {...params} label="Search Exercises" fullWidth />
              )}
              onChange={(event, value) => handleClick(value)}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleBtnClick}
              sx={{
                py: 1.2,
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 3,
                "&:hover": {
                  boxShadow: 4,
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Show Favorite Exercises
            </Button>

            <Grid container spacing={2} mt={2} justifyContent="center">
              {selectFavoriteExercises.slice(0, 6).map((val) => (
                <Grid item xs={12} sm={6} md={4} key={val.id}>
                  <Box sx={{ p: 1 }}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        position: "relative",
                        borderRadius: 2,
                        boxShadow: 2,
                        transition: "transform 0.2s",
                        "&:hover": { transform: "scale(1.02)" },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={val.gifUrl}
                        alt={`${val.name} exercise`}
                      />
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {val.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          <strong>Body Part:</strong> {val.bodyPart}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          <strong>Equipment:</strong> {val.equipment}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          <strong>Target Muscle:</strong> {val.target}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          <strong>Secondary Muscles:</strong>{" "}
                          {val.secondaryMuscles}
                        </Typography>

                        <Box display="flex" alignItems="center" mt={1}>
                          <Typography variant="body2" color="text.secondary">
                            <strong>Instructions:</strong>
                          </Typography>
                          <IconButton
                            onClick={() => toggleExpand(val.id)}
                            aria-expanded={expandedId === val.id}
                            aria-label="show instructions"
                            size="small"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </Box>
                        <Collapse
                          in={expandedId === val.id}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            mt={1}
                          >
                            {val.instructions}
                          </Typography>
                        </Collapse>
                        <Tooltip title="Remove from Favorites">
                          <IconButton
                            onClick={() => toggleRemoveBtn(val.id)}
                            aria-label="delete"
                            color="error"
                            sx={{
                              backgroundColor: "rgba(255, 0, 0, 0.1)",
                              transition: "background-color 0.3s",
                              "&:hover": {
                                backgroundColor: "rgba(255, 0, 0, 0.2)",
                              },
                              position: "absolute",
                              top: 8,
                              left: 8,
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        )}
      </Paper>
    </Box>
  );
}
