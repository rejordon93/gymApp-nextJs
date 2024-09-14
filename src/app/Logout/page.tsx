"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function LogoutPage() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful", { duration: 5000 });
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error("You are already logged out", { duration: 5000 });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Logout
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Are you sure you want to log out?
        </p>
        <button
          onClick={logout}
          className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Logout
        </button>
        <Link
          href="/profile"
          className="block text-center text-indigo-600 hover:underline mt-4"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}
