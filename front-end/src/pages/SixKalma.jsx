import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses"; // Reuse your existing Courses component
import kalmaImg from "../assets/images/namaz.png"; // Replace with your actual image path

const tabSections = {
  "Introduction to 6 Kalma Course": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Introduction to the 6 Kalma Course
      </h3>
      <p>
        The 6 Kalmas are a vital part of Islamic belief and memorization for
        every Muslim. Our course introduces the meaning, pronunciation, and
        importance of each Kalma. Ideal for both kids and adults, this course
        helps build a strong foundation of faith.
      </p>
    </>
  ),
  "Why Choose Us": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Why Choose Us for the 6 Kalma Course
      </h3>
      <p>
        We provide expert guidance, certified teachers, flexible schedules, and
        engaging online classes. Our personalized approach ensures you or your
        child learns with clarity, sincerity, and motivation.
      </p>
    </>
  ),
  "Benefits of Reciting the 6 Kalma": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Benefits of Reciting the 6 Kalmas
      </h3>
      <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2">
        <li>Strengthens your belief (Iman) and connection with Allah</li>
        <li>Purifies the heart and increases spiritual awareness</li>
        <li>Helps in memorizing essential Islamic declarations</li>
        <li>Enhances your understanding of Tawheed and Islamic teachings</li>
        <li>Recommended for children to build early Islamic knowledge</li>
      </ul>
    </>
  ),
};

const KalmaCourse = () => {
  const [activeTab, setActiveTab] = useState("Introduction to 6 Kalma Course");

  return (
    <div className="bg-black text-white px-4 md:px-12 py-16 mt-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src={kalmaImg}
          alt="6 Kalma"
          className="w-60 md:w-80 object-cover rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_20px_#FFD700]"
        />
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#967232] mb-4">
            6 Kalma Course | Strengthen Your Faith
          </h2>
          <p className="text-gray-300 mb-4">
            Learn the 6 Kalmas of Islam with meaning, pronunciation, and proper
            understanding. This course is ideal for children, new Muslims, and
            anyone looking to memorize or revise the Kalmas with clarity.
          </p>
          <p className="text-gray-300 mb-6">
            Begin your journey of Islamic knowledge and spiritual connection
            through structured, interactive lessons.
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

export default KalmaCourse;
