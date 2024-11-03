export type WorkoutDataProps = {
  id: number;
  checkin: string; // or Date if you are using Date objects
  checkout?: string; // or Date
  duration: number; // Ensure this is a number
  equipment?: string;
  calories?: number;
  weightLifted?: number;
  distance?: number;
  repetitions?: number;
};

export type ExercisesInterfaces = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  instructions: string;
  name: string;
  secondaryMuscles: string;
  target: string;
};
