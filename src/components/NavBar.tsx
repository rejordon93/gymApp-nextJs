"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { AuthAppContext } from "@/context/context";
import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import axios from "axios";
import { ActionType } from "@/context/authReducer";

const publicNavLinks = [
  {
    href: "/client/signup",
    label: "Signup",
  },
  {
    href: "/client/login",
    label: "Login",
  },
];

const privateNavLinks = [
  {
    href: "/client/profile",
    label: "Profile",
  },
  {
    href: "/client/exercises",
    label: "Workouts",
  },
  {
    href: "/client/planner",
    label: "Planner",
  },
  {
    href: "/client/logout",
    label: "Logout",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const { userState, userDispatch } = AuthAppContext();

  // Determine navLinks based on user authentication status
  const navLinks = userState?.user?.token ? privateNavLinks : publicNavLinks;

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "transparent", color: "black", px: 3 }}
    >
      <Toolbar>
        {/* Logo */}
        <IconButton edge="start" color="inherit" component={Link} href="/">
          <FitnessCenterIcon sx={{ fontSize: 35 }} />
        </IconButton>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              component={Link}
              sx={{
                color:
                  pathname === link.href ? "text.primary" : "text.secondary",
                fontWeight: pathname === link.href ? "bold" : "normal",
                textTransform: "capitalize",
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
