"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Typography,
  CircularProgress,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material"; // Added Snackbar and Alert
import CloseIcon from "@mui/icons-material/Close";
import { AuthAppContext } from "@/context/context";
import { ActionType } from "@/context/authReducer";

export default function LogoutPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const { userDispatch } = AuthAppContext();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<
    "success" | "error"
  >("success");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.delete("/api/users/logout");
      userDispatch({ type: ActionType.SET_LOADING, payload: false });
      userDispatch({ type: ActionType.SET_USER, payload: res.data.token });
      setSnackbarSeverity("success");
      setSnackbarMessage("Logged out successfully");
      setOpenSnackbar(true);

      router.push("/client/login");
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Logout failed. Please try again.");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        pt: 8,
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          maxWidth: 500,
          margin: "0 auto",
          flexGrow: 0,
          transform: "translateY(25%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            padding: 6,
            borderRadius: 3,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
            backgroundColor: "white",
            border: "1px solid #dddfe2",
            textAlign: "center",
          }}
        >
          {/* Close Button */}
          <IconButton
            component={Link}
            href="/client/profile"
            sx={{
              position: "absolute",
              right: 24,
              top: 24,
              color: "#606770",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
            }}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>

          {/* Content */}
          <Box sx={{ pt: 4, px: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#606770",
                mb: 4,
                lineHeight: 1.5,
                fontSize: "1.25rem",
              }}
            >
              Are you sure you want to log out?
            </Typography>

            <Button
              onClick={logout}
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: "#1877f2",
                color: "white",
                borderRadius: 2,
                py: 2.5,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                "&:hover": {
                  bgcolor: "#166fe5",
                },
                "&:disabled": {
                  bgcolor: "#e4e6eb",
                  color: "#bcc0c4",
                },
                height: "56px",
              }}
            >
              {loading ? (
                <CircularProgress size={28} color="inherit" />
              ) : (
                "Log Out"
              )}
            </Button>

            <Button
              component={Link}
              href="/client/profile"
              fullWidth
              sx={{
                mt: 3,
                color: "#1877f2",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                height: "48px",
                "&:hover": {
                  backgroundColor: "rgba(24, 119, 242, 0.05)",
                },
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>

      {/* MUI Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant="filled"
          sx={{
            width: "100%",
            alignItems: "center",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
