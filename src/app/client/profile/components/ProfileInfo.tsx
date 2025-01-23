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
    <div>
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
    </div>
  );
}
