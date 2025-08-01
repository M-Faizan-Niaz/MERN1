import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <Link
          to="/admin/users"
          className="bg-blue-100 p-4 rounded shadow hover:bg-blue-200"
        >
          Manage Users
        </Link>
        <Link
          to="/admin/courses"
          className="bg-green-100 p-4 rounded shadow hover:bg-green-200"
        >
          Manage Courses
        </Link>
        <Link
          to="/admin/enrollments"
          className="bg-yellow-100 p-4 rounded shadow hover:bg-yellow-200"
        >
          Manage Enrollments
        </Link>
        <Link
          to="/admin/teachers"
          className="bg-purple-100 p-4 rounded shadow hover:bg-purple-200"
        >
          Manage Teachers
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
