"use client";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import reducer, { AUTH_INITIAL_STATE, ActionType } from "@/context/authReducer";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export default function SignupPage() {
  const router = useRouter();
  const [userState, userdispatch] = useReducer(reducer, AUTH_INITIAL_STATE);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const onSignup = async () => {
    try {
      userdispatch({ type: ActionType.SET_LOADING, payload: true });
      const response = await axios.post("/api/users/signup", {
        username,
        password,
        email,
      });
      console.log("Signup success", response.data);
      router.push("/client/login");
    } catch (error) {
      userdispatch({
        type: ActionType.SET_ERROR,
        payload: error instanceof Error ? error.message : String(error),
      });
    } finally {
      userdispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

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
      <Box
        sx={{
          width: "100%",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {userState.apiRequestContext.isLoading ? "Processing" : "Signup"}
        </Typography>
        <Box component="hr" sx={{ mb: 4, borderColor: "divider" }} />

        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />

        {userState.apiRequestContext.error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {userState.apiRequestContext.error}
          </Typography>
        )}

        <Button
          onClick={onSignup}
          variant="contained"
          color="primary"
          fullWidth
          disabled={buttonDisabled || userState.apiRequestContext.isLoading}
          sx={{
            mt: 3,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          {userState.apiRequestContext.isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Signup"
          )}
        </Button>

        <Typography sx={{ mt: 2, color: "text.secondary" }}>
          Already have an account?{" "}
          <Link href="/login" passHref>
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Login
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
