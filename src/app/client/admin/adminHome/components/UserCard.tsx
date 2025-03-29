import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

type UserCardProps = {
  user: {
    id: number;
    username: string;
    email: string;
    isOnline: boolean;
    createdAt: string;
  };
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 5,
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Avatar with Initials */}
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          textTransform: "uppercase",
        }}
      >
        {user.username.charAt(0).toUpperCase()}
      </Box>

      {/* User Info */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={600}>
          {user.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: user.isOnline ? "green" : "red",
            fontWeight: 600,
          }}
        >
          {user.isOnline ? "Online" : "Offline"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Joined: {new Date(user.createdAt).toLocaleDateString()}
        </Typography>
      </Box>
    </Card>
  );
};

export default UserCard;
