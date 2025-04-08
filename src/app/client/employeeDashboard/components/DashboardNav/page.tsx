"use client";

import React from "react";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";

export default function DashBoardNav() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="primary" variant="outlined">
            Admin
          </Button>
          <Button color="primary" variant="outlined">
            Trainer
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
