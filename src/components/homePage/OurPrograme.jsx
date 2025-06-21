import React from "react";
import {
  FaBook,
  FaTimes,
  FaGlobe
} from 'react-icons/fa';
import {
  GiChemicalDrop,
  GiOpenBook,
  GiPaintBrush,
  GiEarthAmerica
} from 'react-icons/gi';
const OurPrograme = () => {

  const programs = [
    { icon: <GiChemicalDrop className="text-yellow-500 text-2xl" />, label: "Science", bgUrl: "/images/Our_Programe1.jpeg" },
    { icon: <FaTimes className="text-yellow-500 text-2xl" />, label: "Math", bgUrl: "/images/Our_Programe2.jpeg" },
    { icon: <FaBook className="text-yellow-500 text-2xl" />, label: "Leacture", bgUrl: "/images/Our_Programe3.jpeg" },
    { icon: <FaGlobe className="text-yellow-500 text-2xl" />, label: "History", bgUrl: "/images/Our_Programe4.jpeg" },
    { icon: <GiOpenBook className="text-yellow-500 text-2xl" />, label: "Book", bgUrl: "/images/Our_Programe5.jpeg" },
    { icon: <GiPaintBrush className="text-yellow-500 text-2xl" />, label: "Art", bgUrl: "/images/Our_Programe6.jpeg" },
  ];

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto  shadow-2xl rounded-xl p-8 py-15 flex flex-col items-center justify-center">

        <div className="text-center mb-12">
          <h1 style={{fontFamily:"font3"}}
          className="text-4xl md:text-6xl  xl:text-7xl font-semibold mb-6 text-center animate-fadeIn text-[#27186B]">
            Our programs
          </h1>
          <p className="text-xl lg:text-3xl w-2/3 max-w-3xl mx-auto text-center mb-10 md:mb-0 text-gray-400 animate-fadeIn delay-100" >
            Make a difference in the life of a child with a need
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-10 w-full">

          {programs.map((program, index) => (
            <div
              key={index}
              className="flex justify-center animate-float"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60  rounded-full flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 hover:rotate-360 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundImage:  `url("${program.bgUrl}")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  // minHeight: "40vh",
                  // width: "40vh",
                }}
              >
                <div className="absolute inset-0  bg-opacity-40 rounded-full flex flex-col items-center justify-center transition-opacity duration-300 hover:bg-opacity-20">
                  <h1 className="text-yellow-500 text-xl sm:text-2xl font-bold mb-2">
                    {program.icon}
                  </h1>
                  <h3 className="text-white text-lg sm:text-xl">
                    {program.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}

        </div>
        
      </div>
    </div>
  );
};

export default OurPrograme;
