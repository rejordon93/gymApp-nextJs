"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAdminContext } from "@/context/context"; // Ensure this is the correct path
import axios from "axios";

// Material-UI Components
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Divider,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { ActionType } from "@/context/adminReducer";

export default function AdminLogin() {
  const router = useRouter();

  // Use the correct context hook
  const { adminState, adminDispatch } = UserAdminContext();

  // Component State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Snackbar state
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const onAdmin = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/admin/createAdmin", {
        email,
        password,
      });
      adminDispatch({ type: ActionType.SET_ADMIN, payload: res.data });
      // Redirect to the admin home page
      router.push("/client/admin/adminHome");
    } catch (error) {
      console.error("Error logging in:", error);
      setSnackbarMessage("Access denied. Admins only.");
      setOpenSnackbar(true); // Open the Snackbar with the error message
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsButtonDisabled(!(email.length > 0 && password.length > 0));
  }, [email, password]);

  // Handle Snackbar close
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pb: 20,
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "background.paper",
          backgroundImage: "linear-gradient(to bottom right, #f5f5f5, #ffffff)",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "translateY(-2px)" },
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: "linear-gradient(45deg, #1976d2 30%, #2196f3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Admin Login
        </Typography>
        <Divider sx={{ width: "100%", mb: 3, borderColor: "divider" }} />

        <Box component="form" noValidate sx={{ width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "&.Mui-focused fieldset": { borderColor: "primary.main" },
              },
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": { transform: "translateY(-1px)", boxShadow: 2 },
            }}
            onClick={onAdmin}
            disabled={isButtonDisabled || isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Login"
            )}
          </Button>
        </Box>
      </Box>

      {/* Snackbar for error message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "top", // Position at the top
          horizontal: "center", // Centered horizontally
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
