import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import PricingPage from "./pages/Pricing/PricingPage";
import Contact from "./pages/Contact/Contact";
import CopyRight from "./components/copyright/CopyRight";
import TrialPopup from "./components/TrialPopup/TrialPopup";
import React, { useState, useEffect } from "react";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Spinner from "./components/Spinner/Spinner";
import { Toaster } from "react-hot-toast";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isRestricted, setIsRestricted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const restrictedCountries = ["CN", "RU"]; // Add country codes you want to restrict

  // useEffect(() => {
  //   console.log("window", window);
  // }, []);

  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }

  // function showPosition(position) {
  //   // x.innerHTML = "Latitude: " + position.coords.latitude +
  //   // "<br>Longitude: " + position.coords.longitude;

  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;

  //   console.log("Latitude: " + latitude + ", Longitude: " + longitude);
  //   getCountryFromCoordinates(latitude, longitude);
  // }

  // async function getCountryFromCoordinates(lat, lng) {
  //   const apiKey = import.meta.env.VITE_APP_IP_API_KEY; // Replace with your Google Maps API key
  //   const response = await fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
  //   );
  //   console.log("response", response);
  //   const data = await response.json();
  //   console.log("data", data);

  //   if (data.status === 200) {
  //     const addressComponents = data.results[0].address_components;
  //     const countryComponent = addressComponents.find((component) =>
  //       component.types.includes("country")
  //     );

  //     if (countryComponent) {
  //       const country = countryComponent.long_name;
  //       console.log("Country: " + country);
  //     } else {
  //       console.log("Country not found.");
  //     }
  //   } else {
  //     console.log("Geocoding API error: " + data.status);
  //   }
  // }

  // useEffect(() => {
  //   getLocation();
  // }, []);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const response = await fetch(
          `https://ipinfo.io?token=${import.meta.env.VITE_APP_IP_API_KEY}`
        ); // Replace with a real token if needed
        const data = await response.json();
        if (restrictedCountries.includes(data.country)) {
          setIsRestricted(true);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setIsLoading(false); // Set loading to false after location check
      }
    };

    checkLocation();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-green-100 text-green-800">
        <Spinner />
      </div>
    ); // Display loading indicator while checking location
  }

  if (isRestricted) {
    return (
      <NotFoundPage text="Sorry, this page is not available in your country" />
    );
  }

  // return (
  //   <Router>

  //     <Toaster position="top-center" />
  //     <ScrollToTop />
  //     <TrialPopup openModal={openModal} setOpenModal={setOpenModal} />
  //     <Navbar />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/courses" element={<Courses />} />
  //       <Route path="/pricing" element={<PricingPage />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/thankyou" element={<ThankYouPage />} />
  //     </Routes>
  //     <Footer />
  //     <CopyRight />
  //   </Router>
  // );

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
