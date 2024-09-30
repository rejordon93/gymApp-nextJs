interface State {
  buttonDisabled: boolean;
  error: string | null;
  isLoading: boolean;
  success: boolean;
  isCheckedIn: boolean;
  user: {
    email: string;
    password: string;
    username: string;
  };
}

export const INITIAL_STATE: State = {
  user: {
    email: "",
    password: "",
    username: "",
  },
  buttonDisabled: true,
  error: null,
  isLoading: false,
  success: false,
  isCheckedIn: false,
};

interface Action {
  type:
    | "BTN_DISABLED"
    | "SET_ERROR"
    | "SET_USER"
    | "SET_LOADING"
    | "ISCHECKEDIN";
  payload?: any;
}

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "BTN_DISABLED":
      return {
        ...state,
        buttonDisabled: action.payload,
        success: false,
        error: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        success: false,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        success: true,
        error: null,
        isCheckedIn: true,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "ISCHECKEDIN":
      return {
        ...state,
        isCheckedIn: true,
      };
    default:
      return state;
  }
}
