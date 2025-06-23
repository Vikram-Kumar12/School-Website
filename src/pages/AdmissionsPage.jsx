import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiCalendar,
  FiUser,
  FiFileText,
  FiCheckCircle,
  FiMail,
  FiPhone,
  FiMapPin,
  FiChevronDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";
const AdmissionPage = () => {
  const currentYear = new Date().getFullYear();
  const [activeFaq, setActiveFaq] = useState(null);

  // Admission process steps
  const admissionSteps = [
    {
      id: 1,
      title: "Enquiry & School Visit",
      description:
        "Parents can visit the school campus and interact with our admission counselor to understand our philosophy and facilities.",
      icon: <FiUser className="text-2xl text-blue-600" />,
    },
    {
      id: 2,
      title: "Application Form Submission",
      description:
        "Collect the admission form from the office or download from our website. Submit the completed form with required documents.",
      icon: <FiFileText className="text-2xl text-blue-600" />,
    },
    {
      id: 3,
      title: "Interaction/Assessment",
      description:
        "For certain grades, we conduct an informal interaction or basic assessment to understand the child's readiness.",
      icon: <FiCheckCircle className="text-2xl text-blue-600" />,
    },
    {
      id: 4,
      title: "Confirmation & Fee Payment",
      description:
        "Once selected, complete the fee formalities to confirm your child's admission at Little Flower Vidya Mandir.",
      icon: <FiCalendar className="text-2xl text-blue-600" />,
    },
  ];

  // Why choose us points
  const whyChooseUs = [
    "Individual attention with 25:1 student-teacher ratio",
    "15+ years experienced faculty with child-centric approach",
    "Safe campus with 24/7 security and CCTV surveillance",
    "Balanced focus on academics, sports, and arts",
    "Transparent and affordable fee structure with installment options",
    "STEM lab and digital smart classrooms",
    "Regular parent-teacher interactions",
    "Transportation facility covering all major routes",
  ];

  // Required documents
  const requiredDocuments = [
    "Birth Certificate (original + 2 copies)",
    "4 recent passport-size photographs",
    "Aadhaar Card copy (child & parents)",
    "Previous school report card (if applicable)",
    "Transfer Certificate (for Grade 2 and above)",
    "Medical fitness certificate",
    "Caste certificate (if applicable)",
  ];

  // FAQs
  const faqs = [
    {
      question: "What is the age criteria for Nursery admission?",
      answer:
        "For Nursery, the child should be 3+ years as of 31st March of the admission year.",
    },
    {
      question: "Do you provide transportation facilities?",
      answer:
        "Yes, we have a fleet of buses covering all major routes in the city with GPS tracking and female attendants.",
    },
    {
      question: "What is the school timing?",
      answer:
        "For Nursery to Grade 2: 8:30 AM to 12:30 PM. For Grade 3 onwards: 8:30 AM to 3:00 PM.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes, we offer merit-based scholarships and fee concessions for economically weaker students.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleClick = () => {
    // Handle download click
    alert("Download functionality is not implemented yet.");
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">

      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 style={{fontFamily:"font3"}}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Admissions Open for {currentYear}
          </motion.h1>
          <motion.p
            className="text-xl sm:text-xl max-w-3xl mx-auto mb-8 font-semibold"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join the Little Flower Family — Nurturing young minds through
            academic excellence and values-based education.
          </motion.p>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 style={{fontFamily:"font3"}}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
            variants={itemVariants}
          >
            Why Choose <span className="text-blue-600">Little Flower?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
                <p className="text-gray-700 font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Admission Process Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 style={{fontFamily:"font3"}}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
            variants={itemVariants}
          >
            Our <span className="text-blue-600">Admission Process</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step) => (
              <motion.div
                key={step.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 flex-grow ">{step.description}</p>
                <span className="mt-4 text-blue-600 font-semibold">
                  Step {step.id}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Eligibility & Documents Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Eligibility Criteria */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Eligibility Criteria
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FiUser className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Grades Offered</h4>
                  <p className="text-gray-600">Nursery to Grade 8</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FiCalendar className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Age Requirements
                  </h4>
                  <p className="text-gray-600">
                    <span className="font-semibold">Nursery : </span> 3+ years as of 31st March
                    <br />
                    <span className="font-semibold">Kindergarten : </span> 4+ years
                    <br />
                    <span className="font-semibold">Grade 1 :</span> 5+ years
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Required Documents */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Required Documents
            </h3>
            <ul className="space-y-3">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.section>

      {/* Important Dates & Downloads */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Important Dates */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Important Dates
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FiCalendar className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Admission Open</h4>
                  <p className="text-gray-600">
                    1st November {currentYear - 1}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FiCalendar className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Last Date to Apply
                  </h4>
                  <p className="text-gray-600">31st January {currentYear}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FiCalendar className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Interaction Dates
                  </h4>
                  <p className="text-gray-600">
                    5th-10th February {currentYear}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Downloads Section */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Downloads</h3>
            <div className="space-y-4">
              {[
                { name: "Admission Form", size: "PDF, 250KB" },
                { name: "School Prospectus", size: "PDF, 1.2MB" },
                { name: "Fee Structure", size: "PDF, 350KB" },
                { name: "Transportation Routes", size: "PDF, 180KB" },
              ].map((file, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center">
                    <div onClick={() => handleClick()} className="cursor-pointer"><FiDownload className="text-blue-600 mr-3" /></div>
                    <div>
                      <p className="font-medium text-gray-800">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.size}</p>
                    </div>
                  </div>
                  <span onClick={() => handleClick()} className="text-blue-600 cursor-pointer text-sm font-medium">
                    Download
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 style={{fontFamily:"font3"}}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
            variants={itemVariants}
          >
            Frequently Asked <span className="text-blue-600">Questions</span>
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                variants={itemVariants}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <FiChevronDown
                    className={`text-gray-500 transition-transform ${
                      activeFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: activeFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 style={{fontFamily:"font3"}}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Contact for <span className="text-yellow-300">Admission</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiPhone className="text-yellow-300 mr-3" />
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-lg">+91 98765 43210</p>
              <p className="text-sm opacity-80 mt-1">Mon-Sat, 9AM to 4PM</p>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiMail className="text-yellow-300 mr-3" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-lg">admissions@littleflower.edu</p>
              <p className="text-sm opacity-80 mt-1">
                Response within 24 hours
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <FiMapPin className="text-yellow-300 mr-3" />
                <h3 className="text-xl font-semibold">Address</h3>
              </div>
              <p className="text-lg">123 Education Avenue</p>
              <p className="text-sm opacity-80">6H6W+MCV, Pesra, Jharkhand 825323</p>
            </motion.div>
          </div>

          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <Link to="/contact" className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors shadow-lg">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default AdmissionPage;
