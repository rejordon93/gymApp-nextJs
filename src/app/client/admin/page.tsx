"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Welcome back, Ethan 👋
      </Typography>

      <Grid container spacing={3}>
        {/* Quick Stats */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Employees</Typography>
              <Typography variant="h4">25</Typography>
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

      {/* Quick Navigation */}
      <Box mt={4}>
        <Typography variant="h6" mb={2}>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Link href="/client/admin/employees" passHref>
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
