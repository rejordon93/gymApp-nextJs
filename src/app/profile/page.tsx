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
        // Make sure the data path matches the server response structure
        setData(response.data.user); // Adjust based on actual response structure
        console.log("User page", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Hello {data?.username}</h1>
    </div>
  );
}
