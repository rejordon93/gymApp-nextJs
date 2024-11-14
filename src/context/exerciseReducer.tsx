export enum ActionType {
  ADD_TO_DETAILS = "ADD_TO_DETAILS",
  SET_WORKOUTS = "SET_WORKOUTS",
  NEXT_RESULTS = "NEXT_RESULTS",
  PREV_RESULTS = "PREV_RESULTS",
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
  GET_ALL_EXERCISES = "GET_ALL_EXERCISES",
}

// Action types definitions
interface SetGetAllAction {
  readonly type: ActionType.ADD_TO_DETAILS;
  readonly payload: Store[]; // Now a single workout instead of an array
}

interface SetNextResultsAction {
  readonly type: ActionType.NEXT_RESULTS;
  readonly payload: Workout[]; // This stays an array
}

interface SetPrevResultsAction {
  readonly type: ActionType.PREV_RESULTS;
  readonly payload: Workout[]; // This stays an array
}

interface SetAddToFavorites {
  readonly type: ActionType.ADD_TO_FAVORITES;
  readonly payload: Workout; // Payload is now a single workout
}

interface SetWorkouts {
  readonly type: ActionType.SET_WORKOUTS;
  readonly payload: Workout[]; // Payload should be an array of workouts
}

interface SetGetAllExercises {
  readonly type: ActionType.GET_ALL_EXERCISES;
  readonly payload: Workout[]; // Payload should be an array of workouts
}

export type WorkoutAction =
  | SetAddToFavorites
  | SetGetAllAction
  | SetNextResultsAction
  | SetPrevResultsAction
  | SetWorkouts
  | SetGetAllExercises;

// Workout interface for a single workout
interface Workout {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  instructions: string;
  name: string;
  secondaryMuscles: string;
  target: string;
}
interface Store {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  instructions: string;
  name: string;
  secondaryMuscles: string;
  target: string;
}

// API request context interface
interface ApiRequestContext {
  error: string | null;
  isLoading: boolean;
  message: string;
  success: boolean;
}

// Workout state interface
export interface WorkoutState {
  apiRequestContext: ApiRequestContext;
  workoutStore: Store[];
  workout: Workout[]; // Now an array of workouts
}

// Initial state for the workout
export const INITIAL_STATE2: WorkoutState = {
  workout: [], // Initialized as an empty array
  workoutStore: [],
  apiRequestContext: {
    error: null,
    isLoading: false,
    message: "",
    success: false,
  },
};

// Reducer function to handle actions and update state
// Reducer function to handle actions and update state
export default function exercisesReducer(
  state: WorkoutState,
  action: WorkoutAction
): WorkoutState {
  switch (action.type) {
    case ActionType.ADD_TO_FAVORITES:
      return {
        ...state,
        workout: [action.payload], // If adding to favorites, store a single workout in an array
        apiRequestContext: {
          success: true,
          error: null,
          message: "Added to Favorites",
          isLoading: false,
        },
      };
    case ActionType.SET_WORKOUTS:
      return {
        ...state,
        workout: action.payload, // Set multiple workouts (array)
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
          error: null,
          message: "SET Workout",
          isLoading: true,
        },
      };
    case ActionType.NEXT_RESULTS:
      return {
        ...state,
        workout: action.payload, // Next results (array of workouts)
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
          error: null,
          message: "Next Results",
          isLoading: true,
        },
      };
    case ActionType.PREV_RESULTS:
      return {
        ...state,
        workout: action.payload, // Previous results (array of workouts)
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
          error: null,
          message: "Previous Results",
          isLoading: true,
        },
      };
    case ActionType.ADD_TO_DETAILS:
      return {
        ...state,
        workoutStore: action.payload, // Store the selected workout as a single-item array
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
          error: null,
          message: "Workout details added",
          isLoading: true,
        },
      };
    case ActionType.GET_ALL_EXERCISES:
      return {
        ...state,
        workout: action.payload, // Fetch all exercises (array of workouts)
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
          error: null,
          message: "Workout details added",
          isLoading: true,
        },
      };
    default:
      return state;
  }
}
