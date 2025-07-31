import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import namazImg from "../assets/images/namaz.png";

const tabContent = {
  "Introduction To Namaz": (
    <>
      <h3 className="text-xl  text-[#da9100] font-bold">
        Introduction to Namaz
      </h3>
      <p>
        Namaz is one of the five daily prayers in Islam, connecting Muslims with
        Allah. It strengthens faith and brings peace and discipline.
      </p>
      <h4 className="font-semibold text-white mt-4">What is Namaz?</h4>
      <p>
        Namaz is a set of daily prayers with specific actions and recitations.
        It is a time to thank Allah, seek guidance, and reflect on life.
      </p>
      <h4 className="font-semibold text-white mt-4">Why do we pray Namaz?</h4>
      <p>
        Muslims pray Namaz to connect with Allah, seek help, and show gratitude,
        keeping them close to their faith and purpose.
      </p>
      <h4 className="font-semibold text-white mt-4">
        Importance of Namaz in Islam
      </h4>
      <p>
        Namaz is a key part of Islam. It helps Muslims worship Allah, follow His
        teachings, and gain peace and self-control.
      </p>
    </>
  ),

  "Five Daily Prayers": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">Five Daily Prayers</h3>
      <p>
        Muslims pray five times a day: Fajr (before sunrise), Dhuhr (midday),
        Asr (afternoon), Maghrib (after sunset), and Isha (night). Each prayer
        has specific time, Rakats, and significance that bring discipline and
        connection with Allah.
      </p>
    </>
  ),

  "How To Perform Namaz": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">How To Perform Namaz</h3>
      <p>
        Namaz involves physical and verbal actions including Takbir, Qiyam
        (standing), Ruku (bowing), Sujood (prostration), and Tashahhud
        (sitting). Each step is performed with sincerity and concentration while
        reciting prescribed verses from the Quran and Duas.
      </p>
    </>
  ),

  "Why Choose Us": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">Why Choose Us</h3>
      <p>
        Our course is taught by expert scholars, designed for learners of all
        ages, and focuses on both theoretical and practical aspects of Namaz. We
        provide free trial, flexible timing, and a supportive learning
        environment.
      </p>
    </>
  ),
};

const Namaz = () => {
  const [activeTab, setActiveTab] = useState("Introduction To Namaz");

  return (
    <div className="bg-black text-white px-4 md:px-12 py-16 mt-15">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src={namazImg}
          alt="Namaz Course"
          className="w-60 md:w-80 object-cover rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_20px_#FFD700]"
        />
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#c49833] tracking-wider mb-4">
            Namaz Course | Understand Namaz with Simple Lessons
          </h2>
          <p className="text-gray-300 mb-4">
            The Namaz Course at International Quran Academy is designed to help
            you learn and perfect your prayer. You’ll learn the technique,
            actions, words, and purpose behind each prayer so you can offer it
            sincerely and correctly.
          </p>
          <p className="text-gray-300 mb-6">
            By the end of this course, you’ll perform Namaz with calmness,
            focus, and confidence. It’s suitable for all ages and levels.
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
      <div className="flex justify-center flex-wrap gap-4 mt-12 ">
        {Object.keys(tabContent).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg border transition font-medium cursor-pointer ${
              activeTab === tab
                ? "bg-[#da9100] text-black"
                : "bg-[#1f1f1f] text-white border-[#FFD700]/30 hover:bg-[#da9100]  hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Tab Content */}
      <div className="mt-12 max-w-5xl mx-auto space-y-4 text-gray-300">
        {tabContent[activeTab]}
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

export default Namaz;
