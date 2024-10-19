"use client";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import reducer, { INITIAL_STATE, ActionType } from "@/context/reducer";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  // Handle signup logic
  const onSignup = async () => {
    try {
      dispatch({ type: ActionType.SET_LOADING, payload: true });
      const response = await axios.post("/api/users/signup", {
        username,
        password,
        email,
      });
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: error instanceof Error ? error.message : String(error),
      });
    } finally {
      dispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    // Enable the button if all fields have values, disable otherwise
    if (email.length > 0 && password.length > 0 && username.length > 0) {
      setButtonDisabled(false); // Enable button
    } else {
      setButtonDisabled(true); // Disable button
    }
  }, [email, password, username]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {state.apiRequstContext.isLoading ? "Processing" : "Signup"}
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
              value={username}
              onChange={(e) => setUserName(e.target.value)}
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
            onClick={onSignup}
            className={`w-full p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              buttonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
            disabled={buttonDisabled}
          >
            {state.apiRequstContext.isLoading ? "Signing up..." : "Signup"}
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
