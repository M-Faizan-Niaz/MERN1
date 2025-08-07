import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Al Hidayah</h2>
      <div className="sidebar-options">
        <NavLink to="/add-teacher" className="sidebar-option">
          <img src={assets.add_icon} alt="Add Teacher" />
          <p>Add Teacher</p>
        </NavLink>

        <NavLink to="/list-teachers" className="sidebar-option">
          <img src={assets.order_icon} alt="List Teachers" />
          <p>List Teachers</p>
        </NavLink>

      
       
        <NavLink to="/enrollments" className="sidebar-option">
          <img src={assets.order_icon} alt="Enrollments" />
          <p>Enrolled Students</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
