import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Paper } from "@mui/material";
import axios from "axios";

// Define the structure of a workout object
interface Workout {
  id: number;
  checkin: string;
  checkout: string;
  duration: number; // Duration in minutes
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DayTrackerComponent = () => {
  const [uData, setUData] = useState<number[]>([1, 2, 3, 4, 5, 6, 0]); // Initialize with zeros for 7 days

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("/api/workouts/getWorkouts");

        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 6);

        response.data.forEach((item: Workout) => {
          const checkinDate = new Date(item.checkin);
          const checkoutDate = new Date(item.checkout);

          // Calculate the duration in hours directly
          const durationTime = checkoutDate.getTime() - checkinDate.getTime();
          const durationInHours =
            durationTime / Math.round(Math.floor(1000 * 60 * 60)); // Convert to hours

          // Check if checkinDate is within the last week
          if (checkinDate >= sevenDaysAgo && checkinDate <= today) {
            console.log(`Check-in Date: ${item.checkin}`);
            console.log(`Duration: ${durationInHours}`);
          }
        });
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []); // Dependency array ensures effect runs once

  return (
    <Paper elevation={3}>
      <BarChart
        xAxis={[{ scaleType: "band", data: days }]}
        series={[{ data: uData, label: "Hours", type: "bar" }]}
        width={500}
        height={300}
      />
    </Paper>
  );
};

export default DayTrackerComponent;
