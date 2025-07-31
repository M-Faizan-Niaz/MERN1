import React, { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { motion } from "framer-motion";

import teacher1 from "../assets/images/teacher1.jpg";


// Teacher data
const teachers = [
  {
    name: "Ustadh Jamil Ahmed",
    subject: "Tajweed Specialist",
    image: teacher1,
    bio: "Ustadh Jamil Ahmed has over 15 years of experience teaching Tajweed to students across the globe. His passion lies in perfecting pronunciation and instilling love for the Quran.",
  },
 
];

const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const closeModal = () => setSelectedTeacher(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 px-6 md:px-12 mb-80">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">
          <FaBookReader className="inline-block text-[#c49833] mb-2 mr-8" />
          Meet Our Esteemed Teachers
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Our scholars are passionate educators dedicated to teaching with
          wisdom, clarity, and sincerity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedTeacher(teacher)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="cursor-pointer bg-white/90 border border-gray-200 rounded-2xl shadow-xl hover:shadow-yellow-200/60 transition-all duration-300 backdrop-blur-md"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 text-md">{teacher.subject}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTeacher && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 "
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl text-center"
          >
            <img
              src={selectedTeacher.image}
              alt={selectedTeacher.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedTeacher.name}
            </h2>
            <p className="text-yellow-700 font-medium">
              {selectedTeacher.subject}
            </p>
            <p className="text-gray-600 mt-4">{selectedTeacher.bio}</p>

            <button
              onClick={closeModal}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Teachers;
