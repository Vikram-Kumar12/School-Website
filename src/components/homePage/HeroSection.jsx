import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const slides = [
    {
      image: "/images/hero1.jpg",
      title: "Activity Based",
      subtitle: "Learning",
      textColor: "text-[#FFD223]",
    },
    {
      image: "/images/hero2.jpg",
      title: "Holistic Development",
      subtitle: "Balancing academics with extracurricular excellence",
      textColor: "text-[#FFD223]",
    },
    {
      image: "/images/hero3.jpg",
      title: "Christian Values",
      subtitle: "Building character with faith-based principles",
      textColor: "text-[#FFD223]",
    },
  ];

  // Auto-rotate slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className=" relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[800px] xl:h-screen w-full overflow-hidden">

      {/* Background Slides */}
      <div className="relative h-full w-full">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
              }}
              className="absolute inset-0 lg:left-15 lg:right-15 "
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={`mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-16 text-white text-center lg:text-left`}
            >
              <motion.h1 
                style={{fontFamily:"font3"}}
                className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-1 lg:mb-3 ${slides[currentSlide].textColor}`}
                whileHover={{ scale: 1.02 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 md:mb-8"
                whileHover={{ scale: 1.01 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-4 sm:w-6" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
      
    </section>
  );
};

export default HeroSection;