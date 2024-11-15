export enum ActionType {
  GET_ALL_EXERCISES = "GET_ALL_EXERCISES",
  SET_CURRENT = "SET_CURRENT",
  SET_WORKOUTS = "SET_WORKOUTS",
  REMOVE_WORKOUT = "REMOVE_WORKOUT",
  // NEXT_RESULTS = "NEXT_RESULTS",
  // PREV_RESULTS = "PREV_RESULTS",
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
}

interface SetCurrent {
  readonly type: ActionType.SET_CURRENT;
  readonly payload: Workout; // Single workout payload
}

interface SetAddWorkouts {
  readonly type: ActionType.SET_WORKOUTS;
  readonly payload: Workout[]; // Array of workouts
}

interface SetGetAllExercises {
  readonly type: ActionType.GET_ALL_EXERCISES;
  readonly payload: Workout[]; // Array of workouts
}
interface SetRemoveWorkout {
  readonly type: ActionType.REMOVE_WORKOUT;
  readonly payload: Workout[];
}

interface SetAddToFavorites {
  readonly type: ActionType.ADD_TO_FAVORITES;
  readonly payload: Workout[]; // Single workout payload
}

// interface SetNextResultsAction {
//   readonly type: ActionType.NEXT_RESULTS;
//   readonly payload: Workouts[]; // Array of workouts
// }

// interface SetPrevResultsAction {
//   readonly type: ActionType.PREV_RESULTS;
//   readonly payload: Workouts[]; // Array of workouts
// }

export type WorkoutAction =
  // | SetGetAllAction
  // | SetNextResultsAction
  // | SetPrevResultsAction
  | SetAddWorkouts
  | SetGetAllExercises
  | SetCurrent
  | SetRemoveWorkout
  | SetAddToFavorites;

// Workout interface for a single workout
interface Workout {
  bodyPart?: string;
  equipment?: string;
  gifUrl?: string;
  id?: string;
  instructions?: string;
  name?: string;
  secondaryMuscles?: string;
  target?: string;
}

// API request context interface
interface ExerciseApiRequest {
  error: string | null;
  isLoading: boolean;
  message: string;
  success: boolean;
}

// Workout state interface
export interface WorkoutState {
  ExerciseApiRequest: ExerciseApiRequest;
  workoutsArr: Workout[];
  currentWorkout: Workout;
  favExercises: Workout[];
}

// Initial state for the workout
export const EXERCISE_INITIAL_STATE: WorkoutState = {
  workoutsArr: [],
  currentWorkout: {},
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
  state: WorkoutState,
  action: WorkoutAction
): WorkoutState {
  switch (action.type) {
    case ActionType.SET_WORKOUTS:
      return {
        ...state,
        workoutsArr: action.payload, // Set multiple workouts
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
        currentWorkout: action.payload, // Store selected workout details
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
        workoutsArr: action.payload, // Fetch all exercises
        ExerciseApiRequest: {
          ...state.ExerciseApiRequest,
          success: true,
          error: null,
          message: "Workout details added",
          isLoading: true,
        },
      };
    case ActionType.REMOVE_WORKOUT:
      return {
        ...state,
        workoutsArr: action.payload,
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
    // case ActionType.NEXT_RESULTS:
    //   return {
    //     ...state,
    //     workouts: action.payload, // Next results
    //     ExerciseApiRequest: {
    //       ...state.ExerciseApiRequest,
    //       success: true,
    //       error: null,
    //       message: "Next Results",
    //       isLoading: true,
    //     },
    //   };
    // case ActionType.PREV_RESULTS:
    //   return {
    //     ...state,
    //     workouts: action.payload, // Previous results
    //     ExerciseApiRequest: {
    //       ...state.ExerciseApiRequest,
    //       success: true,
    //       error: null,
    //       message: "Previous Results",
    //       isLoading: true,
    //     },
    //   };

    default:
      return state;
  }
}
