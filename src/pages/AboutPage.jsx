import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBook, FiUsers, FiHome, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Welcome from "../components/homePage/Welcome"
const About = () => {

  // School information
  const schoolInfo = {
    name: "Little Flower Vidya Mandir",
    established: "2015",
    motto: "Learning Today, Leading Tomorrow",
    description:
      "Little Flower Vidya Mandir has been providing quality education for over 10 years. Our mission is to nurture young minds through innovative teaching methods and a holistic approach to education.",
    achievements: [
      "Recipient of National Excellence in Education Award 2022",
      "100% board exam pass rate for 5 consecutive years",
      "State champions in science olympiad 2023",
    ],
  };

  // Featured teachers
  const teachers = [
    {
      id: 1,
      name: "John Doe",
      position: "Director",
      image: "/images/Our_Staff1.png",
      bio: "PhD in Education with 20+ years of experience",
    },
    {
      id: 2,
      name: "Rahul Verma",
      position: "Head of Science",
      image: "/images/Our_Staff5.png",
      bio: "M.Sc Physics, passionate about experimental learning",
    },
    {
      id: 3,
      name: "Robert Johnson",
      position: "English Department",
      image: "/images/Our_Staff3.png",
      bio: "MA English, creative writing specialist",
    },
  ];

  // School facilities
  const facilities = [
    {
      title: "Modern Classrooms",
      description: "Smart classrooms with digital learning tools",
      icon: <FiHome className="text-3xl text-blue-600" />,
    },
    {
      title: "Science Labs",
      description: "Well-equipped physics, chemistry and biology labs",
      icon: <FiBook className="text-3xl text-blue-600" />,
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor sports facilities",
      icon: <FiAward className="text-3xl text-blue-600" />,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* School Introduction Section */}
        <motion.section className="mb-16 text-center" variants={itemVariants}>
          <motion.h1
          style={{fontFamily:"font3"}}
            className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="text-blue-600">Our School</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto font-semibold"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {schoolInfo.motto}
          </motion.p>
        </motion.section>

        {/* Welcome section */}
        <div><Welcome/></div>

        {/* School Details Section */}
        <motion.section
          className="mb-20 bg-white rounded-2xl shadow-lg p-8"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/school-building.jpg"
                alt="School building"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </motion.div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                {schoolInfo.name}
              </h2>
              <div className="flex items-center mb-4">
                <FiClock className="text-blue-500 mr-2" />
                <span className="text-gray-600 font-semibold">
                  Established: {schoolInfo.established}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{schoolInfo.description}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Achievements
              </h3>
              <ul className="space-y-2">
                {schoolInfo.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Featured Teachers Section */}
        <motion.section className="mb-20 flex flex-col items-center justify-center" variants={itemVariants}>

          <motion.h2 style={{fontFamily:"font3"}}
            className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Our <span className="text-blue-600">Faculty</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <motion.div
                key={teacher.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="h-60 overflow-hidden">
                  <motion.img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {teacher.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {teacher.position}
                  </p>
                  <p className="text-gray-600 text-sm">{teacher.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link 
          to="/about-our-staff" 
          className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-center"
        >
          About Our Staff
        </Link>

        </motion.section>

        {/* Facilities Section */}
        <motion.section className="mb-20" variants={itemVariants}>
          <motion.h2 style={{fontFamily:"font3"}}
            className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Our <span className="text-blue-600">Facilities</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Student Life Section */}
        <motion.section
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 style={{fontFamily:"font3"}} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Student <span className="text-blue-600">Life</span>
              </h2>
              <p className="text-gray-600 mb-6">
                At Little Flower Vidya Mandir, we believe in holistic development.
                Our students participate in a wide range of extracurricular
                activities including sports, arts, and community service.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    className="bg-gray-50 p-4 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiUsers className="text-blue-500 text-xl mb-2" />
                    <p className="text-sm font-medium text-gray-700">
                      {item === 1 && "Sports Teams"}
                      {item === 2 && "Cultural Events"}
                      {item === 3 && "Science Club"}
                      {item === 4 && "Community Service"}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 py-5 px-5">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  className="h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={`/images/student-life${item}.jpg`}
                    alt={`Student activity ${item}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact-form */}
        <div className="mt-20"><ContactForm/></div>

      </div>
    </motion.div>
  );
};

export default About;
