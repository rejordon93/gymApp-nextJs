"use client";
import { useState, useEffect } from "react";
import { Typography, Grid, Paper, Box, Button } from "@mui/material";
import AdminRequestCard from "../../adminHome/components/AdminRequestCard";
import Link from "next/link";
import axios from "axios";

type dataProps = {
  id: number;
  username: string;
  email: string;
  isOnline: boolean;
  createdAt: string;
};

export default function RequestingPage() {
  const [adminRequests, setAdminRequests] = useState<dataProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/admin/getRequest");
        setAdminRequests(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching admin requests:", error);
      }
    };
    getData();
  }, []);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={4}>
        {/* Admin Requests Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 600, color: "primary.main" }}
            >
              Users Requesting Admin Access:
            </Typography>
            {adminRequests.length === 0 ? (
              <Typography color="text.secondary">
                No pending requests
              </Typography>
            ) : (
              adminRequests.map((req) => (
                <AdminRequestCard key={req.id} req={req} />
              ))
            )}
          </Paper>
        </Grid>

        {/* Users Requesting Trainer Access */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 600, color: "primary.main" }}
            >
              Users Requesting Trainer Access:
            </Typography>
            {adminRequests.length === 0 ? (
              <Typography color="text.secondary">
                No pending requests
              </Typography>
            ) : (
              adminRequests.map((req) => (
                <AdminRequestCard key={req.id} req={req} />
              ))
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Back Button Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 3,
        }}
      >
        <Link href="/client/admin/adminHome" passHref>
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
