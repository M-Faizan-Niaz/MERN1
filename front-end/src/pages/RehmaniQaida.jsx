import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import nooraniImg from "../assets/images/rehmaniqaida.png"; // Replace with your image

const tabSections = {
  "What is Rehamni Qaida": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        What is Rehmani Qaida
      </h3>
      <p>
        Rehmani-qaida-English is the first course for children, elders and
        suitable for all ages to understand how to read the Holy Quran
        correctly.Learn Rehmani Qaida online from our proficient Quran Tutors.
      </p>
    </>
  ),
  "Why Rehamni Qaida Course is important to learn?": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Why Rehamni Qaida Course is important to learn?
      </h3>
      <p>
        Rehmani qaida course is very important for Muslims. This course provides
        full guidance of Arabic alphabet’s. Rehmani Qaida is a simple way of
        teaching the Arabic language and the Holy Quran. It is designed to
        educate Muslim kids and adults who don’t speak Arabic to correctly read
        Quranic Arabic. t serves as a Quran guidance application that assists in
        enhancing Quran recitation and reading skills.
      </p>
    </>
  ),

  "Why Choose Us": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Why Choose Us for Rehmani Qaida?
      </h3>
      <p>
        We offer personalized online classes, flexible timings, certified
        tutors, and 1-on-1 attention. Whether you're a parent or learner, we
        ensure the best guidance for your Quranic journey.
      </p>
    </>
  ),
};

const RehmaniQaida = () => {
  const [activeTab, setActiveTab] = useState("What is Rehmani Qaida?");

  return (
    <div className="bg-black text-white px-4 md:px-12 py-16 mt-15">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src={nooraniImg}
          alt="Noorani Qaida"
          className="w-60 md:w-80 object-cover rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_20px_#FFD700]"
        />
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#967232]  mb-4">
            Rehmani Qaida Course | Your First Steps in Quran Reading
          </h2>
          <p className="text-gray-300 mb-4">
           Welcome to our Quran international academy. Our academy has a good reputation for delivering high-quality education and courses for its Exposure to quran words very early. Exposure to early principles of tajweed. It sharpens pronunciation. This course aids and improves writing skills. It helps to perfect recitation.

The rehmani Qaida course is also new course. The Rehmani Qaida in English is a complete guide for learning the basics of the Arabic script and the proper recitation of the Quran. It is almost the same to the Noorani Qaida and also planned for starters, mainly children. It also assists students to master the Arabic words and the basic principles of tajweed (the laws of pronunciation and sound when reciting the Quran).
          </p>
          <p className="text-gray-300 mb-6">
            Whether you're a beginner, adult, or child — this course fits all.
            Learn step-by-step with expert teachers and interactive materials.
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
                : "bg-[#1f1f1f] text-white border-[#FFD700]/30 hover:bg-[#da9100]  hover:text-black"
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
      <div className="mt-16">
        <h3 className="text-center text-3xl font-bold text-[#c49833] mb-8 tracking-wider">
          RELATED COURSES
        </h3>
        <Courses />
      </div>
    </div>
  );
};

export default RehmaniQaida;
