import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  axios
    .get("/api/v1/courses")
    .then((res) => {
      const courseList = res?.data?.data?.courses;
      if (Array.isArray(courseList)) {
        setCourses(courseList);
      } else {
        setCourses([]);
        console.warn("Unexpected API response format", res.data);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Failed to load courses", err);
      setCourses([]);
      setLoading(false);
    });
}, []);


  if (loading) return <p className="text-center py-20">Loading courses...</p>;

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-20 pb-80 mt-10">
      <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-[#111] rounded-2xl shadow-lg hover:shadow-[0_0_15px_#96723299] p-6 transition-transform duration-500 transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-6 text-4xl text-[#967232]">
              📖
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">
              {course.title}
            </h3>

            {/* Star Ratings */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < course.rating ? "text-[#f6c100]" : "text-gray-500"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-gray-300 text-center mb-4">
              {course.description}
            </p>

            <div className="text-center">
              <Link
                to={`/courses/${course._id}`}
                className="inline-block mt-2 px-4 py-2 border border-[#967232] text-[#967232] rounded hover:bg-[#967232] hover:text-black transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
