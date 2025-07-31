import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import tafseerImg from "../assets/images/tafseer.png"; // Replace with actual image path

const TafseerCourse = () => {
  const [activeTab, setActiveTab] = useState("What You'll Study");

  const tabs = ["What You'll Study", "Why Choose Us"];

  const renderContent = () => {
    switch (activeTab) {
      case "What You'll Study":
        return (
          <>
            <h3 className="text-xl text-[#FFD700] font-bold mb-2">
              What You'll Study in the Tafseer Course
            </h3>
            <p>
              In this comprehensive Tafseer course, you'll gain a deep
              understanding of the Quran, exploring its meanings, themes, and
              messages. We focus on classical Tafseer interpretations,
              contextual understanding, and practical applications in daily
              life.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Verse-by-verse explanation of selected Surahs</li>
              <li>Asbab al-Nuzul (Revelation Context)</li>
              <li>Understanding Quranic Arabic and grammar</li>
              <li>Themes, wisdom, and practical lessons</li>
            </ul>
          </>
        );
      case "Why Choose Us":
        return (
          <>
            <h3 className="text-xl text-[#FFD700] font-bold mb-2">
              Why Choose Us
            </h3>
            <p>
              We provide a unique learning experience designed to connect your
              heart with the Quran. Our curriculum is taught by certified
              scholars and is suitable for learners of all levels.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Experienced and certified Tafseer instructors</li>
              <li>Interactive and student-focused learning</li>
              <li>Regular assessments and learning materials</li>
              <li>Flexible schedules for global students</li>
            </ul>
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
          src={tafseerImg}
          alt="Tafseer Course"
          className="w-64 md:w-80 rounded-xl shadow-lg hover:shadow-[#FFD700]/50 transition duration-300"
        />
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-4">
            Tafseer Course | Understand the Message of the Quran
          </h2>
          <p className="text-gray-300 mb-4">
            Learn the deep meanings of the Quran with our Tafseer course taught
            by qualified scholars. Build a spiritual connection and apply
            Quranic wisdom to your life.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/free-trial"
              className="bg-[#FFD700] hover:bg-[#e6c200] text-black font-semibold py-2 px-4 rounded-full transition"
            >
              Get Free Trial
            </Link>
            <Link
              to="/fee"
              className="border border-[#FFD700] hover:bg-[#FFD700] hover:text-black text-white font-semibold py-2 px-4 rounded-full transition"
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
            className={`px-5 py-2 rounded-full border transition
              ${
                activeTab === label
                  ? "bg-[#FFD700] text-black border-[#FFD700]"
                  : "bg-[#1f1f1f] text-white border border-[#FFD700]/30 hover:bg-[#FFD700] hover:text-black"
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
        <h3 className="text-center text-2xl font-bold text-[#FFD700] mb-8">
          RELATED COURSES
        </h3>
        <Courses />
      </div>
    </div>
  );
};

export default TafseerCourse;
