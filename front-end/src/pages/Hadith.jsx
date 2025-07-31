import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import hadithImg from "../assets/images/hadith.png";

const Hadith = () => {
  const [activeTab, setActiveTab] = useState("Introduction to Hadith");

  const tabs = [
    "Introduction to Hadith",
    "Life of Prophet Muhammad ﷺ",
    "Types of Hadith",
    "Famous Hadith Books",
    "Study Hadith",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Introduction to Hadith":
        return (
          <>
            <h3 className="text-xl text-[#da9100] font-bold">
              Introduction to Hadith
            </h3>
            <p>
              Hadith refers to the sayings, actions, and approvals of Prophet
              Muhammad (ﷺ). It’s a major source of Islamic law and guidance
              after the Quran.
            </p>
          </>
        );
      case "Life of Prophet Muhammad ﷺ":
        return (
          <>
            <h3 className="text-xl text-[#da9100] font-bold">
              The Life of Prophet Muhammad ﷺ
            </h3>
            <p>
              Studying the Prophet’s life helps us understand the context of
              Hadith. His patience, kindness, justice, and sincerity are
              timeless examples for all Muslims.
            </p>
          </>
        );
      case "Types of Hadith":
        return (
          <>
            <h3 className="text-xl text-[#da9100] font-bold">
              Types of Hadith
            </h3>
            <p>
              There are various types of Hadith based on authenticity, such as
              Sahih (authentic), Hasan (good), and Da'if (weak). Scholars have
              strict criteria to classify them.
            </p>
          </>
        );
      case "Famous Hadith Books":
        return (
          <>
            <h3 className="text-xl text-[#da9100] font-bold">
              Famous Hadith Books
            </h3>
            <p>
              Learn from trusted collections like Sahih Bukhari, Sahih Muslim,
              Sunan Abu Dawood, and others. These books contain verified Hadith
              narrated by reliable companions.
            </p>
          </>
        );
      case "Study Hadith":
        return (
          <>
            <h3 className="text-xl text-[#da9100] font-bold">Study Hadith</h3>
            <p>
              Our course helps you understand Hadith, analyze narrators, and
              apply teachings in daily life. Develop love for the Prophet ﷺ and
              live by his Sunnah.
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
          src={hadithImg}
          alt="Hadith Course"
          className="w-64 md:w-80 rounded-xl shadow-lg hover:shadow-[#FFD700]/50 transition duration-300"
        />
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#967232] mb-4">
            Hadith Course | Understand the Teachings of the Prophet ﷺ
          </h2>
          <p className="text-gray-300 mb-4">
            This Hadith Course introduces you to the sayings and traditions of
            the Prophet Muhammad (ﷺ). Learn the types of Hadith, study authentic
            sources, and strengthen your understanding of Islam.
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

      {/* Tab Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mt-12">
        {tabs.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(label)}
            className={`px-5 py-2 rounded-lg cursor-pointer border transition
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

export default Hadith;
