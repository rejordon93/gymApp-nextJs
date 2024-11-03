"use client";
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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExercisesInterfaces } from "@/app/types/page";
import axios from "axios";
import { useEffect, useState } from "react";

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

  const handleClick = async (item: string | null) => {
    if (item !== null) {
      try {
        setSelectedItem(item);

        const response = await axios.get("/api/workouts/favoriteWorkouts", {
          params: {
            searchValue: item,
          },
        });

        console.log("API response:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const searchResponseApi = await axios.get("/api/workouts/searchBarApi");
        setExercises(() => [...searchResponseApi.data]);

        if (selectedItem) {
          const responseFavorites = await axios.get(
            `/api/workouts/favoriteWorkouts`,
            {
              params: {
                searchValue: selectedItem,
              },
            }
          );
          setFavoriteExercises(() => [...responseFavorites.data]);
        }
      } catch (error) {
        console.error("Error fetching favorite exercises:", error);
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Exercise Favorites
      </Typography>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 700, width: "100%" }}>
        <Stack spacing={2}>
          <Autocomplete
            disablePortal
            options={exercises}
            renderInput={(params) => (
              <TextField {...params} label="Search Exercises" />
            )}
            onChange={(event, value) => handleClick(value)}
            sx={{ width: "100%" }}
          />
          <Button variant="contained" color="primary" onClick={handleBtnClick}>
            Show Favorite Exercises
          </Button>

          <Grid container spacing={2} mt={2}>
            {selectFavoriteExercises.slice(0, 6).map((val) => (
              <Grid item xs={12} sm={6} md={4} key={val.id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
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
                      <strong>Secondary Muscles:</strong> {val.secondaryMuscles}
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
                      <Typography variant="body2" color="text.secondary" mt={1}>
                        {val.instructions}
                      </Typography>
                    </Collapse>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Paper>
    </Box>
  );
}
