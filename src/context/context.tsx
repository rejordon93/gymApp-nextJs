"use client";
// src/context/context.ts
import React, { createContext, useState, useContext, ReactNode } from "react";

interface LoginState {
  token: string | null;
  setToken: (token: string) => void;
}

interface ErrorState {
  error: string | null;
  setError: (error: string) => void;
}

// Define the shape of the context data
interface AppContextType {
  userData: LoginState;
  errorData: ErrorState;
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

// Export the provider
export const AppProvider = ({ children }: AppProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const userData: LoginState = { token, setToken };
  const errorState: ErrorState = { error, setError };

  return (
    <AppContext.Provider value={{ userData, errorData: errorState }}>
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
