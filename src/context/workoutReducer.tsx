export enum ActionType {
  SET_WORKOUT = "SET_WORKOUT",
  SET_UPDATED_WORKOUT = "SET_UPDATED_WORKOUT",
  SET_ERROR = "SET_ERROR",
}

interface SetWorkoutAction {
  readonly type: ActionType.SET_WORKOUT;
  readonly payload: Workout;
}

interface SetUpdatedWorkoutAction {
  readonly type: ActionType.SET_UPDATED_WORKOUT;
  readonly payload: Workout;
}

interface SetErrorAction {
  readonly type: ActionType.SET_ERROR;
  readonly payload: string | null;
}

export type WorkoutAction =
  | SetWorkoutAction
  | SetUpdatedWorkoutAction
  | SetErrorAction;

interface Workout {
  id?: number;
  userId?: number;
  workout?: string[];
  workoutDay?: string;
  createdAt?: string | null;
  completed?: boolean;
}

interface ApiRequestContext {
  error: string | null;
  success: boolean;
}

export interface WorkoutState {
  apiRequestContext: ApiRequestContext;
  workout: Workout;
}

export const WORKOUT_INITIAL_STATE: WorkoutState = {
  workout: {
    userId: 0,
    workout: [],
    workoutDay: "",
    createdAt: new Date().toISOString(), // Use ISO string format for clarity
    completed: false,
  },
  apiRequestContext: {
    error: null,
    success: false,
  },
};

export default function workoutReducer(
  state: WorkoutState,
  action: WorkoutAction
): WorkoutState {
  switch (action.type) {
    case ActionType.SET_WORKOUT:
      return {
        ...state,
        workout: action.payload,
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
        },
      };

    case ActionType.SET_UPDATED_WORKOUT:
      return {
        ...state,
        workout: action.payload,
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
        },
      };

    case ActionType.SET_ERROR:
      return {
        ...state,
        apiRequestContext: {
          ...state.apiRequestContext,
          error: action.payload,
          success: false, // Fixed missing colon here
        },
      };

    default:
      return state;
  }
}
