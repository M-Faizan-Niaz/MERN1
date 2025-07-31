import React, { useState } from "react";
import axios from "axios";
import bgImg from "../../assets/images/bg.png";

const FreeTrialModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsappNumber: "",
    course: "",
    timeZone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/free-trial",
        formData
      );
      alert("Free trial request submitted successfully!");
    } catch (err) {
      console.error("Error submitting form", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black/90"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full max-w-lg p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-black/30 shadow-2xl text-white mt-20">
        <h2 className="text-3xl font-bold text-center text-[#756300] mb-2">
          Book Free Trial Class
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white"
          />
          <input
            name="whatsappNumber"
            type="text"
            placeholder="WhatsApp Number"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white"
          />
          <select
            name="course"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white"
          >
            <option value="">Choose Course</option>
            <option>Quran Reading Basics</option>
            <option>Quran with Tajweed</option>
            <option>Hifz (Memorization)</option>
          </select>
          <select
            name="timeZone"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white"
          >
            <option value="">Select Time Zone</option>
            <option>(GMT+5) Pakistan</option>
            <option>(GMT+1) Europe</option>
            <option>(GMT-5) USA</option>
          </select>
          <input
            name="country"
            type="text"
            placeholder="Country"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white"
          />
          <textarea
            name="message"
            placeholder="Any message for us?"
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white"
          />

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#996515] text-white font-bold rounded-md"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default FreeTrialModal;
