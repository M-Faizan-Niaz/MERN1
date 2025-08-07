import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(`${url}/api/teachers/list`);
      if (response.data.success) {
        setTeachers(response.data.data);
      } else {
        toast.error("Failed to fetch teachers");
      }
    } catch (err) {
      toast.error("Server Error");
    }
  };

  const removeTeacher = async (teacherId) => {
    try {
      const response = await axios.post(`${url}/api/teachers/remove`, {
        id: teacherId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchTeachers(); // refresh list
      } else {
        toast.error("Deletion failed");
      }
    } catch (err) {
      toast.error("Server Error");
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="list-teachers add flex-col">
      <p>All Teachers</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Photo</b>
          <b>Name</b>
          <b>Category</b>
          <b>Email</b>
          <b>Action</b>
        </div>
        {teachers.map((teacher, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/uploads/` + teacher.image} alt={teacher.name} />

            <p>{teacher.name}</p>
            <p>{teacher.category}</p>
            <p>{teacher.email}</p>
            <p
              onClick={() => removeTeacher(teacher._id)}
              className="delete-btn"
              title="Delete"
            >
              ✕
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
