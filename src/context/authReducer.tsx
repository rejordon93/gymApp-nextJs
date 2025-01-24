// Enum for action types. Defines all possible action types as string constants.
export enum ActionType {
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  SETLOGOUT = "SET_LOGOUT",
}

// Action interface for setting the user.
interface SetUserAction {
  readonly type: ActionType.SET_USER;
  readonly payload: User; // Payload is a User object
}

// Action interface for setting an error message.
interface SetErrorAction {
  readonly type: ActionType.SET_ERROR;
  readonly payload: string | null; // Payload is a string (error message)
}

// Action interface for setting the loading state.
interface SetLoadingAction {
  readonly type: ActionType.SETLOGOUT; // Use a relevant action type
  readonly payload: boolean; // Payload is a boolean (true/false for loading state)
}
// Union of all possible action types. This allows the reducer to handle multiple action types.
export type Action = SetErrorAction | SetUserAction | SetLoadingAction;

// User interface to define the shape of the user object.
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

// Interface for the API request context, which includes the error message, loading status, and success flag.
interface ApiRequstContext {
  error: string | null; //  `string`containing an error message.
  isLoading: boolean; // `true` if loading, `false` if not.
  success: boolean; // Indicates whether the request was successful.
}

// The overall state of the application, which combines all contexts and the user.
export interface UserState {
  apiRequestContext: ApiRequstContext;
  user: User;
}

// Initial state for the reducer.
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

// Reducer function that updates the state based on the action type.
export default function reducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    // Case to handle setting an error message.
    case ActionType.SET_ERROR:
      return {
        ...state,
        apiRequestContext: {
          ...state.apiRequestContext,
          error: action.payload, // Set error message.
          success: false, // Mark request as unsuccessful.
        },
      };

    // Case to handle setting user information.
    case ActionType.SET_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload }, // Update the user object.
        apiRequestContext: {
          ...state.apiRequestContext,
          success: true, // Mark request as successful.
          error: null, // Clear any errors.
        },
      };

    // Case to handle loading state.
    case ActionType.SETLOGOUT:
      return {
        ...state,
        apiRequestContext: {
          ...state.apiRequestContext,
          isLoading: action.payload, // Update loading status.
        },
      };
    // Default case when no valid action is provided.
    default:
      return state;
  }
}
