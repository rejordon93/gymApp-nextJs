"use client";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import reducer, { AUTH_INITIAL_STATE, ActionType } from "@/context/authReducer";
import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

export default function RegisterNewUser() {
  // Hooks and State Management
  const router = useRouter();
  const [userState, userDispatch] = useReducer(reducer, AUTH_INITIAL_STATE);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  // Signup Handler
  const onSignup = async () => {
    try {
      userDispatch({ type: ActionType.SET_LOADING, payload: true });
      await axios.post("/api/users/signup", {
        username,
        password,
        email,
      });

      // Success Handling
      setSeverity("success");
      setSnackbarMessage("Signup successful! Redirecting to login...");
      setOpenSnackbar(true);
      setTimeout(() => router.push("/client/admin/adminHome"), 1500);
    } catch (error) {
      // Error Handling
      setSeverity("error");
      setSnackbarMessage(
        axios.isAxiosError(error)
          ? error.response?.data?.error || "Signup failed. Please try again."
          : "An unexpected error occurred."
      );
      setOpenSnackbar(true);
    } finally {
      userDispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  // Enable/Disable signup button based on form validation
  useEffect(() => {
    setButtonDisabled(!(email && password && username));
  }, [email, password, username]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        py: 4,
      }}
    >
      {/* Signup Card Container */}
      <Box
        sx={{
          width: "100%",
          padding: 4,
          borderRadius: 4,
          boxShadow: 3,
          bgcolor: "background.paper",
          textAlign: "center",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        }}
      >
        {/* Header Section */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: "linear-gradient(45deg, #1976d2 30%, #2196f3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {userState.apiRequestContext.isLoading ? (
            <CircularProgress size={32} color="inherit" />
          ) : (
            "Create Account"
          )}
        </Typography>
        <Box component="hr" sx={{ mb: 4, borderColor: "divider" }} />

        {/* Signup Form */}
        <Box component="form" sx={{ width: "100%" }}>
          {/* Username Input */}
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            required
            disabled={userState.apiRequestContext.isLoading}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          {/* Email Input */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            disabled={userState.apiRequestContext.isLoading}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            disabled={userState.apiRequestContext.isLoading}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          {/* Signup Button */}
          <Button
            onClick={onSignup}
            variant="contained"
            color="primary"
            fullWidth
            disabled={buttonDisabled || userState.apiRequestContext.isLoading}
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: 2,
              },
              "&:disabled": {
                bgcolor: "primary.main",
                opacity: 0.8,
              },
            }}
          >
            {userState.apiRequestContext.isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Create Account"
            )}
          </Button>
        </Box>
        <Link href="/client/admin/adminHome">
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "primary.main", // Change background on hover
                color: "white", // Change text color on hover
                transform: "translateY(-1px)",
                boxShadow: 2,
              },
              "&:disabled": {
                bgcolor: "primary.main",
                opacity: 0.6,
              },
            }}
          >
            Back
          </Button>
        </Link>

        {/* Notification Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            severity={severity}
            sx={{
              width: "100%",
              borderRadius: 2,
              border: severity === "error" ? "1px solid" : undefined,
              borderColor: severity === "error" ? "error.main" : undefined,
            }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}
