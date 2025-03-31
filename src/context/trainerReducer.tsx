export enum ActionType {
  SET_TRAINER = "SET_ADMIN",
  SET_ERROR = "SET_ERROR",
}

interface SetTrainerAction {
  readonly type: ActionType.SET_TRAINER;
  readonly payload: TrainerContext;
}
interface SetErrorAction {
  readonly type: ActionType.SET_ERROR;
  readonly payload: string | null;
}

export type TrainerAction = SetTrainerAction | SetErrorAction;

interface TrainerContext {
  id?: number;
  userId?: number;
  messages?: string;
  createdAt?: string | null;
  isTrainer?: boolean;
}
interface ApiRequestContext {
  error: string | null;
  success: boolean;
}

export interface TrainerState {
  trainerData: TrainerContext;
  apiRequestContext: ApiRequestContext;
}

export const TRAINER_INITIAL_STATE: TrainerState = {
  trainerData: {
    id: 0,
    userId: 0,
    createdAt: new Date().toISOString(),
    isTrainer: false,
    messages: "",
  },
  apiRequestContext: {
    error: null,
    success: false,
  },
};

export default function trainerReducer(
  state: TrainerState,
  action: TrainerAction
): TrainerState {
  switch (action.type) {
    case ActionType.SET_TRAINER:
      return {
        ...state,
        trainerData: action.payload,
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
