import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import PricingPage from "./pages/Pricing/PricingPage";
import Contact from "./pages/Contact/Contact";
import CopyRight from "./components/copyright/CopyRight";
import TrialPopup from "./components/TrialPopup/TrialPopup";
import React, { useState } from "react";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Toaster } from "react-hot-toast";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Router>
      <Toaster position="top-center" />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Layout openModal={openModal} setOpenModal={setOpenModal} />}
        >
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="thankyou" element={<ThankYouPage />} />
        </Route>
        <Route
          path="*"
          element={
            <NotFoundPage text="The page you requested was not found." />
          }
        />
      </Routes>
    </Router>
  );
}

function Layout({ openModal, setOpenModal }) {
  return (
    <>
      <TrialPopup openModal={openModal} setOpenModal={setOpenModal} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="thankyou" element={<ThankYouPage />} />
      </Routes>
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
