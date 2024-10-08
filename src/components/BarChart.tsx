import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Paper } from "@mui/material";
import axios from "axios";

// Define the structure of a workout object
interface Workout {
  id: number;
  checkin: string;
  duration: number | null;
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DayTrackerComponent = () => {
  const [uData, setUData] = useState<number[]>([]); // Initialize with zeros for 7 days

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("/api/workouts/create");

        const workouts: Workout[] = response.data;

        // Filter workouts where duration is not 0
        const filteredWorkouts = workouts.filter(
          (workout) => workout.duration !== 0
        );

        // Create an array of durations and check-in days, filtering out duplicates
        const durationMap: number[] = filteredWorkouts.map((workout) => {
          // Extract check-in date and convert it to a comparable format (YYYY-MM-DD)
          const checkinDate = new Date(workout.checkin)
            .toISOString()
            .split("T")[0];
          console.log(checkinDate);

          // Return the workout duration
          return workout.duration as number;
        });
        console.log("Duration Map:", durationMap);

        // Assuming setUData expects an array of numbers (durations)
        setUData(durationMap);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

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
