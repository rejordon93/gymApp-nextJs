"use client"; // Marks this as a client-side component (Next.js 13+)
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthAppContext } from "@/context/context";
import { ActionType } from "@/context/authReducer";
import axios from "axios";

// Material-UI Components
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";

export default function LoginPage() {
  // Hooks and Context
  const router = useRouter();
  const { userState, userDispatch } = AuthAppContext();

  // Component State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [requestAdmin] = useState(false);

  // Login Handler
  const onLogin = async () => {
    try {
      userDispatch({ type: ActionType.SET_LOADING, payload: true });
      const response = await axios.post("/api/users/login", {
        email,
        password,
        requestAdmin,
      });
      // Update global state with user data
      userDispatch({ type: ActionType.SET_USER, payload: response.data });
      router.push("/client/profile");
    } catch (error) {
      userDispatch({
        type: ActionType.SET_ERROR,
        payload: "Invalid Email or Password. Please try again.",
      });
    } finally {
      userDispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  // Enable/Disable login button based on input
  useEffect(() => {
    setIsButtonDisabled(!(email.length > 0 && password.length > 0));
  }, [email, password]);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pb: 20, // Added bottom padding
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
          "&:hover": {
            transform: "translateY(-2px)",
          },
        }}
      >
        {/* Header Section */}
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
          {userState.apiRequestContext?.isLoading ? (
            <CircularProgress size={28} color="inherit" />
          ) : (
            "Welcome Back"
          )}
        </Typography>
        <Divider sx={{ width: "100%", mb: 3, borderColor: "divider" }} />

        {/* Login Form */}
        <Box component="form" noValidate sx={{ width: "100%" }}>
          {/* Email Input */}
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
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          {/* Password Input */}
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
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />

          {/* Error Message Display */}
          {userState.apiRequestContext.error && (
            <Alert
              severity="error"
              sx={{
                mt: 2,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "error.main",
              }}
            >
              {userState.apiRequestContext.error}
            </Alert>
          )}

          {/* Login Button */}
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
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: 2,
              },
            }}
            onClick={onLogin}
            disabled={isButtonDisabled || userState.apiRequestContext.isLoading}
          >
            {userState.apiRequestContext.isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign In"
            )}
          </Button>
          <Link href="/client/admin">
            <Button>Admin</Button>
          </Link>
          <Link href="/client/trainer">
            <Button>Trainer</Button>
          </Link>

          {/* Registration Link */}
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mt: 2 }}
          >
            Dont have an account?{" "}
            <Link href="/client/signup" passHref>
              <Typography
                component="span"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Create Account
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
