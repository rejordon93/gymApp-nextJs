"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/context";
import { ActionType } from "@/context/reducer";

import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const { state, dispatch } = useAppContext();

  // Local state for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username] = useState("");

  const onLogin = async () => {
    try {
      dispatch({ type: ActionType.SET_LOADING, payload: true });

      // Send the local email and password state
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      console.log("Login success", response.data);

      const { token } = response.data;
      dispatch({ type: ActionType.SET_TOKEN, payload: token });
      dispatch({
        type: ActionType.SET_USER,
        payload: { email, token, password, username },
      });

      console.log("Dispatched Token:", token);

      router.push("/profile");
    } catch (error: unknown) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: "Login failed. Please try again.",
      });
    } finally {
      dispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    // Enable or disable the login button based on the email and password
    if (email.length > 0 && password.length > 0) {
      dispatch({ type: ActionType.SET_BTN_DISABLED, payload: false });
    } else {
      dispatch({ type: ActionType.SET_BTN_DISABLED, payload: true });
    }
  }, [email, password, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {state.apiRequstContext.isLoading ? "Processing..." : "Login"}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {state.apiRequstContext.error && (
            <p className="text-red-500 text-sm text-center">
              {state.apiRequstContext.error}
            </p>
          )}
          <button
            onClick={onLogin}
            className={`w-full p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              state.toolsContext.buttonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
            disabled={state.toolsContext.buttonDisabled}
          >
            {state.apiRequstContext.isLoading ? "Processing..." : "Login"}
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
