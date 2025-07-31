import React, { useEffect, useState } from "react";
import FloatingButtons from "./FloatingButtons";

const BottomNav = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setVisible(isBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`fixed bottom-0 w-full bg-black text-white border-t-2 border-[#967232] z-50 
    transform transition-all duration-700 ease-in-out
    ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Academy Info */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-[#967232] pb-2 mb-4">
            Al-Hidayah Quran Academy
          </h3>
          <p className="text-sm text-gray-300">
            Al-Hidayah Quran Academy is a leading online Quran academy providing
            comprehensive Quranic education worldwide.
          </p>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-[#967232] pb-2 mb-4">
            Our Courses
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/namaz-course"
                className="hover:text-[#967232] transition"
              >
                Namaz Course
              </a>
            </li>

            <li>
              <a
                href="/hadith-course"
                className="hover:text-[#967232] transition"
              >
                Hadith Course
              </a>
            </li>
            <li>
              <a
                href="/tajweed-course"
                className="hover:text-[#967232] transition"
              >
                Online Tajweed Course
              </a>
            </li>

            <li>
              <a
                href="/quran-memorization-course"
                className="hover:text-[#967232] transition"
              >
                Quran Memorization Course
              </a>
            </li>
            <li>
              <a
                href="/noorani-qaida-course"
                className="hover:text-[#967232] transition"
              >
                Noorani Qaida Course
              </a>
            </li>
            <li>
              <a
                href="/madni-qaida-course"
                className="hover:text-[#967232] transition"
              >
                Madni Qaida Course
              </a>
            </li>
            <li>
              <a
                href="/rehmani-qaida-course"
                className="hover:text-[#967232] transition"
              >
                Rehmani Qaida Course
              </a>
            </li>
            <li>
              <a
                href="/6-kalma-course"
                className="hover:text-[#967232] transition"
              >
                6 Kalma Course
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-[#967232] pb-2 mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/free-trial" className="hover:text-[#967232] transition">
                Free Trial Quran Classes
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-[#967232] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-[#967232] transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-conditions" className="hover:text-[#967232] transition">
                Terms And Conditions
              </a>
            </li>
            <li>
              <a href="/fee" className="hover:text-[#967232] transition">
                Pricing Plans
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-[#967232] transition">
                Contacts
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-[#967232] transition">
                Quran Courses Online
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-[#967232] pb-2 mb-4">
            Contact Us
          </h3>

          <p className="text-sm flex items-center gap-2 mb-2">
            <i className="fas fa-envelope text-[#967232]"></i>
            mfaizan@gmail.com
          </p>

          <p className="text-sm flex items-center gap-2 mb-2">
            <i className="fas fa-phone text-[#967232]"></i>
            +92-341-2517905
          </p>

          <p className="text-sm flex items-center gap-2 mb-4">
            <i className="fab fa-whatsapp text-green-400"></i>
          +923412517905
          </p>

          <div className="flex space-x-4 text-lg">
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-black">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomNav;
