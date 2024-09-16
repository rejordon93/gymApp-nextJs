"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type DailyVisits = {
  day: string; // e.g., "2024-09-16"
  visits: number;
};

type WeeklyVisits = {
  week: string; // e.g., "Week 1", "Week 2"
  visits: number;
};

type MonthlyVisits = {
  month: string; // e.g., "January", "February"
  visits: number;
};

export default function GymVisitsPage() {
  const [userData, setUserData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("/api/users/user");
        setUserData(res.data.data.username);
        console.log(res.data);
      } catch (err: any) {
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };
    getUserDetails();
  }, []);

  // Example visit data
  const dailyVisits: DailyVisits[] = [
    { day: "Monday", visits: 3 },
    { day: "Tuesday", visits: 4 },
    { day: "Wednesday", visits: 2 },
    { day: "Friday", visits: 1 },
    { day: "Saturday", visits: 2 },
    { day: "Sunday", visits: 3 },
    // Add more daily visit data as needed
  ];

  const weeklyVisits: WeeklyVisits[] = [
    { week: "Week 1", visits: 10 },
    { week: "Week 2", visits: 12 },
    { week: "Week 3", visits: 15 },
    { week: "Week 4", visits: 20 },
  ];

  const monthlyVisits: MonthlyVisits[] = [
    { month: "January", visits: 5 },
    { month: "February", visits: 13 },
    { month: "March", visits: 23 },
    { month: "May", visits: 15 },
    { month: "June", visits: 16 },
    { month: "July", visits: 29 },
    { month: "August", visits: 7 },
    { month: "September", visits: 17 },
    { month: "October", visits: 25 },
    { month: "November", visits: 12 },
    { month: "December", visits: 4 },
  ];

  const dailyChartData = {
    labels: dailyVisits.map((data) => data.day),
    datasets: [
      {
        label: "Daily Gym Visits",
        data: dailyVisits.map((data) => data.visits),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weeklyChartData = {
    labels: weeklyVisits.map((data) => data.week),
    datasets: [
      {
        label: "Weekly Gym Visits",
        data: weeklyVisits.map((data) => data.visits),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const monthlyChartData = {
    labels: monthlyVisits.map((data) => data.month),
    datasets: [
      {
        label: "Monthly Gym Visits",
        data: monthlyVisits.map((data) => data.visits),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `Visits: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div>
      <h1>Welcome {userData}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div
        style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "20px" }}
      >
        <div>
          <Bar data={dailyChartData} options={options} />
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <h2>Weekly Gym Visits</h2>
            <Bar data={weeklyChartData} options={options} />
          </div>
          <div style={{ flex: 1 }}>
            <h2>Monthly Gym Visits</h2>
            <Bar data={monthlyChartData} options={options} />
          </div>
        </div>
      </div>
      <h1>Favorite workouts</h1>
    </div>
  );
}
