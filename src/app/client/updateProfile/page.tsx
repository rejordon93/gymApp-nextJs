"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { AuthAppContext } from "@/context/context";
import { ActionType } from "@/context/authReducer";

export default function UpdateProfileInfo() {
  const { userState, userDispatch } = AuthAppContext();
  const router = useRouter();
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    userDispatch({
      type: ActionType.SET_USER,
      payload: { ...userState.user, [name]: value },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    try {
      router.push("/client/profile");
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Update Profile Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Home Club"
              name="homeClub"
              placeholder="Enter Home Club"
              value={formData.homeClub}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Member Since"
              name="memberSince"
              placeholder="Enter Member Since"
              value={formData.memberSince}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Current Status"
              name="currentStatus"
              placeholder="Enter Current Status"
              value={formData.currentStatus}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Cell Phone"
              name="cellPhone"
              type="tel"
              placeholder="Enter Cell Phone"
              value={formData.cellPhone}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              name="city"
              placeholder="Enter City"
              value={formData.city}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="State"
              name="state"
              placeholder="Enter State"
              value={formData.state}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Zip Postal"
              name="postalCode"
              placeholder="Enter Zip Postal"
              value={formData.postalCode}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
