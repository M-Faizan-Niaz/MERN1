// src/pages/FreeTrialPage.jsx
import React from "react";
import Header from "../components/shared/Header";
import FreeTrialModal from "../components/home/FreeTrialModal" // ✅ You'll extract form logic here

const FreeTrialPage = () => {
  return (
    <>
      
      <FreeTrialModal />
    </>
  );
};

export default FreeTrialPage;
