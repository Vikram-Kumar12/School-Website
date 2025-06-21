import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MoreDetailsAboutOurStaff = () => {
  // Previous content data
  const departments = [
    {
      name: "Leadership Team",
      description: "Our experienced leadership team guides the institution with vision and strategic direction.",
      members: 5
    },
    {
      name: "Teaching Faculty",
      description: "Dedicated educators who bring passion and expertise to the classroom every day.",
      members: 32
    },
    {
      name: "Support Staff",
      description: "The backbone of our institution, ensuring smooth operations and student support.",
      members: 18
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "95%", label: "Qualified Staff" },
    { value: "100+", label: "Training Hours" },
    { value: "4.9/5", label: "Satisfaction Rating" },
  ];

  // Teaching staff data (10 cards as requested)
  const teachingStaff = [
    { id: 1, name: "John Doe", position: "Director", subject: "", image: "/images/Our_Staff1.png" },
    { id: 2, name: "Jane Smith", position: "Principal", subject: "", image: "/images/Our_Staff2.png" },
    { id: 3, name: "Robert Johnson", position: "Head Teacher", subject: "", image: "/images/Our_Staff3.png" },
    { id: 4, name: "Sarah Johnson", position: "Math Teacher", subject: "Mathematics", image: "/images/Our_Staff4.png" },
    { id: 5, name: "Michael Chen", position: "Science HOD", subject: "Physics", image: "/images/Our_Staff5.png" },
    { id: 6, name: "Emma Wilson", position: "Senior Teacher", subject: "English Literature", image: "/images/Our_Staff6.png" },
    { id: 7, name: "David Rodriguez", position: "Art Teacher", subject: "Fine Arts", image: "/images/Our_Staff7.png" },
    { id: 8, name: "Priya Patel", position: "Chemistry Teacher", subject: "Chemistry", image: "/images/Our_Staff8.png" },
    { id: 9, name: "Thomas Baker", position: "PE Instructor", subject: "Physical Education", image: "/images/Our_Staff9.png" },
    { id: 10, name: "Robert Lee", position: "Computer Science", subject: "Programming", image: "/images/Our_Staff10.png" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <motion.div 
        className="max-w-7xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 style={{fontFamily:"font3"}} className="text-5xl md:text-6xl  xl:text-7xl  font-bold text-gray-800 mb-4">
            About Our <span className="text-red-600">Staff</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
            Meet the dedicated professionals who make our institution exceptional through their expertise, passion, and commitment to excellence.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-red-50 hover:bg-red-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">{stat.value}</p>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Departments Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {departments.map((dept, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{dept.name}</h3>
              <p className="text-gray-400 mb-4 font-semibold">{dept.description}</p>
              <p className="text-red-600 font-semibold">{dept.members} members</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Teaching Staff Section - Square Cards */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 style={{fontFamily:"font3"}} className="text-5xl md:text-6xl  xl:text-6xl  font-bold text-gray-800 mb-4 text-center">
            Meet Our <span className="text-red-600">Teaching Faculty</span>
          </h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-3 py-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teachingStaff.map((teacher) => (
              <motion.div 
                key={teacher.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                
                <div className="w-full h-60 overflow-hidden">
                  <motion.img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{teacher.name}</h3>
                  <p className="text-red-600 text-sm font-semibold mb-1">{teacher.position}</p>
                  <p className="text-gray-600 text-xs font-semibold">{teacher.subject}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div 
          className="bg-red-500 rounded-xl p-8 md:p-12 text-white mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">Our Staff Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                We believe that great educators are the foundation of an exceptional learning environment. Our staff members are carefully selected not just for their qualifications, but for their passion for teaching and commitment to student success.
              </p>
              <p>
                Continuous professional development is at the heart of our approach, ensuring our team stays at the forefront of educational innovation.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-200 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular professional development workshops</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-200 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mentorship programs for new educators</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-200 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Collaborative teaching environment</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default MoreDetailsAboutOurStaff;
