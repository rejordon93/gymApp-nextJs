"use client";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";

export default function ProfileLowerBtn() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between", // Space buttons apart
        alignItems: "center", // Vertically center
        mt: 4, // Top margin
        gap: 3, // Increased gap for breathing room
        px: { xs: 2, sm: 4 }, // Responsive padding
        py: 2, // Vertical padding
        borderRadius: "16px",
        maxWidth: "600px",
        mx: "auto", // Center horizontally
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)", // Hover shadow
        },
      }}
    >
      <Button
        onClick={() => router.push("/client/profile")}
        startIcon={<Edit />}
        variant="contained"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "0.9rem", sm: "1rem" },
          textTransform: "uppercase",
          px: { xs: 3, sm: 4 },
          py: 1.5,
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          background: "linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)",
          color: "#fff",
          transition: "all 0.3s ease",
          animation: "slideInFromLeft 0.5s ease-out forwards", // Slide in from left
          "@keyframes slideInFromLeft": {
            "0%": {
              transform: "translateX(-100%)", // Start off-screen left
              opacity: 0,
            },
            "100%": {
              transform: "translateX(0)", // End at normal position
              opacity: 1,
            },
          },
          "&:hover": {
            background: "linear-gradient(135deg, #21CBF3 0%, #2196F3 100%)",
            transform: "translateY(-2px)",
          },
          "&:active": {
            transform: "translateY(1px)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        Back
      </Button>

      <Button
        onClick={() => router.push("/client/profileUpdateForm")}
        startIcon={<Edit />}
        variant="contained"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "0.9rem", sm: "1rem" },
          textTransform: "uppercase",
          px: { xs: 3, sm: 4 },
          py: 1.5,
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          background: "linear-gradient(135deg, #4CAF50 0%, #81C784 100%)",
          color: "#fff",
          transition: "all 0.3s ease",
          animation: "slideInFromRight 0.5s ease-out forwards", // Slide in from right
          "@keyframes slideInFromRight": {
            "0%": {
              transform: "translateX(100%)", // Start off-screen right
              opacity: 0,
            },
            "100%": {
              transform: "translateX(0)", // End at normal position
              opacity: 1,
            },
          },
          "&:hover": {
            background: "linear-gradient(135deg, #81C784 0%, #4CAF50 100%)",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
            transform: "translateY(-2px)",
          },
          "&:active": {
            transform: "translateY(1px)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        Update Profile
      </Button>
    </Box>
  );
}
