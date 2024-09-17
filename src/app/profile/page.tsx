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
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/users/user")
      .then((response) => {
        setData(response.data.data);
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
