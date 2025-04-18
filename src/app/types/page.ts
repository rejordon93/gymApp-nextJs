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
  instructions: string;
  secondaryMuscles: string;
  target: string;
};

export type FavoritedExerciseType = {
  id: number;
  name: string;
  equipment: string;
  gifUrl: string;
  instructions: string[];
  secondaryMuscles: string[];
  target: string;
  bodyPart: string;
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
  id: number;
  userId?: number;
  checkin?: Date | string;
  checkinBtn?: boolean;
  time?: Date | string;
  checkout: Date | string;
};

export type updateBodyType = {
  name: string;
  equipment: string;
  gifUrl: string;
  instructions: string;
  secondaryMuscles: string;
  target: string;
};

export type ProfileProps = {
  cellPhone: string;
  city: string;
  currentStatus: string;
  firstName: string;
  homeClub: string;
  id: number;
  lastName: string;
  memberSince: string;
  state: string;
  zipCode: string;
  userId: number;
};
export type UserCardProps = {
  user: {
    id: number;
    username: string;
    email: string;
    isOnline: boolean;
    createdAt: string;
  };
};

export type LoginType = {
  username: string;
  email: string;
  password: string;
};
