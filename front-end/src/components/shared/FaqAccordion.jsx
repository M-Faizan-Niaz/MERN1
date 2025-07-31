import React, { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "What is the Quran Academy?",
    answer:
      "The International Quran Academy is an online platform dedicated to teaching the Quran to students of all ages. Our online Quran academy offers personalized lessons with qualified instructors. They help you learn Quran online from the comfort of your home.",
  },
  {
    question: "What Age Groups Are Taught?",
    answer:
      "To get started, simply visit our website, fill out the registration form. Then choose the course you want to learn. Our team will contact you to arrange your first lesson and help you begin your online Quran journey.",
  },
  {
    question: "How to Learn Quran Online?",
    answer:
      "You can register, choose a course, get matched with an instructor, and begin learning through interactive online classes.",
  },
  {
    question: "Can I schedule my lessons?",
    answer:
      "Yes, you can select times that suit your schedule. Flexibility is one of our strengths.",
  },
  {
    question: "What courses are offered?",
    answer:
      "We offer Namaz, Tajweed, Memorization, Arabic, Hadith, Noorani Qaida, and Islamic Studies.",
  },
  {
    question: "Is There a Trial Period?",
    answer:
      "Yes, we offer a free trial class so you can experience our teaching style before committing.",
  },
  {
    question: "Are Instructors Qualified?",
    answer:
      "Our instructors are certified, experienced, and passionate about teaching the Quran effectively.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just register on our website, and our team will guide you step-by-step to begin your learning journey.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const answerRef = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
    // Scroll into view smoothly
    setTimeout(() => {
      answerRef.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);
  };

  // Fade in when in viewport
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight - 100;
      setVisible(isVisible);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-black text-white pt-12 pb-45 px-4 sm:px-6 lg:px-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Al-Hidayah Quran Academy <span className="text-[#967232]">(FAQs)</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={(el) => (answerRef.current[index] = el)}
            className="bg-[#111] border border-[#967232] rounded-lg shadow-lg overflow-hidden hover:shadow-[0_0_10px_#96723277] transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center bg-[#967232] hover:bg-[#a58242] transition-colors duration-300"
            >
              <span className="font-semibold">{faq.question}</span>
              <i
                className={`fas fa-chevron-${
                  openIndex === index ? "up" : "down"
                } transition-transform duration-300`}
              ></i>
            </button>
            <div
              className={`px-5 pb-4 text-sm text-gray-300 transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[400px] opacity-100 pt-4"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
