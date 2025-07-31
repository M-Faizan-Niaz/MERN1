import React from "react";
import { Ri24HoursLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import {
  MdOutlineTranslate,
  MdDevices,
  MdOutlinePersonPin,
} from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

const features = [
  {
    icon: <Ri24HoursLine className="text-4xl text-[#996515]" />,
    title: "Learn Quran Online Easily With Flexible Schedule",
    description:
      "Take lessons anytime, anywhere. Our online Quran academy offers 24/7 availability for students to learn Islamic teachings at their convenience.",
  },
  {
    icon: <MdOutlinePersonPin className="text-4xl text-[#996515]" />,
    title: "Personalized Learning",
    description:
      "One-to-one classes ensure full attention from the teacher. This method improves learning speed and comprehension dramatically.",
  },
  {
    icon: <BiSupport className="text-4xl text-[#996515]" />,
    title: "Try Free Before You Start",
    description:
      "Book a free trial class to experience our teaching system. Contact us via email or WhatsApp to get started with no cost.",
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-[#996515]" />,
    title: "Choose Your Teacher",
    description:
      "We offer both male and female tutors. You can pick the teacher that fits your needs, with detailed profiles to help you decide.",
  },
  {
    icon: <MdOutlineTranslate className="text-4xl text-[#996515]" />,
    title: "Learn Quran Online in Your Own Language",
    description:
      "Multilingual tutors available for Urdu, Hindi, English, Arabic, and more — making Quran education accessible to everyone.",
  },
  {
    icon: <MdDevices className="text-4xl text-[#996515]" />,
    title: "Anywhere, Any Device",
    description:
      "All you need is a stable internet connection and a mobile or laptop. Learn Quran anytime, from anywhere in the world.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
