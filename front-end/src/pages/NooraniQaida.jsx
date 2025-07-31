import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import nooraniImg from "../assets/images/nooraniqaida.png"; // Replace with your image

const tabSections = {
  "Why Learn Noorani Qaida": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Why It’s Important to Learn the Noorani Qaida
      </h3>
      <p>
        Noorani Qaida is the foundation for reading the Quran with proper
        Tajweed. It teaches Arabic letters, pronunciation, and joining words,
        which are essential for every Muslim starting their Quran journey.
      </p>
    </>
  ),
  "How to Learn Noorani Qaida": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        How to Learn Noorani Qaida
      </h3>
      <p>
        We start by teaching each letter with correct Makharij (pronunciation),
        then move to joining letters, short and long vowels, and reading full
        words fluently. Our step-by-step method ensures strong learning for kids
        and adults alike.
      </p>
    </>
  ),
  "What's Special": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        What’s Special About Our Noorani Qaida Course
      </h3>
      <p>
        Our course is designed with interactive lessons, visual guides,
        certified tutors, and real-time feedback to make learning engaging and
        effective. Suitable for beginners of all ages.
      </p>
    </>
  ),
  "What You'll Learn": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        What You Will Learn in Noorani Qaida
      </h3>
      <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2">
        <li>Arabic Alphabets and Pronunciation</li>
        <li>Joining Letters and Syllables</li>
        <li>Short and Long Vowels</li>
        <li>Tanween, Sukoon, Madd, and Shaddah</li>
        <li>Word and Sentence reading</li>
      </ul>
    </>
  ),
  "Course for Kids": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Noorani Qaida Course For Kids
      </h3>
      <p>
        Specially designed to be engaging and fun, our kids' course uses
        storytelling, repetition, and rewards to help young learners confidently
        grasp basic Tajweed and Arabic reading.
      </p>
    </>
  ),
  "Course for Adults": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Noorani Qaida Course For Adults
      </h3>
      <p>
        It's never too late to start! Our adult-friendly course is paced gently
        to help beginners feel comfortable while learning how to read Arabic
        fluently and correctly with Tajweed.
      </p>
    </>
  ),
  "Why Choose Us": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Why Choose Us for Noorani Qaida
      </h3>
      <p>
        We offer personalized online classes, flexible timings, certified
        tutors, and 1-on-1 attention. Whether you're a parent or learner, we
        ensure the best guidance for your Quranic journey.
      </p>
    </>
  ),
};

const NooraniQaida = () => {
  const [activeTab, setActiveTab] = useState("Why Learn Noorani Qaida");

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
            Noorani Qaida Course | Learn Quran Reading from the Basics
          </h2>
          <p className="text-gray-300 mb-4">
            Our Noorani Qaida Course is the best starting point for learning how
            to read Arabic and the Quran. From alphabets to complete words, we
            help you build your foundation with perfect pronunciation.
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

export default NooraniQaida;
