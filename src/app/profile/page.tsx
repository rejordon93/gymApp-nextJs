"use client";
import axios from "axios";
import { useState, useReducer } from "react";
import reducer, { INITIAL_STATE, ActionType } from "@/context/reducer";
import { useRouter } from "next/navigation";
import { WorkoutDataProps } from "../types/page";
import BarChart from "@/components/BarChart";

export default function GymVisitsPage() {
  const [data, setData] = useState<WorkoutDataProps[]>([]);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const router = useRouter();
  const handleCheckinBtn = () => {
    dispatch({ type: ActionType.SET_LOADING, payload: true });
    dispatch({ type: ActionType.IS_CHECKEDIN, payload: true });

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
        dispatch({
          type: ActionType.SET_ERROR,
          payload: error instanceof Error ? error.message : String(error),
        });
      })
      .finally(() =>
        dispatch({ type: ActionType.SET_LOADING, payload: false })
      );
  };

  // For checking out and updating a specific workout
  const handleCheckOutBtn = async (workoutId: number) => {
    dispatch({ type: ActionType.SET_LOADING, payload: true });
    dispatch({ type: ActionType.SET_ERROR, payload: null });

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
      dispatch({
        type: ActionType.SET_ERROR,
        payload: "Error checking out workout",
      });
    } finally {
      dispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  const handleWorkoutBtn = async () => {
    console.log("Just a Test for rediecting workout");
    router.push("/workouts");
  };

  if (state.apiRequstContext.isLoading)
    return <div className="text-blue-500">Loading...</div>;
  if (state.apiRequstContext.error)
    return (
      <div className="text-red-500 font-bold">
        Error: {state.apiRequstContext.error}
      </div>
    );

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
        {state.toolsContext.isCheckedIn && (
          <button
            onClick={handleWorkoutBtn}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
          >
            Add Workouts
          </button>
        )}
      </div>
      <div className="mt-6 space-y-6">
        {data.map((workout) => (
          <div
            key={workout.id}
            className="p-6 bg-white shadow-md rounded-xl border border-gray-200 transition duration-300 hover:shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg text-gray-800">
                Workout #{workout.id}
              </h3>
              <span className="text-sm text-gray-500">
                {new Date(workout.checkin).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="mt-4 text-gray-700 space-y-2">
              <p className="flex justify-between">
                <span className="font-medium">Equipment:</span>
                <span>{workout.equipment || "N/A"}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Duration:</span>
                <span>{Math.floor(workout.duration / 60)} mins</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Calories:</span>
                <span>{workout.calories}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Weight Lifted:</span>
                <span>{workout.weightLifted} kg</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Distance:</span>
                <span>{workout.distance} km</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Repetitions:</span>
                <span>{workout.repetitions}</span>
              </p>
            </div>
            <button
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200"
              onClick={() => handleCheckOutBtn(workout.id)}
            >
              Check Out
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
