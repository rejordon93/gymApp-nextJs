"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import BarChart from "@/components/BarChart";
import { redirect } from "next/navigation";

type WorkoutDataProps = {
  calories: number;
  duration: number;
  repetitions: number;
  equipment: string;
  checkin: string;
  weightLifted: number;
  distance: number;
  id: number;
};

export default function GymVisitsPage() {
  const [data, setData] = useState<WorkoutDataProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleCheckinBtn = () => {
    setLoading(true);
    setIsCheckedIn(true);
    axios
      .post(
        "/api/workouts/create",
        {
          checkin: new Date().toISOString(),
          equipment: "",
          duration: 0,
          calories: 0,
          weightLifted: 0,
          distance: 0,
          repetitions: 0,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("API Response:", response.data);
        const { workout } = response.data as {
          message: string;
          workout: WorkoutDataProps;
        };
        setData((prevData) => [...prevData, workout]);
      })
      .catch((error) => {
        console.error(
          "Error fetching data",
          error.response?.data || error.message
        );
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // For checking out and updating a specific workout
  const handleCheckOutBtn = async (workoutId: number) => {
    setLoading(true);
    setError(null); // Reset any previous errors

    try {
      const checkoutTime = new Date(); // Checkout time as a Date object
      const workout = data.find((w) => w.id === workoutId);
      if (!workout) throw new Error("Workout not found");

      // Calculate the duration in seconds
      const duration =
        (checkoutTime.getTime() - new Date(workout.checkin).getTime()) / 1000;

      // Send a PATCH request to update the workout's duration and checkout time
      const response = await axios.patch("/api/workouts/create", {
        id: workout.id,
        duration: duration,
        checkin: workout.checkin,
        checkout: checkoutTime.toISOString(),
      });

      // Update the correct workout's duration in the state
      setData((prevState) =>
        prevState.map(
          (w) => (w.id === workout.id ? { ...w, duration } : w) // Use the new duration value
        )
      );

      console.log("API Response:", response.data);
    } catch (error) {
      console.error(
        "Error checking out workout",
        error.response?.data || error.message
      );
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleWorkoutBtn = () => {
    console.log("Just a Test for rediecting workout");
    redirect("/workout");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <div className="text-blue-500">Loading...</div>;
  if (error)
    return <div className="text-red-500 font-bold">Error: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Gym Visits</h1>
      <BarChart data={data} />
      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
          onClick={handleCheckinBtn}
        >
          Check in
        </button>
        {isCheckedIn && (
          <button
            onClick={handleWorkoutBtn}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
          >
            Add Workouts
          </button>
        )}
      </div>
      <div className="mt-6 space-y-4">
        {data.map((workout) => (
          <div
            key={workout.id}
            className="p-4 bg-gray-100 border border-gray-300 rounded-lg"
          >
            <h3 className="font-semibold">Workout #{workout.id}</h3>
            <p>
              <strong>Check-in:</strong>{" "}
              {new Date(workout.checkin).toLocaleString()}
            </p>
            <p>
              <strong>Equipment:</strong> {workout.equipment || "N/A"}
            </p>
            <p>
              <strong>Duration:</strong> {Math.floor(workout.duration / 60)}{" "}
              mins
            </p>

            <p>
              <strong>Calories:</strong> {workout.calories}
            </p>
            <p>
              <strong>Weight Lifted:</strong> {workout.weightLifted} kg
            </p>
            <p>
              <strong>Distance:</strong> {workout.distance} km
            </p>
            <p>
              <strong>Repetitions:</strong> {workout.repetitions}
            </p>
            {/* Pass workout.id to handleCheckOutBtn */}
            <button
              className="mt-2 px-2 py-1 bg-green-600 text-white rounded"
              onClick={() => handleCheckOutBtn(workout.id)}
            >
              Check out
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
