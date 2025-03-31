"use client";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material";

interface TrainerLoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  isButtonDisabled: boolean;
  isLoading: boolean;
  onTrainerLogin: () => void;
  handleRequest: () => void;
}

export default function TrainerLoginForm({
  email,
  password,
  setEmail,
  setPassword,
  isButtonDisabled,
  isLoading,
  onTrainerLogin,
  handleRequest,
}: TrainerLoginFormProps) {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        boxShadow: 3,
        borderRadius: 4,
        backgroundColor: "background.paper",
        backgroundImage: "linear-gradient(to bottom right, #f5f5f5, #ffffff)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-2px)" },
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 700,
          background: "linear-gradient(45deg, #1976d2 30%, #2196f3 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Trainer Login
      </Typography>
      <Divider sx={{ width: "100%", mb: 3, borderColor: "divider" }} />

      <Box component="form" noValidate sx={{ width: "100%" }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onTrainerLogin}
          disabled={isButtonDisabled || isLoading}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>

        <Button onClick={handleRequest}>Request Trainer Access</Button>
      </Box>
    </Box>
  );
}
