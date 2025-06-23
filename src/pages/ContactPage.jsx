import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from "../components/homePage/HeroSection";
import Welcome from "../components/homePage/Welcome";
import LocationImage from "../components/homePage/LocationImage";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 lg:mb-20 ">
          <HeroSection/>
        </motion.div>

        {/* Welcome Section */}
        <motion.div 
          variants={itemVariants}
          className="mb-12 sm:mb-16 lg:mb-20 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <Welcome />
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          variants={itemVariants}
          className="mb-12 sm:mb-16 lg:mb-20 bg-white rounded-2xl shadow-lg overflow-hidden"
          whileHover={{ 
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ duration: 0.3 }}
        >
          <ContactForm />
        </motion.div>

        {/* Location Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          whileHover={{ 
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ duration: 0.3 }}
        >
          <LocationImage />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ContactPage;