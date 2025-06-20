import React from "react";
import { motion } from "framer-motion";

const HelpSection = () => {
    
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
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
      style={{
        backgroundImage: "url(/images/how_1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "55vh",
        width: "100%",
      }}
      className="relative flex flex-col items-center justify-between pt-30 pb-40 md:pb-60 lg:pb-80 text-center bg-cover bg-no-repeat "
    >
      {/* Text Content at Top */}
      <motion.div className="text-white px-4" variants={itemVariants}>
        <motion.h1 style={{fontFamily:"font3"}}
          className="text-5xl md:text-6xl  xl:text-7xl font-semibold mb-6 text-center"
          variants={itemVariants}
        >
          How We Help
        </motion.h1>
        <motion.p
          className="text-xl lg:text-3xl w-2/3 max-w-3xl mx-auto text-center mb-10 md:mb-0 text-gray-400"
          variants={itemVariants}
        >
          We work individually with each family to understand their specific
          needs
        </motion.p>
      </motion.div>

      {/* Cards Container at Bottom */}
      <motion.div
        className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 w-full px-4"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 transform lg:translate-y-1/2">
          {[
            {
              img: "/images/how_2.jpeg",
              title: "Educate",
              desc: "We provide an individualized curriculum for every student that caters to their individual needs, abilities, and interests.",
            },
            {
              img: "/images/how_3.jpeg",
              title: "Engage",
              desc: "We engage in activity-based, hands-on, and interactive learning. This helps our students to be actively engaged in their learning.",
            },
            {
              img: "/images/how_4.jpeg",
              title: "Inspire",
              desc: "We inspire our students to be excited about their learning, encouraging them to be academically and socially successful.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl h-full flex flex-col"
              variants={cardVariants}
              whileHover="hover"
              style={{ minHeight: "350px" }} // Taller cards
            >
              <div className="mb-4 overflow-hidden rounded-md">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 style={{fontFamily:"font3"}} className="text-xl md:text-2xl font-semibold mb-3 text-gray-400 hover:text-[#43CEC6]">
                {card.title}
              </h2>
              <p className="mt-auto text-gray-800">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default HelpSection;
