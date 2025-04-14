"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Link as MuiLink,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/employee/loginEmployee", {
        email,
        password,
      });

      setSnackbarMessage(res.data.message || "Login successful");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      setEmail("");
      setPassword("");
      router.push("/client/employeeDashboard");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setSnackbarMessage(error.response?.data?.error || "Login failed");
      } else {
        setSnackbarMessage("An unexpected error occurred");
      }
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 400,
          mx: "auto",
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={2}>
          Employee Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Don’t have an account?{" "}
            <Link href="/client/employeeLogin/signup" passHref>
              <MuiLink sx={{ fontWeight: 600 }}>Create Account</MuiLink>
            </Link>
          </Typography>
        </Box>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
