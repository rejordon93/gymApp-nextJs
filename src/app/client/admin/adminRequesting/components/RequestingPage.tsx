import { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import AdminRequestCard from "../../adminHome/components/AdminRequestCard";
import axios from "axios";
import Link from "next/link";

type DataProps = {
  id: number;
  username: string;
  email: string;
  isOnline: boolean;
  createdAt: string;
  isAdminRequest: boolean;
  isTrainerRequest: boolean;
};

export default function RequestingPage() {
  const [adminRequests, setAdminRequests] = useState<DataProps[]>([]);
  const [trainerRequests, setTrainerRequests] = useState<DataProps[]>([]);

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

  useEffect(() => {
    const getTrainerData = async () => {
      try {
        const res = await axios.get("/api/trainer/getRequest");
        setTrainerRequests(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching trainer requests:", error);
      }
    };
    getTrainerData();
  }, []);

  // Function to handle state updates after approve/reject actions
  const updateRequests = (id: number, type: "admin" | "trainer") => {
    if (type === "admin") {
      setAdminRequests((prevRequests) =>
        prevRequests.filter((req) => req.id !== id)
      );
    } else if (type === "trainer") {
      setTrainerRequests((prevRequests) =>
        prevRequests.filter((req) => req.id !== id)
      );
    }
  };

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
                <AdminRequestCard
                  key={req.id}
                  req={req}
                  updateRequests={updateRequests}
                />
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
            {trainerRequests.length === 0 ? (
              <Typography color="text.secondary">
                No pending requests
              </Typography>
            ) : (
              trainerRequests.map((req) => (
                <AdminRequestCard
                  key={req.id}
                  req={req}
                  updateRequests={updateRequests}
                />
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
