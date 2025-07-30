require("dotenv").config();
const mongoose = require("mongoose");
const Course = require("../models/courseModel");

// Connect to DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"));

const courses = [
  {
    title: "Namaz Course",
    description:
      "Designed to help you learn and perfect your prayers. Namaz, or Salah, is one of the five pillars of Islam.",
    icon: "FaPrayingHands",
    rating: 5,
    link: "/namaz-course",
  },
  {
    title: "Hadith Course",
    description:
      "The Hadith Course is perfect for learning about the sayings and actions of Prophet Muhammad (PBUH).",
    icon: "GiScrollUnfurled",
    rating: 5,
    link: "/hadith-course",
  },
  {
    title: "Online Tajweed Course",
    description:
      "Teaches you how to recite the Quran accurately and beautifully.",
    icon: "BsSoundwave",
    rating: 5,
    link: "/tajweed-course",
  },
  {
    title: "Quraan Ijazah Course",
    description:
      "Master Quranic recitation and memorization with proper certification.",
    icon: "GiLaurelCrown",
    rating: 5,
    link: "/ijazah-course",
  },
  {
    title: "Noorani Qaida Course",
    description: "Learn proper Quran recitation starting from Noorani Qaida.",
    icon: "TbBook2",
    rating: 5,
    link: "/noorani-qaida-course",
  },
  {
    title: "Rehmani Qaida Course",
    description:
      "Exposure to Quran words early. Strengthens tajweed and writing skills.",
    icon: "GiNotebook",
    rating: 5,
    link: "/rehmani-qaida-course",
  },
  {
    title: "Madni Qaida Course",
    description: "Build a strong foundation in Quran reading with Madni Qaida.",
    icon: "GiFeather",
    rating: 5,
    link: "/madni-qaida-course",
  },
  {
    title: "Quran Memorization Course",
    description:
      "Personalized 1-on-1 Hifz program by experienced Hafiz teachers.",
    icon: "FaRegBookmark",
    rating: 5,
    link: "/quran-memorization-course",
  },
  {
    title: "6 Kalma Course",
    description:
      "Focused and spiritual learning experience for memorizing the 6 Kalmas.",
    icon: "RiNumber6",
    rating: 5,
    link: "/6-kalma-course",
  },
  {
    title: "Online Tafseer Course",
    description:
      "Understand the divine meanings of the Quran through proper Tafseer.",
    icon: "RiBook2Line",
    rating: 5,
    link: "/tafseer-course",
  },
  {
    title: "Nazra Quran Course",
    description: "Recite Quran with perfection and understanding.",
    icon: "LuBookOpenCheck",
    rating: 5,
    link: "/nazrah-quran-course",
  },
];

const importData = async () => {
  try {
    await Course.deleteMany(); // Optional: clears existing
    await Course.insertMany(courses);
    console.log("✅ Courses seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding courses:", err);
    process.exit(1);
  }
};

importData();
