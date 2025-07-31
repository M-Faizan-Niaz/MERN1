import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-white shadow h-screen p-6 space-y-4">
      <h2 className="text-xl font-bold text-green-700">Quran Academy</h2>
      <nav className="space-y-2">
        <Link to="/dashboard" className="block hover:text-green-600">
          Dashboard
        </Link>
        <Link to="/dashboard/my-courses" className="block hover:text-green-600">
          My Courses
        </Link>
        <Link
          to="/dashboard/available-courses"
          className="block hover:text-green-600"
        >
          Enroll
        </Link>
        <button
          onClick={handleLogout}
          className="mt-4 text-red-500 hover:underline"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
