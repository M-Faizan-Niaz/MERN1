import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import memorizationImg from "../assets/images/quran-memorization.png";

const tabSections = {
  "Course Overview": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold mb-2">
        Quran Memorization Course
      </h3>
      <p>
        Memorizing the Quran is one of the most rewarding acts in Islam. At our
        International Quran Academy, we provide a structured, engaging, and
        highly personalized memorization course. Designed for children, teens,
        and adults — this course ensures steady progress with excellent
        retention and Tajweed.
      </p>
      <p className="mt-2">
        Our certified male and female Huffaz guide each student with 1-on-1
        attention, custom lesson plans, revision sessions, and regular
        evaluations.
      </p>
    </>
  ),
  "What You'll Learn": (
    <ul className="list-disc pl-5 space-y-2">
      <li>Memorization of Juz Amma to full Quran</li>
      <li>Tajweed rules alongside Hifz</li>
      <li>Daily Sabak, Sabki, and Manzil routine</li>
      <li>Confidence in accurate recitation and retention</li>
    </ul>
  ),
  "Why Choose Us": (
    <ul className="list-disc pl-5 space-y-2">
      <li>Expert certified Huffaz (male & female)</li>
      <li>Structured Hifz plan with accountability</li>
      <li>1-on-1 classes and flexible scheduling</li>
      <li>Multilingual support for global learners</li>
    </ul>
  ),
};

const QuranMemorizationCourse = () => {
  const [activeTab, setActiveTab] = useState("Course Overview");

  return (
    <div className="bg-black text-white px-4 md:px-12 py-16 mt-15">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src={memorizationImg}
          alt="Quran Memorization"
          className="w-60 md:w-80 object-cover rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_20px_#FFD700]"
        />
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#967232] mb-4">
            Quran Memorization Course | Hifz-ul-Quran with Tajweed
          </h2>
          <p className="text-gray-300 mb-6">
            This course ensures learners master the Quran through structured
            memorization techniques, proper Tajweed, and consistent
            teacher-guided sessions.
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
        {Object.keys(tabSections).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg border transition font-medium ${
              activeTab === tab
                ? "bg-[#da9100] text-black"
                : "bg-[#1f1f1f] text-white border-[#FFD700]/30 hover:bg-[#da9100] hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-12 max-w-5xl mx-auto space-y-4 text-gray-300">
        {tabSections[activeTab]}
      </div>

      {/* Related Courses */}
      <div className="mt-20">
        <h3 className="text-center text-3xl font-bold text-[#c49833] mb-8 tracking-wider">
          RELATED COURSES
        </h3>
        <Courses />
      </div>
    </div>
  );
};

export default QuranMemorizationCourse;
