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

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DayTrackerComponent = () => {
  const [uData, setUData] = useState<number[]>(Array(7).fill(0)); // Initialize with zeros for 7 days

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("/api/workouts/getWorkouts");

        const updatedDate = [...uData];

        response.data.forEach((item: Workout) => {
          const checkinDate = new Date(item.checkin);
          const checkoutDate = new Date(item.checkout);
          const todayIndex = checkoutDate.getDay();

          const diff =
            new Date(checkoutDate).getMinutes() -
            new Date(checkinDate).getMinutes();

          updatedDate[todayIndex] += diff;
        });
        setUData(updatedDate);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <Paper>
      <BarChart
        xAxis={[{ scaleType: "band", data: daysOfTheWeek }]}
        series={[{ data: uData, label: "Duration (min)", type: "bar" }]}
        width={500}
        height={300}
      />
    </Paper>
  );
};

export default DayTrackerComponent;
