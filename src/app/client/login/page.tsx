"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthAppContext } from "@/context/context";
import { ActionType } from "@/context/authReducer";
import axios from "axios";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Divider,
  Alert,
} from "@mui/material";

export default function LoginPage() {
  const router = useRouter();
  const { userState, userDispatch } = AuthAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const onLogin = async () => {
    try {
      userDispatch({ type: ActionType.SET_LOADING, payload: true });
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });

      console.log("Login success", response.data);
      const userData = response.data;
      userDispatch({ type: ActionType.SET_USER, payload: userData });

      router.push("/client/profile");
    } catch (error) {
      userDispatch({
        type: ActionType.SET_ERROR,
        payload: "Login failed. Please try again.",
      });
    } finally {
      userDispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  return (
    <Container component="main" maxWidth="xs">
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
          {userState.apiRequestContext?.isLoading ? "Processing..." : "Login"}
        </Typography>
        <Divider sx={{ width: "100%", mb: 2 }} />

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />

          {userState.apiRequestContext.error && (
            <Alert severity="error" sx={{ mt: 2, textAlign: "center" }}>
              {userState.apiRequestContext.error}
            </Alert>
          )}

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={onLogin}
            disabled={isButtonDisabled}
          >
            {userState.apiRequestContext.isLoading ? "Processing..." : "Login"}
          </Button>

          <Typography variant="body2" align="center" color="text.secondary">
            Dont have an account?{" "}
            <Link href="/client/signup" passHref>
              <Typography
                component="span"
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                Signup
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
