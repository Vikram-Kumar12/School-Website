import React, { useEffect } from "react";
import { Link } from "react-router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Welcome = () => {
  const controls = useAnimation();
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-[#F7F7F7] py-10 md:py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12">

        {/* left-side */}
        <motion.div 
          className="w-full flex flex-col items-center px-5 py-8 sm:py-12 lg:px-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          variants={itemVariants}
        >

          <motion.h1 
            style={{fontFamily:"font3"}} 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#27186B] text-center"
            variants={itemVariants}
          >
            Welcome!
          </motion.h1>

          <motion.h2 
            className="text-xl sm:text-2xl mt-3 font-semibold text-gray-900 text-center"
            variants={itemVariants}
          >
            To Little Flower Vidya Mandir
          </motion.h2>

          <motion.p 
            className="text-base sm:text-medium w-full md:w-4/5 lg:w-3/4 text-gray-600 mt-4 sm:mt-5 font-medium leading-relaxed"
            variants={itemVariants}
          >
            Reminiscent of the values of traditional Indian education, every student matters at Little Flower Vidya Mandir. We believe in nurturing every child through a compassionate and personalized approach to learning.
          </motion.p>

          <motion.p 
            className="text-base sm:text-medium w-full md:w-4/5 lg:w-3/4 text-gray-600 mt-4 sm:mt-5 font-medium leading-relaxed"
            variants={itemVariants}
          >
            At Little Flower, we offer quality education tailored to each student’s learning pace, interests, and individual needs—while also aligning with the expectations of their families. Every child follows a customized learning journey that blends academic excellence with real-life relevance.
          </motion.p>

          <motion.p 
            className="text-base sm:text-medium w-full md:w-4/5 lg:w-3/4 text-gray-600 mt-4 sm:mt-5 font-medium leading-relaxed"
            variants={itemVariants}
          >
            Our inquiry-based and activity-driven teaching methods help students connect core subjects with practical experiences, keeping them engaged and inspired throughout their academic life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/about" 
              className="px-6 py-3 sm:px-8 sm:py-3 bg-[#FFCF68] text-base sm:text-lg font-semibold rounded-full mt-6 sm:mt-8 text-gray-700 w-fit hover:bg-[#F8C14F] transition-colors duration-300 text-center block"
            >
              More About Us
            </Link>
          </motion.div>

        </motion.div>

        {/* right-side */}
        <motion.div 
          className="w-full bg-white flex flex-col items-center justify-center px-5 py-8 sm:py-12 lg:px-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          variants={containerVariants}
        >
            
          <motion.div
            className=""
            variants={imageVariants}
          >
            <motion.img 
              src="/images/welcome2.gif" 
              alt="School animation" 
              className="object-cover"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img 
              src="/images/welcome1.jpg" 
              alt="School building" 
              className="object-cover mt-2"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

        </motion.div>

      </div>
    </motion.div>
  );
};

export default Welcome;