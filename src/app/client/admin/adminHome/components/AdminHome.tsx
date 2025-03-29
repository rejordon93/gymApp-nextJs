"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserAdminContext } from "@/context/context";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
} from "@mui/material";
import AdminRequestCard from "./AdminRequestCard";
import UserCard from "./UserCard"; // Import the component
import Link from "next/link";
type dataProps = {
  id: number;
  username: string;
  email: string;
  isOnline: boolean;
  createdAt: string;
};

export default function AdminHome() {
  const [adminRequests, setAdminRequests] = useState<dataProps[]>([]);
  const [userData, setUserData] = useState<dataProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { adminState, adminDispatch } = UserAdminContext();

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
              adminRequests.map((req) => (
                <AdminRequestCard key={req.id} req={req} />
              ))
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
              filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} />
              ))
            )}
          </Grid>
        </Grid>
        <Link href="/client/admin/registerNewUsers">Add New User</Link>
      </Paper>
    </Container>
  );
}
