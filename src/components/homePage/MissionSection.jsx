import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MissionSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const paragraphs = [
        "We embrace the alternative learning style, providing students with quality education that suits their learning style and their needs.",
        "Our goal is to provide quality, individualized education to students of all abilities and backgrounds.",
        "We believe that every child is a gift from God with varying strengths and areas of improvement. We believe all children have the ability to be academically and socially successful."
    ];

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

    const paragraphVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    const buttonVariants = {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };

    return (
        <motion.div 
            className="mt-20 lg:mt-70 py-10 lg:px-20 px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8  rounded-lg shadow-xl bg-white">

                <motion.div 
                    className="flex flex-col items-center justify-center"
                    variants={containerVariants}
                >
                    <motion.h1 
                        style={{fontFamily:"font3"}} 
                        className="text-5xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold mb-4 sm:mb-6 text-[#27186B]"
                        variants={itemVariants}
                    >
                        Mission
                    </motion.h1>
                    <motion.h4 
                        className="text-lg sm:text-xl lg:text-2xl w-full sm:w-5/6 md:w-2/3 max-w-3xl mx-auto text-center mt-4 sm:mt-5 font-semibold text-gray-800"
                        variants={itemVariants}
                    >
                        Our mission is to provide an individualized learning experience for
                        students struggling in traditional classroom environments.
                    </motion.h4>
                </motion.div>

                <motion.div 
                    className="flex flex-col items-center justify-center w-full"
                    variants={containerVariants}
                >
                    <div className="h-40 sm:h-32 md:h-40 w-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeIndex}
                                className="text-base sm:text-lg font-semibold mt-8 sm:mt-0 w-full sm:w-5/6 md:w-2/3 max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-0 text-gray-400 px-4"
                                variants={paragraphVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                            >
                                {paragraphs[activeIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.div 
                        className="flex items-center bg-[#F7F7F7] rounded-full mt-8 sm:mt-10 border border-gray-100 overflow-hidden"
                        variants={itemVariants}
                    >
                        {["MISSION", "GOALS", "BELIEFS"].map((item, index) => (
                            <motion.button
                                key={item}
                                onClick={() => setActiveIndex(index)}
                                className={`px-6 sm:px-8 py-4 sm:py-5 rounded-full text-sm sm:text-md font-semibold cursor-pointer transition-colors duration-300 ${
                                    activeIndex === index ? "bg-[#D9BF52]" : ""
                                }`}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                {item}
                            </motion.button>
                        ))}
                    </motion.div>

                </motion.div>
                
            </div>
        </motion.div>
    );
};

export default MissionSection;