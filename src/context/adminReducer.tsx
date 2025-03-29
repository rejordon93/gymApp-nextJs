export enum ActionType {
  SET_ADMIN = "SET_ADMIN",
  SET_ERROR = "SET_ERROR",
}

interface SetAdminAction {
  readonly type: ActionType.SET_ADMIN;
  readonly payload: AdminContext;
}
interface SetErrorAction {
  readonly type: ActionType.SET_ERROR;
  readonly payload: string | null;
}

export type AdminAction = SetAdminAction | SetErrorAction;

interface AdminContext {
  id?: number;
  userId?: number;
  createdAt?: string | null;
  isAdmin?: boolean; // see if admin is true are false
}

interface ApiRequestContext {
  error: string | null;
  success: boolean;
}

export interface AdminState {
  adminData: AdminContext;
  apiRequestContext: ApiRequestContext;
}

export const ADMIN_INITIAL_STATE: AdminState = {
  adminData: {
    id: 0,
    userId: 0,
    createdAt: new Date().toISOString(),
    isAdmin: false,
  },
  apiRequestContext: {
    error: null,
    success: false,
  },
};

export default function adminReducer(
  state: AdminState,
  action: AdminAction
): AdminState {
  switch (action.type) {
    case ActionType.SET_ADMIN:
      return {
        ...state,
        adminData: action.payload,
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
