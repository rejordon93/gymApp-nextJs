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

// Define the shape of the context data
interface AppContextType {
  state: State; // State managed by the reducer
  dispatch: React.Dispatch<Action>; // Dispatch function for dispatching actions
  token: string | null; // Token state
  setToken: React.Dispatch<React.SetStateAction<string | null>>; // Function to update the token
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

// Export the provider
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [token, setToken] = useState<string | null>(null); // Initialize the token state

  return (
    <AppContext.Provider value={{ state, dispatch, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
