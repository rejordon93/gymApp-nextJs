"use client";
import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";
import { Edit } from "@mui/icons-material";

export default function ProfileLowerBtn() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 4,
        gap: 2, // Add spacing between buttons
      }}
    >
      <Button
        onClick={() => router.push("http://127.0.0.1:3000/")}
        startIcon={<Edit />}
        variant="contained"
        color="primary"
        sx={{
          fontWeight: "bold",
          fontSize: "1rem",
          textTransform: "uppercase",
          px: 4,
          py: 1.5,
          borderRadius: "12px", // Rounded corners
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect
          background: "linear-gradient(to right, #2196F3, #21CBF3)", // Gradient background
          "&:hover": {
            background: "linear-gradient(to right, #21CBF3, #2196F3)", // Reverse gradient on hover
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Slightly larger shadow
          },
        }}
      >
        Back
      </Button>
      <Button
        onClick={() => router.push("/client/profileUpdateForm")}
        startIcon={<Edit />}
        variant="contained"
        color="primary"
        sx={{
          fontWeight: "bold",
          fontSize: "1rem",
          textTransform: "uppercase",
          px: 4,
          py: 1.5,
          borderRadius: "12px", // Rounded corners
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect
          background: "linear-gradient(to right, #4CAF50, #81C784)", // Gradient background
          "&:hover": {
            background: "linear-gradient(to right, #81C784, #4CAF50)", // Reverse gradient on hover
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Slightly larger shadow
          },
        }}
      >
        Update Profile
      </Button>
    </Box>
  );
}
