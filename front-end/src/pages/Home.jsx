import BottomNav from "./../components/shared/BottomNav";
import { FaBookOpen, FaCalendarCheck } from "react-icons/fa";
import img1 from "../assets/images/img1.png";
import FeaturesGrid from "../components/home/FeaturesGrid";
import AboutSection from "../components/home/AboutSection";
import FloatingButtons from "../components/shared/FloatingButtons";
import FaqAccordion from "../components/shared/FaqAccordion";

import FreeTrialModal from "../components/home/FreeTrialModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen overflow-y-auto custom-overflow-hidden pb-40">
      <div className="bg-gradient-to-br from-[#F6F6F6] to-[#EDEDED] rounded-3xl shadow-2xl mx-4 md:mx-16 mt-10 mb-12 px-6 py-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Div */}
          <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[#122620] text-2xl md:text-4xl font-extrabold mb-4 text-center px-2 leading-tight">
                Al-Hidayah Quran Academy | Learn Quran online with expert tutors
              </h2>
              <p className="text-[#333333] text-lg text-center max-w-md mb-6 px-2 leading-relaxed">
                Join the best Online Quran Academy to learn Quran online with
                expert tutors. Get Islamic education from the comfort of your
                home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-10">
                {/* Book Free Trial Button */}
                <button
                  onClick={() => navigate("/free-trial")}
                  className="flex items-center justify-center gap-2 border border-[#122620] text-[#122620] hover:bg-[#122620] hover:text-white px-6 py-2 rounded-lg font-semibold transition duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <FaCalendarCheck />
                  Book Free Trial
                </button>

                {/* Browse Courses Button */}
                <button onClick={() => navigate("/courses")}
                 className="flex items-center justify-center gap-2 border border-[#122620] text-[#122620] hover:bg-[#122620] hover:text-white px-6 py-2 rounded-lg font-semibold transition duration-300 cursor-pointer shadow-sm hover:shadow-md">
                  <FaBookOpen />
                  Browse Courses
                </button>
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className="flex-1 flex justify-center pt-10 md:pt-0">
            <img
              src={img1}
              alt="Hero"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[280px] md:h-[320px] rounded-xl object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <div>
          <img src="" alt="" />
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-105  cursor-pointer">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4 relative inline-block">
            <span className="relative z-10 text-[#122620]">Why Choose Us?</span>
            <span className="absolute left-0 bottom-0 w-full h-2 bg-[#10b981]/20 rounded-md -z-10"></span>
          </h2>

          <p className="text-gray-700 text-base leading-relaxed md:text-lg md:leading-loose max-w-3xl mx-auto px-4 md:px-6 py-6 bg-[#F6F6F6] rounded-xl shadow-md mt-4">
            Al-Hidayah Online Quran academy has been enlightening Muslims about
            the teachings of the holy Quran and making their lives according to
            the principles of Islam. We take pride in what we do and we take it
            upon ourselves to make our brothers and sisters good Muslims. With a
            step by step process designed by keeping in mind the objective of
            teaching our students correctly, we aim to make you learn Quran with
            tajweed comprehensively. Having the luxury of taking classes online,
            you can choose the timings that suit your timetable best, learn
            everything through the comfort of your home, and take guidance from
            our experienced Quran teachers anytime you want. Even if you have
            gone to some place for holiday with your children, this online Quran
            learning process keeps you connected with us every single day. Our
            expert Quranic teachers know the value of everyone’s time,
            therefore, they are extremely punctual and never miss a class for
            any reason. You can rest assured that once you start taking these
            online Quran learning classes with us, you will be reading Quran
            fluently in no time.
          </p>
        </div>
      </div>

      <p className="text-center text-lg md:text-xl font-medium text-gray-800 m-10">
        Explore our full list of{" "}
        <a
          href="/courses"
          className="text-[#996515] font-semibold  hover:text-green-800 transition duration-300"
        >
          Quran courses online
        </a>{" "}
        to get started today
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#996515] mb-6 mt-20 transition duration-300 hover:text-green-900">
        Online Quran Academy key features
      </h2>

      <FeaturesGrid />
      <AboutSection />
      <FaqAccordion />

      <BottomNav />
      <FloatingButtons />
    </section>
  );
};

export default Home;
