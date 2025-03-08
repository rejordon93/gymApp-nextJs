// HandleStartWorkout.ts
import { Workout } from "./ProfilePopUp"; // Assuming Workout type is exported from ProfilePopUp
import { useRouter } from "next/navigation"; // Note: This won't work directly in a utility file

export function HandleStartWorkout(
  selectedWorkouts: number[],
  data: Workout[],
  setOpen: (open: boolean) => void,
  router: ReturnType<typeof useRouter>,
  showSnackbar: (message: string, severity: "success" | "error") => void
) {
  const selectedNames = selectedWorkouts.map((index) => data[index].workout);
  setOpen(false); // Close the workout selection modal
  router.push("/client/exercises"); // Navigate to exercises page
  console.log(selectedNames); // Log selected workouts for debugging
  showSnackbar("Workout started successfully", "success"); // Show success notification
}
