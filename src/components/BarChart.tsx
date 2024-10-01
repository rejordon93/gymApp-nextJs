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

        const workouts: Workout[] = response.data; // Annotate response data with the Workout type

        const durationMap: number[] = [];

        workouts.filter((workout) => workout.duration !== null); // the databases has a lot off nulls for not remove them
        workouts.map((workout: Workout) => {
          const checkinData = new Date(workout.checkin);
          const dayIndex = checkinData.getDay();

          if (dayIndex > 0) {
            durationMap[dayIndex - 1] = workout.duration || 0 / 60;
          }
        });
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
