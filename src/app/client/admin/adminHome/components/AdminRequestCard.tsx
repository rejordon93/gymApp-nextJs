import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import axios from "axios";

type AdminRequestCardProps = {
  req: {
    id: number;
    username: string;
    email: string;
    createdAt: string;
    isOnline: boolean;
    isAdminRequest: boolean;
    isTrainerRequest: boolean;
  };
  updateRequests: (
    id: number,
    type: "admin" | "trainer",
    action: "approve" | "reject"
  ) => void;
};

const AdminRequestCard = ({ req, updateRequests }: AdminRequestCardProps) => {
  // Handle Add Admin action
  const handleAddAdmin = async () => {
    try {
      await axios.post("/api/admin/approve", { userId: req.id });
      console.log(`Adding user with ID: ${req.id} as admin.`);
      updateRequests(req.id, "admin", "approve"); // Optimistic update
    } catch (error) {
      console.error("Error ", error);
    }
  };

  // Handle Add Trainer action
  const handleAddTrainer = async () => {
    try {
      await axios.post("/api/trainer/approve", { userId: req.id });
      console.log(`Adding user with ID: ${req.id} as trainer.`);
      updateRequests(req.id, "trainer", "approve"); // Optimistic update
    } catch (error) {
      console.error("Error ", error);
    }
  };

  // Format the createdAt date
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Date(date).toLocaleString("en-US", options);
  };

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 4,
          transform: "translateY(-2px)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {req.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {req.email}
        </Typography>

        {/* Display createdAt */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Created At: {formatDate(req.createdAt)}
        </Typography>

        {/* Display online status */}
        <Typography
          variant="body2"
          color={req.isOnline ? "primary.main" : "text.secondary"}
          sx={{ mt: 1 }}
        >
          Status: {req.isOnline ? "Online" : "Offline"}
        </Typography>

        <Box sx={{ mt: 2 }}>
          {/* Conditionally render Add Admin or Add Trainer based on the request type */}
          {req.isAdminRequest && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddAdmin}
            >
              Add Admin
            </Button>
          )}

          {req.isTrainerRequest && (
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleAddTrainer}
            >
              Add Trainer
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default AdminRequestCard;
