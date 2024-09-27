"use client";
import axios from "axios";
import { useState } from "react";
import BarChart from "@/components/BarChart";

type WorkoutDataProps = {
  calories: number;
  duration: number;
  repetitions: number;
  equipment: string;
  checkin: string; // String because we're using ISO string
  weightLifted: number;
  distance: number;
  id: number;
};

export default function GymVisitsPage() {
  const [data, setData] = useState<WorkoutDataProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckinBtn = () => {
    setLoading(true);

    axios
      .post(
        "/api/users/profile",
        {
          checkin: new Date().toISOString(), // Use ISO string for checkin
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

        const newWorkout: WorkoutDataProps = {
          equipment: response.data.equipment || "",
          duration: response.data.duration || 0,
          calories: response.data.calories || 0,
          weightLifted: response.data.weightLifted || 0,
          distance: response.data.distance || 0,
          repetitions: response.data.repetitions || 0,
          checkin: response.data.checkin || new Date().toISOString(),
          id: response.data.id,
        };

        setData((prevData) => [...prevData, newWorkout]);
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

  const handleCheckOutBtn = async (workoutId: number) => {
    // Pass workoutId as a parameter
    setLoading(true);
    setError(null); // Reset any previous errors

    try {
      const checkoutTime = new Date().toISOString();

      // Find the workout by ID to get the checkin time
      const workout = data.find((w) => w.id === workoutId);
      if (!workout) throw new Error("Workout not found");

      const checkinTime = new Date(workout.checkin).getTime(); // Convert checkin to milliseconds
      const duration = (new Date(checkoutTime).getTime() - checkinTime) / 1000; // Calculate duration in seconds

      // Send PATCH request to update the checkout time for this specific workout
      const response = await axios.patch("/api/users/profile", {
        id: 1,
        ids: workout.id,
        checkin: workout.checkin, // Use the original checkin time
        checkout: checkoutTime,
        duration: duration,
      });

      console.log("API Response:", response.data);

      // Optionally update the state here if necessary
    } catch (error) {
      console.error(
        "Error checking out workout",
        error.response?.data || error.message
      );
      setError(error.message); // Set error state to display error message
    } finally {
      setLoading(false); // Stop the loading indicator
    }
  };

  if (loading) return <div className="text-blue-500">Loading...</div>;
  if (error)
    return <div className="text-red-500 font-bold">Error: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Gym Visits</h1>
      <BarChart data={data} />
      <div className="flex justify-between mt-6">
        <div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
            onClick={handleCheckinBtn}
          >
            Check in
          </button>
        </div>
        {/* Note: You can remove this if you prefer to check out from individual workouts */}
      </div>
      <div className="mt-6 space-y-4">
        {data.map((workout, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 border border-gray-300 rounded-lg"
          >
            <h3 className="font-semibold">Workout #{index + 1}</h3>
            <p>
              <strong>Check-in:</strong>{" "}
              {new Date(workout.checkin).toLocaleString()}
            </p>
            <p>
              <strong>Equipment:</strong> {workout.equipment || "N/A"}
            </p>
            <p>
              <strong>Duration:</strong> {workout.duration} mins
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
