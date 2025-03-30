import React from "react";
import { Box, Typography } from "@mui/material";

type ProfileInfoProps = {
  userProfile: {
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    zipCode: string;
    homeClub: string;
    currentStatus: string;
    cellPhone: string;
  };
};

const ProfileInfo = ({ userProfile }: ProfileInfoProps) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" fontWeight={600}>
        {userProfile.firstName} {userProfile.lastName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {userProfile.city}, {userProfile.state} {userProfile.zipCode}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Home Club: {userProfile.homeClub}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Status: {userProfile.currentStatus}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Phone: {userProfile.cellPhone}
      </Typography>
    </Box>
  );
};

export default ProfileInfo;
