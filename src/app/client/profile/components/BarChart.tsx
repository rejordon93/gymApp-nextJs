"use client";
import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Paper, Box } from "@mui/material";
import axios from "axios";

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const DayTrackerComponent = () => {
  const [uData, setUData] = useState(Array(7).fill(0)); // Store duration data for each day
  const [checkout, setCheckOut] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/workouts/workoutPlan");
        const checkouts = response.data.checkouts;
        setCheckOut(checkouts);

        // Here you would map checkouts to uData, e.g., counting workouts per day
        const newUData = Array(7).fill(0);
        checkouts.forEach((checkout) => {
          const checkIn = new Date(checkout.checkin.replace(" at ", ", "));
          const checkOut = new Date(checkout.checkout.replace(" at ", ", "));
          const dayIndex = checkIn.getDay();

          const duration = (checkOut - checkIn) / (1000 * 60 * 60); // Convert milliseconds to hours
          newUData[dayIndex] += duration; // Accumulate workout hours for the corresponding day
        });

        setUData(newUData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    getData();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <Paper>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={2}
        flexWrap="wrap"
        width="100%" // Full width for the parent container
      >
        <BarChart
          xAxis={[{ scaleType: "band", data: daysOfTheWeek }]} // Categorical x-axis for days
          series={[{ data: uData, label: "Duration (hrs)", type: "bar" }]} // Bar series with data
          width={800} // Increase the width of the BarChart
          height={400} // Adjust height if necessary
        />
      </Box>
    </Paper>
  );
};
