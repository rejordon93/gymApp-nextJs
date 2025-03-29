import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import axios from "axios";

type AdminRequestCardProps = {
  req: {
    id: number;
    username: string;
    email: string;
  };
};

const AdminRequestCard = ({ req }: AdminRequestCardProps) => {
  const handleAddAdmin = async () => {
    try {
      await axios.post("/api/admin/approve", {
        userId: req.id,
      });
      console.log(`Adding user with ID: ${req.id} as admin.`);
    } catch (error) {
      console.error("Error ", error);
    }
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
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddAdmin}
          >
            Add Admin
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AdminRequestCard;
