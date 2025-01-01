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

        // Get the current time dynamically
        const initialTime = new Date(); // Use current date and time

        // Get the start of the current week (Sunday at midnight)
        const startOfWeek = new Date(initialTime);
        startOfWeek.setDate(initialTime.getDate() - initialTime.getDay()); // Set to Sunday
        startOfWeek.setHours(0, 0, 0, 0); // Set time to midnight

        // Calculate the end of the week (next Sunday at midnight)
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 7); // End of the week (next Sunday at midnight)

        // Loop through the visits data and accumulate the durations
        data.visits.forEach((visit) => {
          const dateStr = visit.checkin;

          // Parse the date correctly
          const parsedDate = new Date(dateStr.replace(" at", ",")); // Replace ' at' with ',' to make it parseable
          const dayOfWeekNumber = parsedDate.getDay(); // Get the day of the week (0-6)
          const visitDurationStr = visit.visitDuration; // e.g., '1h 0m'

          // Extract hours and minutes from visitDuration
          const match = visitDurationStr.match(/(\d+)h (\d+)m/);
          if (match) {
            const hours = parseInt(match[1]);
            const minutes = parseInt(match[2]);
            const totalMinutes = hours * 60 + minutes;

            tempData[dayOfWeekNumber] += totalMinutes; // Add the total minutes for the day
            console.log(
              `Adding ${totalMinutes} minutes to ${daysOfTheWeek[dayOfWeekNumber]}:`,
              tempData
            );
          } else {
            console.log("Could not parse visitDuration:", visitDurationStr);
          }
        });

        // Ensure the data does not exceed the current week boundary (Sunday midnight)
        const maxTimeForWeek = endOfWeek.getTime(); // Get the end of the week time
        const currentTotalTime = tempData.reduce(
          (acc, minutes) => acc + minutes,
          0
        ); // Total minutes for the week

        if (currentTotalTime > maxTimeForWeek) {
          // If total time exceeds the week's limit, cap it to the maxTimeForWeek
          console.log("Total visit time exceeds the week, adjusting...");
          tempData.fill(0); // Reset the data
        }

        setUData(tempData); // Update state with the accumulated data
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
          series={[{ data: uData, label: "Duration (mins)", type: "bar" }]} // Bar series with data in minutes
          width={800} // Increase the width of the BarChart
          height={400} // Adjust height if necessary
        />
      </Box>
    </Paper>
  );
};
