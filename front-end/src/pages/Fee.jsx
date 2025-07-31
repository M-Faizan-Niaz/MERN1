import React from "react";
import FAQSection from "../components/Fee/FAQsection";
import { useNavigate } from "react-router-dom";


const pricingPlans = [
  {
    title: "2 Classes Per Week",
    price: "$30",
    sessions: "8 Classes per Month",
  },
  {
    title: "3 Classes Per Week",
    price: "$40",
    sessions: "12 Classes per Month",
  },
  {
    title: "4 Classes Per Week",
    price: "$50",
    sessions: "16 Classes per Month",
  },
  {
    title: "5 Classes Per Week",
    price: "$60",
    sessions: "20 Classes per Month",
  },
];

const Fee = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 mt-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
          Our <span className="text-[#c49833]">Pricing Plans</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          The below mentioned fee is implemented on Monthly basis for all
          courses after the satisfaction of Free trial session.
        </p>
      </div>

      {/* Info Section */}
      <div className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-12">
        <p className="mb-2">
          <strong className="text-[#c49833]">Family Discount Package:</strong>{" "}
          20% discount for enrolling more than one student of the same family.
        </p>
        <p className="mb-1">Class Type: 1 on 1 Live Classes</p>
        <p>Class Duration: 30 Minutes each session</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center max-w-6xl mx-auto cursor-pointer">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl p-6 shadow-lg hover:shadow-[#FFD700]/40 hover:scale-105 transition-transform duration-300 border border-[#FFD700]/40"
          >
            <h3 className="text-lg font-bold text-center mb-3 text-[#111]">
              {plan.title}
            </h3>
            <div className="text-4xl font-bold text-center text-[#c49833] mb-2">
              {plan.price}
            </div>
            <p className="text-center text-gray-700 mb-6">{plan.sessions}</p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/free-trial")}
                className="bg-[#c49833] text-black font-semibold py-2 px-6 rounded-full hover:bg-[#e6c200] cursor-pointer transition-all"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <div className="mb-80">
        <FAQSection />
      </div>
    </div>
  );
};

export default Fee;
