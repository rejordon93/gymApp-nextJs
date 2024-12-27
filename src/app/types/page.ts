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
  id: number;
  name: string;
  bodyPart: string;
  equipment: string | null;
  gifUrl: string;
  instructions: string[];
  secondaryMuscles: string[];
  target: string;
};

export type ProfileType = {
  firstName: string;
  lastName: string;
  homeClub?: string;
  memberSince?: string;
  currentStatus?: string;
  cellPhone?: string;
  city?: string;
  state: string;
  zipCode: string;
  userId: number;
};
export type WorkoutPlanInput = {
  userPlanId?: number;
  checkin?: Date | string;
  weight?: number;
  updateWeighIn?: number;
  workoutReview?: string;
  checkout?: Date | string | null;
};
