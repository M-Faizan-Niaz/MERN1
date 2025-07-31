import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses"; // Your existing Courses component
import tajweedImg from "../assets/images/namaz.png"; // Replace with your image path

const tabSections = {
  "Introduction to Tajweed": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">What is Tajweed?</h3>
      <p>
        Tajweed refers to the set of rules for correct pronunciation and
        recitation of the Quran. It ensures that each letter is articulated from
        its proper place with all its qualities. Our course introduces Tajweed
        to learners of all ages in an easy and effective manner.
      </p>
    </>
  ),
  "Tajweed Course Overview": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Tajweed Course Structure
      </h3>
      <p>
        This course is divided into beginner, intermediate, and advanced levels.
        It starts from the basics of Arabic letters and pronunciation, then
        builds up to fluency in Quranic recitation with proper Tajweed. You’ll
        practice live with tutors and receive personal feedback.
      </p>
    </>
  ),
  "Key Tajweed Rules Covered": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Key Tajweed Rules Taught
      </h3>
      <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2">
        <li>Makharij (Points of Articulation)</li>
        <li>Rules of Noon Sakinah & Tanween</li>
        <li>Rules of Meem Sakinah</li>
        <li>Madd (Lengthening) rules</li>
        <li>Ghunnah and Qalqalah</li>
        <li>Heavy and Light Letters</li>
      </ul>
    </>
  ),
  "Learning Methods": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">How You'll Learn</h3>
      <p>
        Our teaching methods include one-on-one live sessions, visual aids,
        practice exercises, and recorded lesson reviews. Whether you’re a child
        or adult, our expert tutors will guide you step-by-step toward mastering
        Tajweed.
      </p>
    </>
  ),
};

const TajweedCourse = () => {
  const [activeTab, setActiveTab] = useState("Introduction to Tajweed");

  return (
    <div className="bg-black text-white px-4 md:px-12 py-16 mt-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src={tajweedImg}
          alt="Tajweed Course"
          className="w-60 md:w-80 object-cover rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_20px_#FFD700]"
        />
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#967232] mb-4">
            Tajweed Course | Master Quranic Pronunciation
          </h2>
          <p className="text-gray-300 mb-4">
            Our Tajweed course is carefully designed to help you recite the
            Quran with proper pronunciation, clarity, and confidence. Learn from
            certified teachers through a structured and supportive online
            environment.
          </p>
          <p className="text-gray-300 mb-6">
            Whether you're new to Tajweed or looking to perfect your recitation,
            this course will elevate your Quranic journey.
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

      {/* Related Courses Section */}
      <div className="mt-20">
        <h3 className="text-center text-3xl font-bold text-[#c49833] mb-8 tracking-wider">
          RELATED COURSES
        </h3>
        <Courses />
      </div>
    </div>
  );
};

export default TajweedCourse;
