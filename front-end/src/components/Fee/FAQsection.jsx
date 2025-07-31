import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What type of payments do you accept?",
    answer:
      "We accept all major credit/debit cards and PayPal for secure and fast transactions.",
  },
  {
    question: "When should I pay my monthly fee?",
    answer:
      "Fees should be paid at the beginning of each month to continue access to live sessions.",
  },
  {
    question: "Do I have to give credit card information to start?",
    answer:
      "No, the free trial requires no payment information. You can try it risk-free.",
  },
  {
    question: "Is there any discount for family members?",
    answer:
      "Yes, we offer a 20% discount for every additional student from the same family.",
  },
  {
    question: "What if I want to cancel my classes?",
    answer:
      "You can cancel anytime by informing us in advance — no cancellation fees or obligations.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-20 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#c49833]">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl shadow-md border border-[#FFD700]/20"
          >
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left px-5 py-4 text-white font-medium hover:text-[#c49833] transition-colors duration-300"
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[#c49833]" : ""
                }`}
              />
            </button>
            <div
              className={`px-5 pb-4 text-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
