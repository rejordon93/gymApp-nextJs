// Enum for action types. Defines all possible action types as string constants.
export enum ActionType {
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  SET_BTN_DISABLED = "BTN_DISABLED",
  IS_CHECKEDIN = "IS_CHECKEDIN",
}

// Action interface for setting the user.
interface SetUserAction {
  readonly type: ActionType.SET_USER;
  readonly payload: User; // Payload is a User object
}

// Action interface for setting an error message.
interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: string | null; // Payload is a string (error message)
}

// Action interface for enabling or disabling a button.
interface SetBtnDisabledAction {
  type: ActionType.SET_BTN_DISABLED;
  payload: boolean; // Payload is a boolean (button enabled/disabled state)
}

// Action interface for setting the loading state.
interface SetLoadingAction {
  readonly type: ActionType.SET_LOADING;
  readonly payload: boolean; // Payload is a boolean (loading state)
}

// Action interface for checking if the user is checked in.
interface SetCheckedinAction {
  type: ActionType.IS_CHECKEDIN;
  payload: boolean; // Payload is a boolean (checked-in state)
}

// Union of all possible action types. This allows the reducer to handle multiple action types.
type Action =
  | SetBtnDisabledAction
  | SetErrorAction
  | SetUserAction
  | SetLoadingAction
  | SetCheckedinAction;

// User interface to define the shape of the user object.
interface User {
  email: string;
  password: string;
  username: string;
}

// Interface for the API request context, which includes the error message, loading status, and success flag.
interface ApiRequstContext {
  error: string | null; //  `string`containing an error message.
  isLoading: boolean; // `true` if loading, `false` if not.
  success: boolean; // Indicates whether the request was successful.
}

// Interface for the tools context, which holds UI-related states like button disabling and check-in status.
interface ToolsContext {
  buttonDisabled: boolean; // `true` if the button is disabled, `false` otherwise.
  isCheckedIn: boolean; // `true` if the user is checked in, `false` otherwise.
}

// The overall state of the application, which combines all contexts and the user.
interface State {
  toolsContext: ToolsContext;
  apiRequstContext: ApiRequstContext;
  user: User;
}

// Initial state for the reducer.
export const INITIAL_STATE: State = {
  user: {
    email: "",
    password: "",
    username: "",
  },
  apiRequstContext: {
    error: null,
    isLoading: false,
    success: false,
  },
  toolsContext: {
    buttonDisabled: true,
    isCheckedIn: false,
  },
};

// Reducer function that updates the state based on the action type.
export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    // Case to handle enabling or disabling a button.
    case ActionType.SET_BTN_DISABLED:
      return {
        ...state,
        toolsContext: {
          ...state.toolsContext,
          buttonDisabled: action.payload, // Update buttonDisabled in toolsContext.
        },
        apiRequstContext: {
          ...state.apiRequstContext,
          success: false, // Reset success status.
          error: null, // Clear any errors.
        },
      };

    // Case to handle setting an error message.
    case ActionType.SET_ERROR:
      return {
        ...state,
        apiRequstContext: {
          ...state.apiRequstContext,
          error: action.payload, // Set error message.
          success: false, // Mark request as unsuccessful.
        },
      };

    // Case to handle setting user information.
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload, // Update the user object.
        apiRequstContext: {
          ...state.apiRequstContext,
          success: true, // Mark request as successful.
          error: null, // Clear any errors.
        },
        toolsContext: {
          ...state.toolsContext,
          isCheckedIn: true, // Mark the user as checked-in.
        },
      };

    // Case to handle loading state.
    case ActionType.SET_LOADING:
      return {
        ...state,
        apiRequstContext: {
          ...state.apiRequstContext,
          isLoading: action.payload, // Update loading status.
        },
      };

    // Case to handle whether the user is checked-in or not.
    case ActionType.IS_CHECKEDIN:
      return {
        ...state,
        toolsContext: {
          ...state.toolsContext,
          isCheckedIn: action.payload, // Update checked-in status.
        },
      };

    // Default case when no valid action is provided.
    default:
      return state;
  }
}
