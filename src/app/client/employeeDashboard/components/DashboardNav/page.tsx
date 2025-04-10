"use client";

import React from "react";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function DashBoardNav() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="/clinet/admin">
            <Button color="primary" variant="outlined">
              Admin
            </Button>
          </Link>
          <Button color="primary" variant="outlined">
            Trainer
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
