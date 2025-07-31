import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaChalkboardTeacher, FaRegNewspaper } from "react-icons/fa";
import { TbCash } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { FiGift } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

const navItems = [
  { icon: <FaHome />, label: "Home", path: "/" },
  { icon: <FaChalkboardTeacher />, label: "Courses", path: "/courses" },
  { icon: <TbCash />, label: "Fee", path: "/fee" },
  { icon: <FiGift />, label: "Free Trial", path: "/free-trial" },
  { icon: <FaChalkboardTeacher />, label: "Teachers", path: "/teachers" },
];

const Header = () => {
  return (
    <header className="bg-black w-full mt-6 px-4 md:px-8 py-3 shadow-lg z-50 relative">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Al-Hidaya Logo"
            className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F6F6F6] hover:text-[#96732] transition duration-300 hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)] hover:scale-105 cursor-pointer">
            AL-HIDAYA QURAN ACADEMY
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 relative">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `relative group flex items-center gap-2 font-medium text-sm sm:text-base transition-all duration-300 ${
                  isActive ? "text-[#c49833]" : "text-[#FEFAE0]"
                }`
              }
            >
              <div className="transition duration-300 group-hover:text-[#c49833]">
                {item.icon}
              </div>
              <span className="group-hover:text-[#c49833] transition-colors duration-300">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c49833] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          ))}

          {/* Contact Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-2 text-[#FEFAE0] font-medium text-sm sm:text-base cursor-pointer group-hover:text-[#c49833] transition-all duration-300">
              <IoIosContact className="text-lg" />
              <span>Contact</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c49833] group-hover:w-full transition-all duration-300"></span>
            </div>
            <div className="absolute top-full left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition-all duration-300 origin-top z-40">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `block px-4 py-2 transition-colors duration-200 ${
                    isActive ? "bg-[#c49833] text-white" : "hover:bg-[#c49833]"
                  } rounded-t-md`
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `block px-4 py-2 transition-colors duration-200 ${
                    isActive ? "bg-[#c49833] text-white" : "hover:bg-[#c49833]"
                  } rounded-b-md`
                }
              >
                About Us
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
