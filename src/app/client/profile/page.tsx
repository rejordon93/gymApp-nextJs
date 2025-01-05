import { Paper, Container } from "@mui/material";
import { DayTracker } from "./components/BarChart";
import ProfilePage from "./components/ProfilePage";

export default function GymProgressPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <DayTracker />
        <ProfilePage />
      </Paper>
    </Container>
  );
}
