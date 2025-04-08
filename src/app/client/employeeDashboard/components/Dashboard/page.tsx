"use client";

import React, { useState } from "react";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const res = await axios.post("/api/employee/signup", {
        username,
        email,
        password,
      });

      console.log(res.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  //   useEffect(() => {  this will get Event data later!!!!!!!!!!~~~~~~~~
  //     const getData = async () => {
  //       const res = await axios.get("/api/employee/events");
  //       console.log(res.data);
  //     };
  //     getData();
  //   }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Employee Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column - Upcoming Events */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Upcoming Events
          </Typography>
          <Card sx={{ p: 3, boxShadow: 2 }}>
            <Typography>No upcoming events right now.</Typography>
          </Card>
        </Grid>

        {/* Right Column - Employee Signup */}
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
