"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type DataProps = {
  id: number;
  username: string;
  email: string;
};

export default function GymVisitsPage() {
  const [data, setData] = useState<DataProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/api/users/profile", { withCredentials: true }) // Ensure cookies are sent
      .then((response) => {
        setData(response.data.user); // Adjust based on actual response structure
        console.log("User page", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-600">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome, {data?.username}!
        </h1>
        <p className="text-gray-600 text-center">
          Check your recent visits and manage your gym activities here.
        </p>
        {/* Add more content here as needed */}
      </div>
    </div>
  );
}
