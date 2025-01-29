export enum ActionType {
  SET_VISIT = "SET_VISIT",
  SET_UPDATED_VISIT = "SET_UPDATED_VISIT",
  SET_ERROR = "SET_ERROR",
}

interface SetVisitAction {
  readonly type: ActionType.SET_VISIT;
  readonly payload: VisitContext;
}

interface SetUpdatedVisitAction {
  readonly type: ActionType.SET_UPDATED_VISIT;
  readonly payload: VisitContext;
}

interface SetErrorAction {
  readonly type: ActionType.SET_ERROR;
  readonly payload: string | null;
}

export type VisitAction =
  | SetVisitAction
  | SetUpdatedVisitAction
  | SetErrorAction;

interface VisitContext {
  checkinBtn?: boolean;
  visit: {
    id?: number;
    userId: number;
    checkin: string | null;
    checkout?: string | null;
  };
}

interface ApiRequestContext {
  error: string | null;
  isLoading: boolean;
  success: boolean;
}

export interface VisitState {
  apiRequestContext: ApiRequestContext;
  visitData: VisitContext;
}

export const VISIT_INITIAL_STATE: VisitState = {
  visitData: {
    checkinBtn: true, // Default to true
    visit: {
      userId: 0,
      checkin: null, // Default to null
      checkout: null, // Default to null
    },
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
        visitData: {
          ...action.payload,
          checkinBtn: false, // After check-in, set checkinBtn to false
        },
        apiRequestContext: {
          ...state.apiRequestContext,
          isLoading: false,
          success: true,
        },
      };
    case ActionType.SET_UPDATED_VISIT:
      return {
        ...state,
        visitData: {
          ...action.payload,
          checkinBtn: true, // After check-out, set checkinBtn to true
        },
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
