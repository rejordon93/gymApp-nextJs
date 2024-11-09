// src/context/context.ts
"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useState,
} from "react";
import reducer from "@/context/reducer";
import { INITIAL_STATE } from "@/context/reducer";
import { Action, State } from "@/context/reducer";

type WorkoutContextType = {
  workoutData: string[];
  setWorkoutData: (data: string[]) => void;
};

// Define the shape of the main app context
interface AppContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

// Create contexts for the app state and workout data
export const AppContext = createContext<AppContextType | undefined>(undefined);
export const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

type AppProviderProps = {
  children: ReactNode;
};

// Combined provider that supplies both contexts
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [workoutData, setWorkoutData] = useState<string[]>([]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <WorkoutContext.Provider value={{ workoutData, setWorkoutData }}>
        {children}
      </WorkoutContext.Provider>
    </AppContext.Provider>
  );
};

// Custom hooks for accessing the contexts
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export function useWorkoutContext() {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkoutContext must be used within an AppProvider");
  }
  return context;
}
