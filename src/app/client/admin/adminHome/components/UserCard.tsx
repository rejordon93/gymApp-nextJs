"use client";
import React, { useEffect, useState } from "react";
import { Card, Divider, Button } from "@mui/material";
import axios from "axios";
import UserAvatar from "./UserAvatar";
import ProfileInfo from "./ProfileInfo";
import ProfileUpdateDialog from "./ProfileUpdateDialog";
import { ProfileProps } from "@/app/types/page";
import { UserCardProps } from "@/app/types/page";

const UserCard = ({ user }: UserCardProps) => {
  const [profileData, setProfileData] = useState<ProfileProps[]>([]);
  const [open, setOpen] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState<ProfileProps | null>(
    null
  );

  const getProfileData = async () => {
    try {
      const res = await axios.get("/api/profile/get");
      setProfileData(res.data);
    } catch (error) {
      console.error("Error Getting Data", error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const userProfile = profileData.find((profile) => profile.userId === user.id);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!updatedProfile) return;
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async () => {
    try {
      const res = await axios.patch("/api/profile/patch", {
        firstName: updatedProfile?.firstName,
        lastName: updatedProfile?.lastName,
        homeClub: updatedProfile?.homeClub,
        memberSince: updatedProfile?.memberSince,
        currentStatus: updatedProfile?.currentStatus,
        cellPhone: updatedProfile?.cellPhone,
        city: updatedProfile?.city,
        state: updatedProfile?.state,
        zipCode: updatedProfile?.zipCode,
      });

      console.log(res.data);

      // Refresh the profile data after update
      await getProfileData();
      setOpen(false);
      setUpdatedProfile(null);
    } catch (error) {
      console.error("Error, send Data", error);
    }
  };

  return (
    <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
      <UserAvatar username={user.username} />
      <div>
        <h6>{user.username}</h6>
        <p>{user.email}</p>
        <p>{user.isOnline ? "Online" : "Offline"}</p>
        <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>

      {userProfile && (
        <>
          <Divider sx={{ my: 2 }} />
          <ProfileInfo userProfile={userProfile} />
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            onClick={() => {
              setUpdatedProfile(userProfile);
              setOpen(true);
            }}
          >
            Update Profile
          </Button>
        </>
      )}

      <ProfileUpdateDialog
        open={open}
        setOpen={setOpen}
        updatedProfile={updatedProfile}
        setUpdatedProfile={setUpdatedProfile}
        handleChange={handleChange}
        handleUpdateProfile={handleUpdateProfile}
      />
    </Card>
  );
};

export default UserCard;
