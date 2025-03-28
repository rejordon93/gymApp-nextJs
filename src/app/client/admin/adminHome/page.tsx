"use client";
import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Box,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

type dataProps = {
  id: number;
  username: string;
  email: string;
};

export default function AdminHome() {
  const [adminRequests, setAdminRequests] = useState<dataProps[]>([]);
  const [userData, setUserData] = useState<dataProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch admin requests (users who requested admin access)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/admin/getRequest");
        setAdminRequests(res.data);
      } catch (error) {
        console.error("Error fetching admin requests:", error);
      }
    };
    getData();
  }, []);

  // Fetch all users
  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await axios.get("/api/users/getUser");
        console.log(res.data); // Debugging: Ensure you see the expected object
        setUserData(res.data.user || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getAllData();
  }, []);

  // Filter users based on search query
  const filteredUsers = userData.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddAdmin = async (userId: number) => {
    try {
      // Logic to add the user as an admin
      await axios.post("/api/admin/approve", {
        userId,
      });
      console.log(`Adding user with ID: ${userId} as admin.`);
      // Make API request to add the user as an admin (add API logic here)
    } catch (error) {
      console.error("Error ", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          sx={{
            mb: 3,
            color: "primary.main",
            textTransform: "uppercase",
          }}
        >
          Admin Dashboard
        </Typography>

        {/* Grid Layout for Admin Requests and Users */}
        <Grid container spacing={4}>
          {/* Admin Requests Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Users Requesting Admin Access:
            </Typography>
            {adminRequests.length === 0 ? (
              <Typography color="text.secondary">
                No pending requests
              </Typography>
            ) : (
              <Grid container spacing={3}>
                {adminRequests.map((req) => (
                  <Grid item xs={12} sm={6} key={req.id}>
                    <Card
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 2,
                        transition: "0.3s",
                        "&:hover": {
                          boxShadow: 4,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" fontWeight={600}>
                          {req.username}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {req.email}
                        </Typography>
                        {/* Add Admin Button */}
                        <Box sx={{ mt: 2 }}>
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => handleAddAdmin(req.id)}
                          >
                            Add Admin
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>

          {/* All Registered Users Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              All Registered Users:
            </Typography>

            {/* Search Bar */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Typography variant="body1" fontWeight={600}>
                Search Users:
              </Typography>
              <TextField
                label="Search User"
                variant="outlined"
                size="small"
                sx={{ width: "250px" }}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Box>

            {filteredUsers.length === 0 ? (
              <Typography color="text.secondary">No users found</Typography>
            ) : (
              <Grid container spacing={3}>
                {filteredUsers.map((user) => (
                  <Grid item xs={12} sm={6} key={user.id}>
                    <Card
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 2,
                        transition: "0.3s",
                        "&:hover": {
                          boxShadow: 4,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" fontWeight={600}>
                          {user.username}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.email}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
