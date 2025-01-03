export enum ActionType {
  SET_VISIT = "SET_VISIT",
  SET_UPDATED_VISIT = "SET_UPDATED_VISIT",
  SET_ERROR = "SET_ERROR",
}

interface SetVisitAction {
  readonly type: ActionType.SET_VISIT;
  readonly payload: Visit;
}

interface SetUpdatedVisitAction {
  readonly type: ActionType.SET_UPDATED_VISIT;
  readonly payload: Visit;
}

interface SetErrorAction {
  readonly type: ActionType.SET_ERROR;
  readonly payload: string | null;
}

export type VisitAction =
  | SetVisitAction
  | SetUpdatedVisitAction
  | SetErrorAction;

interface Visit {
  id?: number;
  userId: number;
  checkin: string | null;
  weight?: number;
  updateWeighIn?: number;
  workoutReview?: string;
  checkout?: string;
}

interface ApiRequestContext {
  error: string | null;
  isLoading: boolean;
  success: boolean;
}

export interface VisitState {
  apiRequestContext: ApiRequestContext;
  visit: Visit;
}

export const VISIT_INITIAL_STATE: VisitState = {
  visit: {
    userId: 0,
    checkin: Date.now().toString(),
    weight: 0,
    updateWeighIn: 0,
    workoutReview: "",
    checkout: Date.toString(),
  },
  apiRequestContext: {
    error: null,
    isLoading: false,
    success: false,
  },
};

export default function visitsReducer(
  state: VisitState,
  action: VisitAction
): VisitState {
  switch (action.type) {
    case ActionType.SET_VISIT:
      return {
        ...state,
        visit: action.payload,
        apiRequestContext: {
          ...state.apiRequestContext,
          isLoading: false,
          success: true,
        },
      };
    case ActionType.SET_UPDATED_VISIT:
      return {
        ...state,
        visit: action.payload,
        apiRequestContext: {
          ...state.apiRequestContext,
          isLoading: false,
          success: true,
        },
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        apiRequestContext: {
          ...state.apiRequestContext,
          error: action.payload,
          isLoading: false,
          success: false,
        },
      };

    default:
      return state;
  }
}
