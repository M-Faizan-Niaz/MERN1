import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import nazrahImg from "../assets/images/nazrah.png"; // Replace with your image path

const NazrahQuran = () => {
  const [activeTab, setActiveTab] = useState("Introduction to Nazrah Quran");

  const tabs = [
    "Introduction to Nazrah Quran",
    "What Will You Learn",
    "Benefits of Nazrah Quran",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Introduction to Nazrah Quran":
        return (
          <>
            <h3 className="text-xl text-[#da9100] font-bold">
              Introduction to Nazrah Quran
            </h3>
            <p>
              Nazrah Quran means reading the Quran with proper pronunciation and
              fluency by looking at the text. It is the first and most important
              step before learning Tajweed or memorization.
            </p>
          </>
        );
      case "What Will You Learn":
        return (
          <>
            <h3 className="text-xl text-[#da9100] font-bold">
              What Will You Learn
            </h3>
            <p>
              You will learn how to read Arabic letters, join them into words,
              pronounce Quranic words correctly, and recite each verse fluently.
              We focus on Makharij (points of articulation) and basic Tajweed
              rules in this course.
            </p>
          </>
        );
      case "Benefits of Nazrah Quran":
        return (
          <>
            <h3 className="text-xl text-[#da9100] font-bold">
              Benefits of Nazrah Quran
            </h3>
            <p>
              This course builds a strong foundation for your Quran journey. It
              helps improve concentration, spiritual connection, and fluency in
              reading the Quran. It is ideal for kids and beginners.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white px-4 md:px-12 py-16 mt-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src={nazrahImg}
          alt="Nazrah Quran Course"
          className="w-64 md:w-80 rounded-xl shadow-lg hover:shadow-[#FFD700]/50 transition duration-300"
        />
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#967232] mb-4">
            Nazrah Quran Course | Build Your Quran Reading Skills
          </h2>
          <p className="text-gray-300 mb-4">
            Our Nazrah Quran course is perfect for beginners and kids who want
            to start reading the Quran fluently. With experienced teachers and a
            structured plan, you will progress confidently.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/free-trial"
              className="border border-[#FFD700] hover:bg-[#da9100] hover:text-black text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Get Free Trial
            </Link>
            <Link
              to="/fee"
              className="border border-[#FFD700] hover:bg-[#da9100] hover:text-black text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Fees and Plan
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mt-12">
        {tabs.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(label)}
            className={`px-5 py-2 rounded-lg border cursor-pointer transition
              ${
                activeTab === label
                  ? "bg-[#da9100] text-black"
                  : "bg-[#1f1f1f] text-white border-[#FFD700]/30 hover:bg-[#da9100]  hover:text-black"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-12 max-w-5xl mx-auto text-gray-300 space-y-6">
        {renderContent()}
      </div>

      {/* Related Courses */}
      <div className="mt-16">
        <h3 className="text-center text-3xl font-bold text-[#c49833] mb-8 tracking-wider">
          RELATED COURSES
        </h3>
        <Courses />
      </div>
    </div>
  );
};

export default NazrahQuran;
