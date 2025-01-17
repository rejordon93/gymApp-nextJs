"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProfileType } from "@/app/types/page";
import { useContext } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
import {
  Edit,
  Person,
  Email,
  Phone,
  Home,
  LocationCity,
  CalendarToday,
} from "@mui/icons-material";

import { AuthAppContext } from "@/context/context";
import { VisitsContext } from "@/context/context";
import { ActionType } from "@/context/visitsReducer";

export default function ProfilePage() {
  const context = useContext(VisitsContext)!;

  const { userState } = AuthAppContext();
  const { visitState, visitDispatch } = context;

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
      userId: profileData?.userId,
      checkin: new Date().toISOString(),
      checkOut: null,
      weight: 0,
      updateWeighIn: 0,
      workoutReview: "Passing Data",
    };
    try {
      const res = await axios.post("/api/visits/usersVisits", data);
      visitDispatch({ type: ActionType.SET_VISIT, payload: res.data });
      console.log("Visit updated successfully:", res.data);
      setBtn(false);
    } catch (error) {
      if (error instanceof Error) {
        visitDispatch({ type: ActionType.SET_ERROR, payload: error.message });
        // Show the error toast notification
        Toastify({
          text: "ERROR: Missing profile data. Please update your profile.",
          duration: 3000,
          gravity: "top", // Position: "top" or "bottom"
          position: "right", // Align: "left", "center" or "right"
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)", // Custom styling
        }).showToast();
      }
    }
  };
  // console.log(visitState.visit.data.checkout);
  const handleCheckOutBtn = async () => {
    const data = {
      userId: visitState.visit.data.userId,
      checkin: visitState.visit.data.checkin,
      checkout: new Date().toISOString(),
    };
    console.log(data);
    try {
      const res = await axios.patch("/api/visits/updateUsersVisits", data);
      visitDispatch({ type: ActionType.SET_VISIT, payload: res.data });
      console.log("Visit updated successfully:", res.data);
      setBtn(true);
    } catch (error) {
      if (error instanceof Error) {
        visitDispatch({ type: ActionType.SET_ERROR, payload: error.message });
      }
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
            {[
              {
                icon: <Person color="primary" />,
                label: "User Name",
                value: userState.user.username,
              },
              {
                icon: <Person color="primary" />,
                label: "First Name",
                value: profileData?.firstName || "Not available",
              },
              {
                icon: <Person color="primary" />,
                label: "Last Name",
                value: profileData?.lastName,
              },
              {
                icon: <Home color="primary" />,
                label: "Home Club",
                value: profileData?.homeClub,
              },
              {
                icon: <CalendarToday color="primary" />,
                label: "Member Since",
                value: profileData?.memberSince,
              },
              {
                icon: <Person color="primary" />,
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
            ))}
          </List>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <List>
            {[
              {
                icon: <Email color="primary" />,
                label: "E-mail",
                value: userState.user.email,
              },
              {
                icon: <Phone color="primary" />,
                label: "Cell Phone",
                value: profileData?.cellPhone,
              },
              {
                icon: <LocationCity color="primary" />,
                label: "City",
                value: profileData?.city,
              },
              {
                icon: <LocationCity color="primary" />,
                label: "State",
                value: profileData?.state,
              },
              {
                icon: <LocationCity color="primary" />,
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
          onClick={() => router.push("http://127.0.0.1:3000/")}
          startIcon={<Edit />}
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
          Back
        </Button>
        <Button
          onClick={() => router.push("/client/profileUpdateForm")}
          startIcon={<Edit />}
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
      </Box>
    </Box>
  );
}
