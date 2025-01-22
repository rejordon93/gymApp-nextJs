import { useEffect, useState } from "react";
import {
  Modal,
  Typography,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import axios from "axios";

export default function CheckInModel() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any[]>([]); // Adjusted to handle array of objects
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Fetch data from the API
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/workouts/getWorkout");
        setData(res.data); // Set the array of objects directly
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load workout plans. Please try again later.");
      }
    };
    getData();
  }, []);

  // Handle checkbox changes
  const handleCheckboxChange = (plan: string) => {
    setSelectedPlans(
      (prev) =>
        prev.includes(plan)
          ? prev.filter((item) => item !== plan)
          : [...prev, plan] // Add if not selected
    );
  };

  // Handle the "Start Workout!" button click
  const handleModelClick = () => {
    console.log("Selected Plans:", selectedPlans);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            Select a Plan for Today
          </Typography>
          {error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <FormGroup>
              {data.map((item) => (
                <FormControlLabel
                  key={item.id}
                  control={
                    <Checkbox
                      checked={selectedPlans.includes(item.workout)}
                      onChange={() => handleCheckboxChange(item.workout)}
                    />
                  }
                  label={item.workout} // Render the workout property as the label
                />
              ))}
            </FormGroup>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleModelClick}
            sx={{ mt: 2 }}
            disabled={selectedPlans.length === 0}
          >
            Start Workout!
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
