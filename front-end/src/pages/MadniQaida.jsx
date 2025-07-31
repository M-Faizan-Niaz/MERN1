import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import nooraniImg from "../assets/images/madniqaida.png"; // Replace with your image
import featureImg from "../assets/images/word-pronunciation.png"; // Add your actual feature image

const tabSections = {
  "What is Madni  Qaida": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        What is Madni Qaida?
      </h3>
      <p>
        Madni Qaida is the first course for children, elders and
        suitable for all ages to understand how to read the Holy Quran
        correctly. Learn Madni Qaida online from our proficient Quran Tutors.
      </p>
    </>
  ),
  "Why Madni Qaida Course is important to learn?": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Why Madni Qaida Course is important to learn?
      </h3>
      <p>
        Madni qaida course is very important for Muslims. This course provides
        full guidance of Arabic alphabets. Rehmani Qaida is a simple way of
        teaching the Arabic language and the Holy Quran. It is designed to
        educate Muslim kids and adults who don’t speak Arabic to correctly read
        Quranic Arabic. It serves as a Quran guidance application that assists
        in enhancing Quran recitation and reading skills.
      </p>
    </>
  ),
  "Why Choose Us": (
    <>
      <h3 className="text-xl text-[#da9100] font-bold">
        Why Choose Us for Madni Qaida?
      </h3>
      <p>
        We offer personalized online classes, flexible timings, certified
        tutors, and 1-on-1 attention. Whether you're a parent or learner, we
        ensure the best guidance for your Quranic journey.
      </p>
    </>
  ),
};

const MadniQaida = () => {
  const [activeTab, setActiveTab] = useState("What is Madni Qaida?");

  return (
    <div className="bg-black text-white px-4 md:px-12 py-16 mt-15">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src={nooraniImg}
          alt="Madni Qaida"
          className="w-60 md:w-80 object-cover rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_20px_#FFD700]"
        />
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#967232] mb-4">
            Madni Qaida Course | Read Quran Correctly with Madani Qaida
          </h2>
          <p className="text-gray-300 mb-4">
            Learning the Quran and reciting it correctly is essential for every
            Muslim. At the Al-Hidayah Quran Academy, we are committed to helping
            you achieve accurate recitation of the Holy Quran through our
            comprehensive Madni Qaida Course...
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

      {/* Key Features Section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <h3 className="text-center text-3xl font-bold text-[#c49833] mb-10 tracking-wider">
          Key Features
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center text-gray-300">
          {[
            {
              title: "Male and Female Tutors",
              desc: "We provide highly qualified male and female Quran teachers to guide you throughout your journey.",
            },
            {
              title: "Proper Tajweed & Interface + Tashkeel",
              desc: "Master correct pronunciation and Arabic script with ease, ensuring accurate Quran recitation.",
            },
            {
              title: "Interactive Video Lessons",
              desc: "Engaging lessons enhance understanding with visual examples and step-by-step guidance.",
            },
            {
              title: "22 Comprehensive Chapters",
              desc: "Our Madani Qaida course has 22 well-structured chapters covering essential rules.",
            },
            {
              title: "Important Pronunciation Notes",
              desc: "Focus on correct articulation and common mistakes, improving your fluency.",
            },
            {
              title: "Multilingual Support",
              desc: "Learn in your preferred language with our international tutor support.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-xl border border-[#FFD700]/20 shadow-lg hover:shadow-[0_0_20px_#FFD700]/30 transition"
            >
              <h4 className="text-lg text-[#da9100] font-semibold mb-2">
                {feature.title}
              </h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Word by Word Pronunciation */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-gray-300">
            <h3 className="text-center text-3xl font-bold text-[#c49833] mb-10 tracking-wider">
              Word by Word Pronunciation
            </h3>
            <p className="mb-1">
              Our Word-by-Word mode is a revolutionary way to master the
              recitation of Quranic words. With clear audio, interactive
              visuals, and real-time feedback, students can develop a strong
              foundation in Tajweed and correct pronunciation.
            </p>
            <p>
              With guided lessons on every word and verse, even beginners can
              gain fluency and confidence in reading the Quran aloud with
              precision.
            </p>
          </div>
          <img
            src={featureImg}
            alt="Word-by-Word Feature"
            className="w-64 md:w-80 rounded-lg shadow-lg transition duration-300 hover:shadow-[0_0_20px_#FFD700]"
          />
        </div>
      </div>

      {/* Related Courses */}
      <div className="mt-24">
        <h3 className="text-center text-3xl font-bold text-[#c49833] mb-8 tracking-wider">
          RELATED COURSES
        </h3>
        <Courses />
      </div>
    </div>
  );
};

export default MadniQaida;
