import React, { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-36 right-6 z-50 group">
        <a
          href="https://wa.me/14099417108"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition duration-300"
          aria-label="WhatsApp Chat"
        >
          {/* WhatsApp icon inside the green circle */}
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        {/* Tooltip below the icon */}
        <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          WhatsApp Chat
        </span>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <div className="fixed bottom-36 right-24 z-50 group">
          <button
            onClick={scrollToTop}
            className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition duration-300"
            aria-label="Back to Top"
          >
            {/* Upward arrow icon inside the orange circle */}
            <i className="fas fa-arrow-up text-lg"></i>
          </button>
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
            Back to Top
          </span>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
