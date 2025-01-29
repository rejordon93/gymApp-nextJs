export const cardStyle = (title: string, selectedWorkout: string) => ({
  width: "90%", // Wider card
  maxWidth: "400px", // Ensure a max width to prevent cards from getting too wide
  height: 350, // Keep consistent height
  borderRadius: "16px",
  boxShadow: selectedWorkout === title ? 12 : 6,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Center content vertically
  alignItems: "center",
  textAlign: "center",
  backgroundColor: selectedWorkout === title ? "#e3f2fd" : "#f5f5f5",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  padding: "2rem", // Increased padding for a larger card
  "&:hover": {
    transform: "translateY(-5px)", // Slightly lift the card on hover
    boxShadow: 12,
  },
});
