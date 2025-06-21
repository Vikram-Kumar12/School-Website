import React from "react";
import Home from "../pages/HomePage";
import Footer from "../components/Footer"
import About from "../pages/AboutPage";
import Admissions from "../pages/AdmissionsPage";
import Gallery from "../pages/GalleryPage";
import Contact from "../pages/ContactPage";
import { Route, Routes } from "react-router";
import Navbar from "../components/homePage/Navbar";
import MoreDetailsAboutOurStaff from "../components/MoreDetailsAboutOurStaff";
const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen text-black ">
      <Navbar/>
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-our-staff" element={<MoreDetailsAboutOurStaff/>} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;
