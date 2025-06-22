import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const GetStarted = () => {
    
  const steps = [
    {
      title: "Request more information",
      number: "1",
    },
    {
      title: "Fill out registration form",
      number: "2",
    },
    {
      title: "Meet with the principal",
      number: "3",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative flex flex-col items-center justify-center text-center bg-cover bg-no-repeat bg-center min-h-screen md:min-h-[50vh] lg:min-h-screen w-full"
      style={{
        backgroundImage: "url(/images/how_1.jpg)",
      }}
    >

      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          style={{ fontFamily: "font3" }}
          className="text-5xl md:text-7xl  xl:text-7xl font-semibold mb-8 text-center text-white"
          variants={itemVariants}
        >
          GET STARTED
        </motion.h2>

        <motion.p
          className="text-xl lg:text-3xl w-2/3 max-w-3xl mx-auto text-center  text-[#999999] font-semibold mb-10"
          variants={itemVariants}
        >
          There are 3 steps to begin our registration process.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className=" flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white ">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#999999]">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <Link
          to="/admissions"
          className="px-6 py-3 bg-[#D9BF52] text-white font-semibold rounded-full hover:bg-yellow-500 cursor-pointer transition-colors duration-300"
        >
          FULL PROCESS
        </Link>

      </div>

    </motion.div>
  );
};

export default GetStarted;
