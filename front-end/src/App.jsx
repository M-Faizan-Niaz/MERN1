import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Fee from "./pages/Fee";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Library from "./pages/Library";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import FreeTrial from "./pages/FreeTrial";
import Namaz from "./pages/Namaz";
import NooraniQaida from "./pages/NooraniQaida";
import Hadith from "./pages/Hadith";
import NazrahQuran from "./pages/NazrahQuran";
import SixKalma from "./pages/SixKalma";
import TajweedCourse from "./pages/TajweedCourse";
import TafseerCourse from "./pages/TafseerCourse";
import IjazahCourse from "./pages/IjazahQuran";
import RehmaniQaida from "./pages/RehmaniQaida";
import MadniQaida from "./pages/MadniQaida";
import QuranMemorizationCourse from "./pages/QuranMemorization";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// Components
import Header from "./components/shared/Header";
import BottomNav from "./components/shared/BottomNav";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Dashboard from "./pages/DashBoard";

const AppContent = () => {
  const location = useLocation();

  // Hide Header & BottomNav on these paths
  const hideLayout = ["/signup", "/login"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/library" element={<Library />} />
        <Route path="/fee" element={<Fee />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/namaz-course" element={<Namaz />} />
        <Route path="/noorani-qaida-course" element={<NooraniQaida />} />
        <Route path="/hadith-course" element={<Hadith />} />
        <Route path="/nazrah-quran-course" element={<NazrahQuran />} />
        <Route path="/6-kalma-course" element={<SixKalma />} />
        <Route path="/tajweed-course" element={<TajweedCourse />} />
        <Route path="/tafseer-course" element={<TafseerCourse />} />
        <Route path="/ijazah-course" element={<IjazahCourse />} />
        <Route path="/rehmani-qaida-course" element={<RehmaniQaida />} />
        <Route path="/madni-qaida-course" element={<MadniQaida />} />
        <Route
          path="/quran-memorization-course"
          element={<QuranMemorizationCourse />}
        />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      {!hideLayout && <BottomNav />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
