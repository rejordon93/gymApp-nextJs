"use client";

import React, { useState } from "react";
import BarChart from "@/components/BarChart";
import { WorkoutDataProps } from "../../../types/page";
import { Box } from "@mui/material";

export const ProfileBarChart = () => {
  const [data] = useState<WorkoutDataProps[]>([]);

  return (
    <Box sx={{ mb: 4, p: 2, bgcolor: "background.paper", borderRadius: 1 }}>
      <BarChart data={data} />
    </Box>
  );
};
