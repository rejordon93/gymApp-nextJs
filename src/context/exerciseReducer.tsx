export enum ActionType {
  GET_ALL_EXERCISES = "GET_ALL_EXERCISES",
  SET_CURRENT = "SET_CURRENT",
  SET_WORKOUTS = "SET_WORKOUTS",
  REMOVE_WORKOUT = "REMOVE_WORKOUT",
  NEXT_RESULTS = "NEXT_RESULTS",
  PREV_RESULTS = "PREV_RESULTS",
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
}

interface SetCurrent {
  readonly type: ActionType.SET_CURRENT;
  readonly payload: Exercises; // Single workout payload
}

interface SetAddWorkouts {
  readonly type: ActionType.SET_WORKOUTS;
  readonly payload: {
    workouts: Exercises[];
    option: Options;
  };
}

interface SetGetAllExercises {
  readonly type: ActionType.GET_ALL_EXERCISES;
  readonly payload: Exercises[]; // Array of workouts
}
interface SetRemoveWorkout {
  readonly type: ActionType.REMOVE_WORKOUT;
  readonly payload: Exercises[];
}

interface SetAddToFavorites {
  readonly type: ActionType.ADD_TO_FAVORITES;
  readonly payload: Exercises[]; // Single workout payload
}

interface SetNextResultsAction {
  readonly type: ActionType.NEXT_RESULTS;
  readonly payload: Exercises[]; // Array of workouts
}

interface SetPrevResultsAction {
  readonly type: ActionType.PREV_RESULTS;
  readonly payload: Exercises[]; // Array of workouts
}

export type ExercisesAction =
  | SetNextResultsAction
  | SetPrevResultsAction
  | SetAddWorkouts
  | SetGetAllExercises
  | SetCurrent
  | SetRemoveWorkout
  | SetAddToFavorites;

// Workout interface for a single workout
interface Exercises {
  bodyPart?: string;
  equipment?: string;
  gifUrl?: string;
  id?: string;
  instructions?: [];
  name?: string;
  secondaryMuscles?: string;
  target?: string;
}

interface Options {
  limit?: string;
  offset?: string;
}

// API request context interface
interface ExerciseApiRequest {
  error: string | null;
  isLoading: boolean;
  message: string;
  success: boolean;
}

// Workout state interface
export interface ExercisesState {
  ExerciseApiRequest: ExerciseApiRequest;
  exercisesArr: Exercises[];
  currentExercises: Exercises;
  favExercises: Exercises[];
  option: Options;
}

// Initial state for the workout
export const EXERCISE_INITIAL_STATE: ExercisesState = {
  exercisesArr: [],
  currentExercises: {},

  option: {
    offset: "0",
    limit: "9",
  },
  favExercises: [],
  ExerciseApiRequest: {
    error: null,
    isLoading: false,
    message: "",
    success: false,
  },
};

// Reducer function to handle actions and update state
export default function exercisesReducer(
  state: ExercisesState,
  action: ExercisesAction
): ExercisesState {
  switch (action.type) {
    case ActionType.SET_WORKOUTS:
      return {
        ...state,
        exercisesArr: action.payload.workouts, // Set multiple workouts
        option: action.payload.option,
        ExerciseApiRequest: {
          ...state.ExerciseApiRequest,
          success: true,
          error: null,
          message: "SET Workout",
          isLoading: true,
        },
      };
    case ActionType.SET_CURRENT:
      return {
        ...state,
        currentExercises: action.payload, // Store selected workout details
        ExerciseApiRequest: {
          ...state.ExerciseApiRequest,
          success: true,
          error: null,
          message: "Workout details added",
          isLoading: true,
        },
      };
    case ActionType.GET_ALL_EXERCISES:
      return {
        ...state,
        exercisesArr: action.payload, // Fetch all exercises
        ExerciseApiRequest: {
          ...state.ExerciseApiRequest,
          success: true,
          error: null,
          message: "Workout details added",
          isLoading: true,
        },
      };

    case ActionType.ADD_TO_FAVORITES:
      return {
        ...state,
        favExercises: action.payload, // Add single workout to favorites
        ExerciseApiRequest: {
          success: true,
          error: null,
          message: "Added to Favorites",
          isLoading: false,
        },
      };

    case ActionType.REMOVE_WORKOUT:
      return {
        ...state,
        exercisesArr: action.payload,
        ExerciseApiRequest: {
          ...state.ExerciseApiRequest,
          success: true,
          error: null,
          message: "Workout details added",
          isLoading: true,
        },
      };

    case ActionType.NEXT_RESULTS:
      return {
        ...state,
        favExercises: action.payload, // Next results
        ExerciseApiRequest: {
          ...state.ExerciseApiRequest,
          success: true,
          error: null,
          message: "Next Results",
          isLoading: true,
        },
      };
    case ActionType.PREV_RESULTS:
      return {
        ...state,
        favExercises: action.payload, // Previous results
        ExerciseApiRequest: {
          ...state.ExerciseApiRequest,
          success: true,
          error: null,
          message: "Previous Results",
          isLoading: true,
        },
      };

    default:
      return state;
  }
}
