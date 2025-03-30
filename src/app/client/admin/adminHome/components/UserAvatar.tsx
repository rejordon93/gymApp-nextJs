import React from "react";
import { Box } from "@mui/material";

type UserAvatarProps = {
  username: string;
};

const UserAvatar = ({ username }: UserAvatarProps) => {
  return (
    <Box
      sx={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
        textTransform: "uppercase",
      }}
    >
      {username.charAt(0).toUpperCase()}
    </Box>
  );
};

export default UserAvatar;
