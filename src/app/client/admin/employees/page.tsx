"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Card,
  TextField,
  Typography,
  Button,
  Alert,
  Container,
} from "@mui/material";
import Link from "next/link";
import axios from "axios";

export default function Employees() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post("/api/admin/createAdmin", {
        username,
        email,
        password,
      });

      setUsername("");
      setEmail("");
      setPassword("");
      setSuccessMsg(res.data.message || "Employee created successfully!");
    } catch (error) {
      console.error("Error with data", error);
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (successMsg || errorMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg("");
        setErrorMsg("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMsg, errorMsg]);

  return (
    <Container sx={{ p: 4 }}>
      <Typography
        textAlign="center"
        variant="h4"
        fontWeight={700}
        mb={4}
        color="primary"
      >
        Create New Employee
      </Typography>

      <Card sx={{ p: 4, maxWidth: 600, mx: "auto", boxShadow: 3 }}>
        <form onSubmit={handleSubmit}>
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
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Link href="/client/admin">
              {" "}
              <Button variant="outlined" color="secondary">
                Back
              </Button>
            </Link>

            <Button type="submit" variant="contained" color="primary">
              Add Employee
            </Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
}
