import React, { useEffect, useState } from "react";

const Testimonials = () => {
  
  const shayaris = [
    "सपने वो नहीं जो हम नींद में देखते हैं, सपने वो हैं जो हमें नींद नहीं आने देते।",
    "आज की मेहनत ही कल की कामयाबी है।",
    "पढ़ाई की कोई उम्र नहीं होती, बस जुनून होना चाहिए।",
    "जो अपने लक्ष्य के लिए जुनूनी होता है, वही इतिहास रचता है।",
    "हर दिन एक नई शुरुआत है, चलो कुछ नया सीखते हैं।",
    "असफलता से मत डरो, क्योंकि असफलता सफलता की पहली सीढ़ी है।",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % shayaris.length);
        setFade(true);
      }, 500); // Half of the transition duration
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto min-h-[300px] sm:min-h-[400px]  rounded-lg px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center justify-center ">
      <div className="w-full h-full flex flex-col items-center justify-center rounded-md py-10 shadow-md hover:shadow-xl transition-shadow duration-300">
        <h1
          style={{ fontFamily: "font3" }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center text-[#27186B] animate-fadeIn"
        >
          Testimonials
        </h1>
        <div className="relative h-32 sm:h-40 md:h-30 w-full flex items-center justify-center">
          <p
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl w-full px-4 sm:px-0 sm:w-5/6 md:w-2/3 max-w-3xl mx-auto text-center text-green-500 italic transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            "{shayaris[index]}"
          </p>
        </div>
        <div className="flex space-x-2 mt-6">
          {shayaris.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setIndex(i);
                  setFade(true);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === i ? "bg-green-600 w-6" : "bg-green-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
