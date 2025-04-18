"use client";
import React, { createContext, useContext, ReactNode, useReducer } from "react";
import reducer from "@/context/authReducer";
import exercisesReducer from "@/context/exerciseReducer";
import visitsReducer from "@/context/visitsReducer";
import workoutReducer from "./workoutReducer";
import adminReducer from "./adminReducer";
import trainerReducer from "./trainerReducer";
import { Action, UserState, AUTH_INITIAL_STATE } from "@/context/authReducer";

import {
  ExercisesAction,
  ExercisesState,
  EXERCISE_INITIAL_STATE,
} from "@/context/exerciseReducer";
import {
  VisitAction,
  VisitState,
  VISIT_INITIAL_STATE,
} from "@/context/visitsReducer";

import {
  WorkoutAction,
  WorkoutState,
  WORKOUT_INITIAL_STATE,
} from "./workoutReducer";

import { AdminAction, AdminState, ADMIN_INITIAL_STATE } from "./adminReducer";

import {
  TrainerAction,
  TrainerState,
  TRAINER_INITIAL_STATE,
} from "./trainerReducer";

// Define the shape of the main app context
interface UserContextType {
  userState: UserState;
  userDispatch: React.Dispatch<Action>;
}

// Define the shape of the workout context
interface ExercisestContextType {
  exercisesState: ExercisesState;
  exercisesDispatch: React.Dispatch<ExercisesAction>;
}

interface VisitContextType {
  visitState: VisitState;
  visitDispatch: React.Dispatch<VisitAction>;
}
interface WorkoutContextType {
  workoutState: WorkoutState;
  workoutDispatch: React.Dispatch<WorkoutAction>;
}

interface AdminContextType {
  adminState: AdminState;
  adminDispatch: React.Dispatch<AdminAction>;
}
interface TrainerContextType {
  trainerState: TrainerState;
  trainerDispatch: React.Dispatch<TrainerAction>;
}
// Create contexts for the app state and workout data
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
export const ExercisesContext = createContext<
  ExercisestContextType | undefined
>(undefined);

export const VisitsContext = createContext<VisitContextType | undefined>(
  undefined
);

export const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);
export const AdminContext = createContext<AdminContextType | undefined>(
  undefined
);

export const TrainerContext = createContext<TrainerContextType | undefined>(
  undefined
);

type AppProviderProps = {
  children: ReactNode;
};

// Combined provider that supplies both contexts
export const AppProvider = ({ children }: AppProviderProps) => {
  const [userState, userDispatch] = useReducer(reducer, AUTH_INITIAL_STATE);
  const [exercisesState, exercisesDispatch] = useReducer(
    exercisesReducer,
    EXERCISE_INITIAL_STATE
  );
  const [visitState, visitDispatch] = useReducer(
    visitsReducer,
    VISIT_INITIAL_STATE
  );
  const [workoutState, workoutDispatch] = useReducer(
    workoutReducer,
    WORKOUT_INITIAL_STATE
  );

  const [adminState, adminDispatch] = useReducer(
    adminReducer,
    ADMIN_INITIAL_STATE
  );
  const [trainerState, trainerDispatch] = useReducer(
    trainerReducer,
    TRAINER_INITIAL_STATE
  );

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      <ExercisesContext.Provider value={{ exercisesState, exercisesDispatch }}>
        <VisitsContext.Provider value={{ visitState, visitDispatch }}>
          <WorkoutContext.Provider value={{ workoutState, workoutDispatch }}>
            <AdminContext.Provider value={{ adminState, adminDispatch }}>
              <TrainerContext.Provider
                value={{ trainerState, trainerDispatch }}
              >
                {children}
              </TrainerContext.Provider>
            </AdminContext.Provider>
          </WorkoutContext.Provider>
        </VisitsContext.Provider>
      </ExercisesContext.Provider>
    </UserContext.Provider>
  );
};

// Custom hooks for accessing the contexts
export function AuthAppContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("AuthAppContext must be used within an AppProvider");
  }
  return context;
}

export function UserExercisesContext() {
  const context = useContext(ExercisesContext);
  if (!context) {
    throw new Error("UserWorkoutContext must be used within an AppProvider");
  }
  return context;
}

export function UserVisitContext() {
  const context = useContext(VisitsContext);
  if (!context) {
    throw new Error("UserVisitContext must be used within an AppProvider");
  }
  return context;
}

export function UserWorkoutContext() {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("UserWorkoutContext must be used within an AppProvider");
  }
  return context;
}

export function UserAdminContext() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("UserVisitContext must be used within an AppProvider");
  }
  return context;
}

export function UserTrainerContext() {
  const context = useContext(TrainerContext);
  if (!context) {
    throw new Error("UserVisitContext must be used within an AppProvider");
  }
  return context;
}
