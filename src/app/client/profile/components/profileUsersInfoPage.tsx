"use client";
import { useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";
import { AuthAppContext } from "@/context/context";
import { ProfileType } from "@/app/types/page";
import axios from "axios";

export default function ProfileUsersInfoPage() {
  const { userState } = AuthAppContext();
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const [btn, setBtn] = useState(true);

  const router = useRouter();

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

  const handleCheckInBtn = async () => {
    const data = {
      userPlanId: profileData?.userId,
      checkin: new Date().toISOString(),
      weight: 0,
      updateWeighIn: 0,
      workoutReview: "",
      checkout: new Date().toISOString(),
    };
    console.log("Check-in button clicked", data);
    try {
      const res = await axios.post("/api/workouts/workoutPlan", data);
      setBtn(false);
      console.log("Response", profileData);
      console.log("Check-in successful", res.data);
    } catch (error) {
      console.error("Not working ", error);
    }
  };

  const handleCheckOutBtn = async () => {
    console.log("Check-out button clicked");

    const data = {
      userPlanId: profileData?.userId,
      checkout: new Date().toISOString(),
    };
    console.log("Check-out button clicked", data);
    try {
      const res = await axios.patch("/api/workouts/updateWorkoutPlan", data);
      console.log("Check-out successful", res.data);
      setBtn(true);
    } catch (error) {
      console.error("Not working ", error);
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: "900px",
        mx: "auto",
        mt: 6,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/path/to/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          p: 6,
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
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ zIndex: 1, position: "relative", mb: 2 }}
        >
          Welcome to Gold Gym
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ zIndex: 1, position: "relative", opacity: 0.9 }}
        >
          Your fitness journey starts here. Let’s get stronger together.
        </Typography>
      </Box>

      {/* Main Profile Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#333" }}>
          Gym Member Profile
        </Typography>
        {btn ? (
          <Button
            onClick={handleCheckInBtn}
            variant="contained"
            color="primary"
          >
            Check In
          </Button>
        ) : (
          <Button
            onClick={handleCheckOutBtn}
            variant="contained"
            color="warning"
          >
            Check Out
          </Button>
        )}
      </Box>

      <Divider sx={{ mb: 3, borderColor: "#ddd" }} />

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <List>
            {profileData ? (
              [
                {
                  icon: <PersonIcon color="primary" />,
                  label: "User Name",
                  value: userState.user.username,
                },
                {
                  icon: <PersonIcon color="primary" />,
                  label: "First Name",
                  value: profileData.firstName,
                },
                {
                  icon: <PersonIcon color="primary" />,
                  label: "Last Name",
                  value: profileData?.lastName,
                },
                {
                  icon: <HomeIcon color="primary" />,
                  label: "Home Club",
                  value: profileData?.homeClub,
                },
                {
                  icon: <CalendarTodayIcon color="primary" />,
                  label: "Member Since",
                  value: profileData?.memberSince,
                },
                {
                  icon: <PersonIcon color="primary" />,
                  label: "Current Status",
                  value: profileData?.currentStatus,
                },
              ].map(({ icon, label, value }, index) => (
                <ListItem key={index} sx={{ py: 1.5 }}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    primary={label}
                    secondary={value || "Not available"}
                    primaryTypographyProps={{ fontWeight: "bold" }}
                    secondaryTypographyProps={{ color: "textSecondary" }}
                  />
                </ListItem>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                Loading profile data...
              </Typography>
            )}
          </List>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <List>
            {[
              {
                icon: <EmailIcon color="primary" />,
                label: "E-mail",
                value: userState.user.email,
              },
              {
                icon: <PhoneIcon color="primary" />,
                label: "Cell Phone",
                value: profileData?.cellPhone,
              },
              {
                icon: <LocationCityIcon color="primary" />,
                label: "City",
                value: profileData?.city,
              },
              {
                icon: <LocationCityIcon color="primary" />,
                label: "State",
                value: profileData?.state,
              },
              {
                icon: <LocationCityIcon color="primary" />,
                label: "Zip/Postals",
                value: profileData?.zipCode,
              },
            ].map(({ icon, label, value }, index) => (
              <ListItem key={index} sx={{ py: 1.5 }}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  primary={label}
                  secondary={value || "Not available"}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                  secondaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Button
          onClick={() => router.push("/client/profileUpdateForm")}
          startIcon={<EditIcon />}
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "uppercase",
            px: 4,
            py: 1.5,
          }}
        >
          Update Profile
        </Button>
        <Button
          onClick={() => router.push("/client/workouts")}
          startIcon={<EditIcon />}
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "uppercase",
            px: 4,
            py: 1.5,
          }}
        >
          Workouts
        </Button>
      </Box>
    </Box>
  );
}
