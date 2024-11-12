export enum ActionType {
  GET_ALL_EXERCISES = "GET_ALL_EXERCISES",
  NEXT_RESULTS = "NEXT_RESULTS",
  PREV_RESULTS = "PREV_RESULTS",
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
}

interface SetGetAllAction {
  readonly type: ActionType.GET_ALL_EXERCISES;
  readonly payload: Workout;
}
interface SetNextResultsAction {
  readonly type: ActionType.NEXT_RESULTS;
  readonly payload: Workout;
}
interface SetPrevResultsAction {
  readonly type: ActionType.PREV_RESULTS;
  readonly payload: Workout;
}
interface SetAddToFavorites {
  readonly type: ActionType.ADD_TO_FAVORITES;
  readonly payload: Workout;
}

export type Action =
  | SetAddToFavorites
  | SetGetAllAction
  | SetNextResultsAction
  | SetPrevResultsAction;

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

interface ApiRequestContext {
  error: string | null;
  isLoading: boolean;
  message: string;
  success: boolean;
}

export interface WorkoutState {
  apiRequestContext: ApiRequestContext;
  workout: Workout;
}

export const INITIAL_STATE: WorkoutState = {
  workout: {
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    instructions: "",
    name: "",
    secondaryMuscles: "",
    target: "",
  },
  apiRequestContext: {
    error: null,
    isLoading: false,
    message: "",
    success: false,
  },
};

export default function exercisesReducer(
  state: WorkoutState,
  action: Action
): WorkoutState {
  switch (action.type) {
    case ActionType.ADD_TO_FAVORITES:
      return {
        ...state,
        workout: action.payload,
        apiRequestContext: {
          success: true,
          error: null,
          message: "Added to Favorites",
          isLoading: false,
        },
      };
    case ActionType.NEXT_RESULTS:
      return {
        ...state,
        workout: action.payload,
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
        workout: action.payload,
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
          error: null,
          message: "Previous Results",
          isLoading: true,
        },
      };
    case ActionType.GET_ALL_EXERCISES:
      return {
        ...state,
        workout: action.payload,
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
          error: null,
          message: "Fetched All Exercises",
          isLoading: true,
        },
      };
    default:
      return state;
  }
}
