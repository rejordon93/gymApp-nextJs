"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Profilepage() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("/api/users/user");
        setData(res.data.data.id);
        console.log(res.data);
      } catch (err: any) {
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };
    getUserDetails();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-semibold text-gray-900 text-center">
        Profile
      </h1>
      <hr className="my-4 border-gray-300" />
      <p className="text-lg text-gray-700 text-center">
        Welcome to your profile page.
      </p>
      <div className="mt-6 text-center">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : data ? (
          <h2 className="text-xl">
            <Link
              href={`/profile/${data}`}
              className="text-blue-500 hover:underline"
            >
              There is {data} Profile Details
            </Link>
          </h2>
        ) : (
          <h2 className="text-xl text-gray-600">No user details available</h2>
        )}
      </div>
    </div>
  );
}
