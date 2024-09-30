"use client";
import Link from "next/link";
import { useEffect, useReducer } from "react";
import reducer from "@/context/reducer";
import { INITIAL_STATE } from "@/context/reducer";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // Handle signup logic
  const onSignup = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await axios.post("/api/users/signup", state.user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "An unexpected error occurred." });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  // Enable or disable the button based on form validity
  useEffect(() => {
    if (
      state.user &&
      state.user.email.length > 0 &&
      state.user.password.length > 0 &&
      state.user.username.length > 0
    ) {
      dispatch({ type: "BTN_DISABLED", payload: false });
    } else {
      dispatch({ type: "BTN_DISABLED", payload: true });
    }
  }, [state.user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {state.isLoading ? "Processing" : "Signup"}
        </h1>
        <hr className="mb-6 border-gray-300" />
        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              id="username"
              value={state.user.username}
              onChange={(e) =>
                dispatch({
                  type: "SET_USER",
                  payload: { ...state.user, username: e.target.value },
                })
              }
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              id="email"
              value={state.user.email}
              onChange={(e) =>
                dispatch({
                  type: "SET_USER",
                  payload: { ...state.user, email: e.target.value },
                })
              }
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              id="password"
              value={state.user.password}
              onChange={(e) =>
                dispatch({
                  type: "SET_USER",
                  payload: { ...state.user, password: e.target.value },
                })
              }
              placeholder="Enter your password"
              required
            />
          </div>

          {state.error && (
            <p className="text-red-500 text-sm text-center">{state.error}</p>
          )}

          <button
            onClick={onSignup}
            className="w-full bg-indigo-600 text-white p-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={state.buttonDisabled}
          >
            {state.isLoading ? "Signing up..." : "Signup"}
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
