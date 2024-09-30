"use client";
import Link from "next/link";
import { useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import reducer from "@/context/reducer";
import { INITIAL_STATE } from "@/context/reducer";
import axios from "axios";
import { useAppContext } from "@/context/context";

export default function LoginPage() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { setToken } = useAppContext();

  const onLogin = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await axios.post("/api/users/login", state.user);
      const { token } = response.data;
      setToken(token);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      dispatch({
        type: "SET_ERROR",
        payload: "Login failed. Please try again.",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    if (state.user?.email?.length > 0 && state.user?.password?.length > 0) {
      dispatch({ type: "BTN_DISABLED", payload: false });
    } else {
      dispatch({ type: "BTN_DISABLED", payload: true });
    }
  }, [state.user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {state.isLoading ? "Processing..." : "Login"}
        </h1>
        <hr className="mb-6 border-gray-300" />
        <div className="space-y-4">
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
            onClick={onLogin}
            className={`w-full p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              state.buttonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
            disabled={state.buttonDisabled}
          >
            {state.isLoading ? "Processing..." : "Login"}
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Dont have an account?
          <Link href="/Signup" className="text-indigo-600 hover:underline">
            {" "}
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
