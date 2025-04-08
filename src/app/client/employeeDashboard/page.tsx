import React from "react";
import DashBoardNav from "./components/DashboardNav/page";
import Dashboard from "./components/Dashboard/page";

export default function EmployeeDashboard() {
  return (
    <div>
      <DashBoardNav />
      <Dashboard />
    </div>
  );
}
