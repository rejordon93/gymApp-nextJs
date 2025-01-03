"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { Box, Button, Container, Typography } from "@mui/material";
export default function LogoutPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const logout = async () => {
    setLoading(true); // Start loading
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful", { duration: 5000 });
      router.push("/client/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error("Logout failed. Please try again later.", {
          duration: 5000,
        });
      } else if (error instanceof Error) {
        console.log(error.message);
        toast.error("An unexpected error occurred.", { duration: 5000 });
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Toaster position="top-right" reverseOrder={false} />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          color="text.primary"
          sx={{ mb: 2 }}
        >
          Logout
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          Are you sure you want to log out?
        </Typography>

        <Button
          onClick={logout}
          variant="contained"
          color="error"
          fullWidth
          sx={{ mb: 2 }}
          disabled={loading} // Disable button while logging out
        >
          {loading ? "Logging out..." : "Logout"}
        </Button>

        <Link href="/client/profile" passHref>
          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer", textAlign: "center" }}
          >
            Cancel
          </Typography>
        </Link>
      </Box>
    </Container>
  );
}
