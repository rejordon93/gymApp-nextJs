export enum ActionType {
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  SET_LOGOUT = "SET_LOGOUT",
}

interface User {
  id?: number;
  email: string;
  username: string;
  token?: string;
  firstName?: string;
  lastName?: string;
  homeClub?: string;
  memberSince?: string;
  currentStatus?: string;
  cellPhone?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

interface ApiRequestContext {
  error: string | null;
  isLoading: boolean;
  success: boolean;
}

export interface UserState {
  apiRequestContext: ApiRequestContext;
  user: User;
}

interface SetUserAction {
  type: ActionType.SET_USER;
  payload: User;
}

interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: string | null;
}

interface SetLoadingAction {
  type: ActionType.SET_LOADING;
  payload: boolean;
}

interface SetLogoutAction {
  type: ActionType.SET_LOGOUT;
}

export type Action =
  | SetUserAction
  | SetErrorAction
  | SetLoadingAction
  | SetLogoutAction;

export const AUTH_INITIAL_STATE: UserState = {
  user: {
    email: "",
    username: "",
    token: "",
    firstName: "",
    lastName: "",
    homeClub: "",
    memberSince: "",
    currentStatus: "",
    cellPhone: "",
    city: "",
    state: "",
    zipCode: "",
  },

  apiRequestContext: {
    error: null,
    isLoading: false,
    success: false,
  },
};

export default function reducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case ActionType.SET_ERROR:
      return {
        ...state,
        apiRequestContext: {
          ...state.apiRequestContext,
          error: action.payload,
          success: false,
        },
      };

    case ActionType.SET_USER:
      return {
        ...state,
        user: { ...AUTH_INITIAL_STATE.user, ...action.payload },
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true,
          error: null,
        },
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        apiRequestContext: {
          ...state.apiRequestContext,
          isLoading: action.payload,
        },
      };

    case ActionType.SET_LOGOUT:
      return {
        ...AUTH_INITIAL_STATE,
        apiRequestContext: {
          ...AUTH_INITIAL_STATE.apiRequestContext,
          isLoading: false,
        },
      };

    default:
      return state;
  }
}
