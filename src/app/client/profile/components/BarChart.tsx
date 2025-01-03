"use client";
import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Paper, Box } from "@mui/material";
import axios from "axios";

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const DayTrackerComponent = () => {
  const [uData, setUData] = useState(Array(7).fill(0)); // Initialize durations for each day

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/visits/getVisits");

        const data = response.data;
        if (!data || !data.visits) {
          console.error("No visits data found in the response.");
          return;
        }

        const tempData = Array(7).fill(0); // Temporary array to store durations

        // Loop through the visits data and accumulate the durations
        data.visits.forEach((visit) => {
          const dateStr = visit.checkin;
          const parsedDate = new Date(dateStr.replace(" at", ",")); // Replace ' at' with ',' to make it parseable
          const dayOfWeekNumber = parsedDate.getDay(); // Get the day of the week (0-6)
          const visitDurationStr = visit.visitDuration; // e.g., '1h 30m'

          // Extract hours and minutes from visitDuration
          const match = visitDurationStr.match(/(\d+)h (\d+)m/);
          if (match) {
            const hours = parseInt(match[1]);
            const minutes = parseInt(match[2]);
            const totalHours = hours + minutes / 60; // Convert minutes to fractional hours

            tempData[dayOfWeekNumber] += totalHours; // Accumulate the total hours for the day
          } else {
            console.log("Could not parse visitDuration:", visitDurationStr);
          }
        });

        // Filter out durations less than 1 hour
        const filteredData = tempData.map((val) => (val >= 1 ? val : 0));

        setUData(filteredData); // Update state with the filtered data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

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
          yAxis={[
            {
              min: 0, // Start y-axis from 0
              max: Math.max(...uData) + 1, // Set max value to the highest duration + 1
              label: "Duration Hours",
            },
          ]}
          series={[
            {
              data: uData.map((val) => parseFloat(val.toFixed(2))), // Ensure values are formatted to 2 decimal places
              label: "Duration (Hours)",
              type: "bar",
            },
          ]}
          width={800} // Increase the width of the BarChart
          height={400} // Adjust height if necessary
        />
      </Box>
    </Paper>
  );
};
