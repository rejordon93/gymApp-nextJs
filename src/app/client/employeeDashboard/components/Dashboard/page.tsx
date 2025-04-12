"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import axios from "axios";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await axios.post("/api/employee/createDashboard", {
        username,
        email,
        password,
      });

      setUsername("");
      setEmail("");
      setPassword("");
      setSuccessMsg(res.data.message);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;
        if (status === 403) {
          setErrorMsg("You must be a STAFF or MANAGER to perform this action.");
          setUsername("");
          setEmail("");
          setPassword("");
        } else {
          setErrorMsg(
            err.response?.data?.message || "An unexpected error occurred."
          );
        }
      } else {
        setErrorMsg("Something went wrong.");
      }
    }
  };

  // ⏳ Auto-clear alerts after 7 seconds
  useEffect(() => {
    if (errorMsg || successMsg) {
      const timer = setTimeout(() => {
        setErrorMsg("");
        setSuccessMsg("");
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [errorMsg, successMsg]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Employee Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Upcoming Events
          </Typography>
          <Card sx={{ p: 3, boxShadow: 2 }}>
            <Typography>No upcoming events right now.</Typography>
          </Card>
        </Grid>

        {/* Right Column - Create Employee */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 4,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h5" fontWeight={600} mb={2}>
              Create New Clients
            </Typography>

            {errorMsg && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMsg}
              </Alert>
            )}

            {successMsg && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {successMsg}
              </Alert>
            )}

            <TextField
              label="Username"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
