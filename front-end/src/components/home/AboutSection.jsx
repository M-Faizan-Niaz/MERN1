import React from "react";
import aboutImg from "../../assets/images/logo.png"; // replace with your image path

const AboutSection = () => {
  return (
    <section className="py-16 bg-[#fefefe]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Quran Academy"
            className="w-full  rounded-3xl shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-[#996515] text-white px-4 py-2 text-sm rounded-full shadow-md">
            Trusted by 1000+ Students
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            About <span className="text-[#996515]">Our Quran Academy</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Our mission is to make Quran education easily accessible to everyone
            around the world. With flexible schedules, expert teachers, and
            one-on-one sessions, we aim to help students not only read but also
            understand the teachings of the Holy Quran.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            Whether you're a beginner or looking to deepen your knowledge, our
            academy offers a structured approach tailored to all ages and levels
            — anytime, anywhere.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[#996515] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#d4af37] transition duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
