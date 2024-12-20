"use client";
import { useEffect } from "react";
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
import { ActionType } from "@/context/authReducer";

export default function ProfileUsersInfoPage() {
  const { userState, userDispatch } = AuthAppContext();
  const router = useRouter();

  useEffect(() => {
    console.log(userState.user.username, userState.user.email);
  }, [userState.user.username, userState.user.email]);

  const updateProfile = () => {
    if (!userState || !userState.user) {
      throw new Error("User not found");
    } else {
      const updatedUser = {
        username: userState.user.username,
        email: userState.user.email,
        firstName: userState.user.firstName,
        lastName: userState.user.lastName,
        homeClub: userState.user.homeClub,
        memberSince: userState.user.memberSince,
        currentStatus: userState.user.currentStatus,
        cellPhone: userState.user.cellPhone,
        city: userState.user.city,
        state: userState.user.state,
        postalCode: userState.user.postalCode,
      };
      userDispatch({ type: ActionType.SET_USER, payload: updatedUser });
    }
  };
  updateProfile();

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
          variant="h4"
          fontWeight="bold"
          sx={{ zIndex: 1, position: "relative" }}
        >
          Welcome to Gold Gym
        </Typography>
      </Box>

      {/* Main Profile Section */}
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#333" }}
      >
        Gym Member Profile
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <List
            sx={{
              "& .MuiListItem-root": {
                py: 1.5,
                color: "#555",
              },
            }}
          >
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="User Name"
                secondary={userState.user.username}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="First Name"
                secondary={userState.user.firstName}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Last Name"
                secondary={userState.user.lastName}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Home Club"
                secondary={userState.user.homeClub}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CalendarTodayIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Member Since"
                secondary={userState.user.memberSince}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Current Status"
                secondary={userState.user.currentStatus}
              />
            </ListItem>
          </List>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <List
            sx={{
              "& .MuiListItem-root": {
                py: 1.5,
                color: "#555",
              },
            }}
          >
            <ListItem>
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="E-mail" secondary={userState.user.email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Cell Phone"
                secondary={userState.user.cellPhone}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationCityIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="City" secondary={userState.user.city} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationCityIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="State" secondary={userState.user.state} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationCityIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Zip/Postals"
                secondary={userState.user.postalCode}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Button
        onClick={() => router.push("/client/updateProfile")}
        startIcon={<EditIcon />}
        variant="contained"
        color="primary"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontSize: "1rem",
          textTransform: "uppercase",
          px: 4,
          py: 1.5,
        }}
      >
        Add Info
      </Button>
    </Box>
  );
}
