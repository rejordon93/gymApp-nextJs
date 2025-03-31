import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
} from "@mui/material";
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
  const [userData, setUserData] = useState<dataProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      <Paper
        elevation={6}
        sx={{ p: 4, borderRadius: 3, backgroundColor: "#f5f5f5" }}
      >
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

        {/* All Registered Users Section */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Search Bar Centered */}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
              Search Users:
            </Typography>
            <TextField
              label="Search User"
              variant="outlined"
              size="small"
              sx={{ width: "300px", mb: 3 }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>

          {/* Users Grid (3 users per row) */}
          <Grid item xs={12}>
            <Grid container spacing={4}>
              {filteredUsers.length === 0 ? (
                <Typography
                  color="text.secondary"
                  sx={{ width: "100%", textAlign: "center" }}
                >
                  No users found
                </Typography>
              ) : (
                filteredUsers.map((user) => (
                  <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <UserCard user={user} />
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Buttons in Row */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
          <Link href="/client/admin/adminRequesting" passHref>
            <Button variant="contained" color="primary" sx={{ flex: 1, mx: 1 }}>
              View Requests
            </Button>
          </Link>
          <Link href="/client/admin/registerNewUsers" passHref>
            <Button
              variant="contained"
              color="secondary"
              sx={{ flex: 1, mx: 1 }}
            >
              Add New User
            </Button>
          </Link>
          <Link href="/client/trainer" passHref>
            <Button variant="contained" color="success" sx={{ flex: 1, mx: 1 }}>
              Add Trainer
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
