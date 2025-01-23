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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "500px", // Limit max width to prevent modal from stretching too wide
  bgcolor: "background.paper",
  borderRadius: 2, // Rounded corners for a softer look
  boxShadow: 24,
  p: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Centering the content
};

export default function CheckInModel() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Fetch data from the API
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/workouts/getWorkout");
        setData(res.data);
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
          ? prev.filter((item) => item !== plan) // Deselect if already selected
          : [...prev, plan] // Add if not selected
    );
  };

  // Handle the "Start Workout!" button click
  const handleStartWorkout = () => {
    handleClose(); // Close the modal
  };

  return (
    <div>
      {/* Button to Open Modal */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Check-in
      </Button>

      {/* Modal */}
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

          {/* Display Error or Checkbox List */}
          {error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <FormGroup>
              {data.map((item, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={selectedPlans.includes(item)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                  }
                  label={item}
                />
              ))}
            </FormGroup>
          )}

          {/* Button to Submit Selection */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartWorkout}
            sx={{ mt: 2 }}
            disabled={selectedPlans.length === 0} // Disable if no selection
          >
            Start Workout!
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
