"use client";
import { useState, useEffect } from "react";
import { ProfileType } from "@/app/types/page";
import axios from "axios";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import {
  Person,
  Email,
  Phone,
  Home,
  LocationCity,
  CalendarToday,
} from "@mui/icons-material";
import { AuthAppContext } from "@/context/context";

export default function ProfileInfo() {
  const { userState } = AuthAppContext();
  const [profileData, setProfileData] = useState<ProfileType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/profile/get");
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "900px", // Limit width for better readability
        mx: "auto", // Center horizontally
        my: 4, // Vertical margin
        p: { xs: 2, sm: 4 }, // Responsive padding
        // backgroundColor: "rgba(255, 255, 255, 0.95)", // Subtle white background
        borderRadius: "16px", // Rounded corners
        // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)", // Slight shadow increase on hover
        },
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#333",
          mb: 3,
        }}
      >
        Profile Information
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Left Column */}
        <Grid item xs={12} sm={6}>
          <List>
            {[
              {
                icon: <Person color="primary" sx={{ fontSize: 28 }} />,
                label: "User Name",
                value: userState.user.username,
              },
              {
                icon: <Person color="primary" sx={{ fontSize: 28 }} />,
                label: "First Name",
                value: profileData?.firstName || "Not available",
              },
              {
                icon: <Person color="primary" sx={{ fontSize: 28 }} />,
                label: "Last Name",
                value: profileData?.lastName || "Not available",
              },
              {
                icon: <Home color="primary" sx={{ fontSize: 28 }} />,
                label: "Home Club",
                value: profileData?.homeClub || "Not available",
              },
              {
                icon: <CalendarToday color="primary" sx={{ fontSize: 28 }} />,
                label: "Member Since",
                value: profileData?.memberSince || "Not available",
              },
              {
                icon: <Person color="primary" sx={{ fontSize: 28 }} />,
                label: "Current Status",
                value: profileData?.currentStatus || "Not available",
              },
            ].map(({ icon, label, value }, index) => (
              <ListItem
                key={index}
                sx={{
                  py: 1.5,
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Subtle divider
                  "&:last-child": { borderBottom: "none" }, // No border on last item
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>
                <ListItemText
                  primary={label}
                  secondary={value}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#444",
                  }}
                  secondaryTypographyProps={{
                    color: "textSecondary",
                    fontSize: "1rem",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} sm={6}>
          <List>
            {[
              {
                icon: <Email color="primary" sx={{ fontSize: 28 }} />,
                label: "E-mail",
                value: userState.user.email,
              },
              {
                icon: <Phone color="primary" sx={{ fontSize: 28 }} />,
                label: "Cell Phone",
                value: profileData?.cellPhone || "Not available",
              },
              {
                icon: <LocationCity color="primary" sx={{ fontSize: 28 }} />,
                label: "City",
                value: profileData?.city || "Not available",
              },
              {
                icon: <LocationCity color="primary" sx={{ fontSize: 28 }} />,
                label: "State",
                value: profileData?.state || "Not available",
              },
              {
                icon: <LocationCity color="primary" sx={{ fontSize: 28 }} />,
                label: "Zip/Postal",
                value: profileData?.zipCode || "Not available",
              },
            ].map(({ icon, label, value }, index) => (
              <ListItem
                key={index}
                sx={{
                  py: 1.5,
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Subtle divider
                  "&:last-child": { borderBottom: "none" }, // No border on last item
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>
                <ListItemText
                  primary={label}
                  secondary={value}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#444",
                  }}
                  secondaryTypographyProps={{
                    color: "textSecondary",
                    fontSize: "1rem",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
