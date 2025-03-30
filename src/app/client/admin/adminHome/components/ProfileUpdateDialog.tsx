import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { ProfileProps } from "./UserCard";

type ProfileUpdateDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  updatedProfile: ProfileProps | null;
  setUpdatedProfile: (profile: ProfileProps | null) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateProfile: () => void;
};

const ProfileUpdateDialog = ({
  open,
  setOpen,
  updatedProfile,
  handleChange,
  handleUpdateProfile,
}: ProfileUpdateDialogProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
      <DialogTitle>Update Profile</DialogTitle>
      <DialogContent>
        {updatedProfile && (
          <>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={updatedProfile.firstName || ""}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={updatedProfile.lastName || ""}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="City"
              name="city"
              value={updatedProfile.city || ""}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="State"
              name="state"
              value={updatedProfile.state || ""}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Zip Code"
              name="zipCode"
              value={updatedProfile.zipCode || ""}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Home Club"
              name="homeClub"
              value={updatedProfile.homeClub || ""}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Current Status"
              name="currentStatus"
              value={updatedProfile.currentStatus || ""}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Cell Phone"
              name="cellPhone"
              value={updatedProfile.cellPhone || ""}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleUpdateProfile}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileUpdateDialog;
