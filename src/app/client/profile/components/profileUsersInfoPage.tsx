"use client";
// import { useState } from "react";
// import { WorkoutDataProps } from "@/app/types/page";
import {
  Box,
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function ProfileUsersInfoPage() {
  // const [data] = useState<WorkoutDataProps[]>([]);

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#f4f6f8",
        borderRadius: 2,
        mb: 4,
        boxShadow: 3,
        maxWidth: "900px",
        mx: "auto",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/path/to/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          p: 4,
          mb: 4,
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        <Typography variant="h4" fontWeight="bold" sx={{ zIndex: 1 }}>
          Welcome to Gold Gym
        </Typography>
      </Box>

      {/* Main Profile Section */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Gym Member Profile
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <List
            sx={{
              "& .MuiListItem-root": {
                py: 1,
                color: "#555",
                fontSize: "1rem",
              },
            }}
          >
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="First Name" secondary="Ethan" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Last Name" secondary="Jordon" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Home Club" secondary="Seattle" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CalendarTodayIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Member Since" secondary="09/7/23" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Current Status" secondary="Active" />
            </ListItem>
          </List>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <List
            sx={{
              "& .MuiListItem-root": {
                py: 1,
                color: "#555",
                fontSize: "1rem",
              },
            }}
          >
            <ListItem>
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="E-mail" secondary="react1@gmail.com" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Cell Phone" secondary="222-222-222" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationCityIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="City" secondary="Bellevue" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationCityIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="State" secondary="WA" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationCityIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Zip/Postal" secondary="98003" />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Button
        startIcon={<EditIcon />}
        variant="contained"
        color="primary"
        sx={{
          mt: 3,
          fontWeight: "bold",
          fontSize: "1rem",
          textTransform: "uppercase",
        }}
      >
        Update Profile
      </Button>
    </Box>
  );
}
