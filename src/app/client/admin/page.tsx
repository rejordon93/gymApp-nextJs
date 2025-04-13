"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeEmployee, setActiveEmployee] = useState<number>(0);
  const [currentUser, setCurrentUser] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/admin/getEmployee");
        setActiveEmployee(res.data.employees.length);
        setCurrentUser(res.data.currentUser.username);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          p: 4,
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CircularProgress size={60} thickness={4} />
        <Typography variant="h6" mt={2}>
          Loading admin dashboard...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Welcome back, Admin {currentUser} 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Employees</Typography>
              <Typography variant="h4">{activeEmployee}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Upcoming Events</Typography>
              <Typography variant="h4">3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Roles</Typography>
              <Typography variant="h4">4</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h6" mb={2}>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Link href="/client/admin/manageEmployees" passHref>
              <Button variant="contained">Manage Employees</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/admin/events" passHref>
              <Button variant="contained" color="secondary">
                Manage Events
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/admin/roles" passHref>
              <Button variant="contained" color="success">
                Manage Roles
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
