"use client";
import React, { createContext, useContext, ReactNode, useReducer } from "react";
import reducer from "@/context/reducer";
import exercisesReducer from "@/context/exerciseReducer";
import { Action, UserState, INITIAL_STATE } from "@/context/reducer";
import {
  WorkoutAction,
  WorkoutState,
  INITIAL_STATE2,
} from "@/context/exerciseReducer";

// Define the shape of the workout context
interface WorkoutContextType {
  workoutState: WorkoutState;
  workoutDispatch: React.Dispatch<WorkoutAction>;
}

// Define the shape of the main app context
interface AppContextType {
  userState: UserState;
  userDispatch: React.Dispatch<Action>;
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
  const [userState, userDispatch] = useReducer(reducer, INITIAL_STATE);
  const [workoutState, workoutDispatch] = useReducer(
    exercisesReducer,
    INITIAL_STATE2
  );

  return (
    <AppContext.Provider value={{ userState, userDispatch }}>
      <WorkoutContext.Provider value={{ workoutState, workoutDispatch }}>
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
