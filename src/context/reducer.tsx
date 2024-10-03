interface User {
  email: string;
  password: string;
  username: string;
}

interface ApiRequstContext {
  error: string | null;
  isLoading: boolean;
  success: boolean;
}
interface ToolsContext {
  buttonDisabled: boolean;
  isCheckedIn: boolean;
}

interface State {
  toolsContext: ToolsContext;
  apiRequstContext: ApiRequstContext;
  user: User;
}

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

interface Action {
  type:
    | "BTN_DISABLED"
    | "SET_ERROR"
    | "SET_USER"
    | "SET_LOADING"
    | "IS_CHECKEDIN";
  payload?: ToolsContext | ApiRequstContext | User | boolean | string | null;
}

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "BTN_DISABLED":
      return {
        ...state,
        toolsContext: {
          ...state.toolsContext,
          buttonDisabled: action.payload as boolean,
        },
        apiRequstContext: {
          ...state.apiRequstContext,
          success: false,
          error: null,
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        apiRequstContext: {
          ...state.apiRequstContext,
          error: action.payload as string,
          success: false,
        },
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload as User,
        apiRequstContext: {
          ...state.apiRequstContext,
          success: true,
          error: null,
        },
        toolsContext: {
          ...state.toolsContext,
          isCheckedIn: true,
        },
      };
    case "SET_LOADING":
      return {
        ...state,
        apiRequstContext: {
          ...state.apiRequstContext,
          isLoading: action.payload as boolean,
        },
      };
    case "IS_CHECKEDIN":
      return {
        ...state,
        toolsContext: {
          ...state.toolsContext,
          isCheckedIn: true,
        },
      };
    default:
      return state;
  }
}
