import React, { useState, useEffect } from "react";
import axios from "axios";
import { WorkoutDataProps } from "@/app/types/page";

export default function WorkoutWeekly() {
  const [serverData, setServerData] = useState<WorkoutDataProps[]>([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const getDate = async () => {
      try {
        const response = await axios.get("/api/workouts/create");
        console.log("API2 Response:", response.data); // Log the API response to check the structure

        // Assuming response.data contains an array of workouts
        const workoutData = response.data as WorkoutDataProps[];

        setServerData(workoutData); // This is asynchronous
      } catch (error) {
        console.error("Error fetching workout data:", error);
      }
    };

    getDate();
  }, []);

  // New useEffect to log updated state
  useEffect(() => {
    console.log("Updated serverData:", serverData);
  }, [serverData]); // This will log when serverData is updated

  return (
    <div>
      {serverData.length > 9 && (
        <p>Workout 10 duration: {serverData[1].duration}</p>
      )}

      <p>page</p>
    </div>
  );
}
