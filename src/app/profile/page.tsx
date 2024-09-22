"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import BarChart from "@/components/BarChart";

type WorkoutDataProps = {
  label: string; // This will be the workout's equipment or checkin date
  calories: number;
  duration: number; // You can add other fields if needed
};

export default function GymVisitsPage() {
  const [data, setData] = useState<WorkoutDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/api/users/profile", { withCredentials: true }) // Ensure cookies are sent
      .then((response) => {
        const workouts = response.data.workouts.map((workout: any) => ({
          label: `${workout.equipment} on ${new Date(
            workout.checkin
          ).toLocaleDateString()}`, // Use equipment and date as label
          calories: workout.calories || 0,
          duration: workout.duration || 0, // If you want to include duration
          repetitions: workout.repetitions || 0,
        }));

        setData(workouts);
        console.log("User workouts", workouts);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Gym Visits</h1>
      <BarChart data={data} />
    </div>
  );
}
