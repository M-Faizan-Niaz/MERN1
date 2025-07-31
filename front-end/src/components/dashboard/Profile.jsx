import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/v1/users/me", { withCredentials: true })
      .then((res) => setUser(res.data.data.user))
      .catch((err) => console.error("Failed to fetch user", err));
  }, []);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold text-green-700">
        Welcome, {user.name}
      </h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default Profile;
