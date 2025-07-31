import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Profile from "../components/dashboard/Profile";
import AvailableCourses from "../components/dashboard/AvailableCourses";
import MyCourses from "../components/dashboard/MyCourses";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <Profile />
        <AvailableCourses />
        <MyCourses />
      </main>
    </div>
  );
};

export default Dashboard;
