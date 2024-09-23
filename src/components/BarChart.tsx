import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Paper } from "@mui/material";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const uData = [2, 4, 6, 7, 1, 8, 3];

const DayTrackerComponent = () => {
  return (
    <Paper elevation={3}>
      <BarChart
        xAxis={[{ scaleType: "band", data: days }]}
        series={[{ data: uData, label: "Hours", type: "bar" }]}
        width={500}
        height={400}
      />
    </Paper>
  );
};

export default DayTrackerComponent;
