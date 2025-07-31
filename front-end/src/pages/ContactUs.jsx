import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiWhatsapp, SiFacebook, SiYoutube, SiInstagram } from "react-icons/si";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/contact",
        formData
      );
      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 md:px-8 mt-15 mb-70">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#c49833] uppercase">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Info */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-[#FFD700]/30">
          <h2 className="text-2xl font-semibold text-[#c49833] mb-4">
            Communicate with us
          </h2>
          <p className="text-gray-300 mb-6">
            You may reach us by email, call, WhatsApp, or through our social
            channels.
          </p>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#c49833]" /> isqacademy29@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#c49833]" />{" "}
              info@internationalquranacademy.com
            </li>
            <li className="flex items-center gap-3">
              <SiWhatsapp className="text-green-400" /> +92 345 858 1717
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-400" /> +1 904 947 1108
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#c49833] mt-1" /> Multiple
              international addresses
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-[#c49833] mb-2 font-semibold">
              Connect With Us:
            </h3>
            <div className="flex gap-4 text-2xl">
              <a href="#">
                <SiFacebook />
              </a>
              <a href="#">
                <SiYoutube />
              </a>
              <a href="#">
                <SiInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white text-black rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-[#c49833] mb-6">
            Ask a Question
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="w-full border px-4 py-2 rounded-md"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email *"
              required
              className="w-full border px-4 py-2 rounded-md"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number *"
              required
              className="w-full border px-4 py-2 rounded-md"
            />
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              type="text"
              placeholder="Your Country *"
              required
              className="w-full border px-4 py-2 rounded-md"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full border px-4 py-2 rounded-md"
            ></textarea>

            <div className="flex items-center gap-2">
              <input type="checkbox" required />
              <label className="text-sm text-gray-700">I'm not a robot</label>
            </div>

            <button
              type="submit"
              className="bg-[#c49833] text-black font-semibold py-2 px-6 rounded-full w-full"
            >
              SEND
            </button>
            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
