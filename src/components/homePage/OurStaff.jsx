import React from "react";
import { Link } from "react-router-dom";

const OurStaff = () => {
  const staffMembers = [
    { id: 1, name: "John Doe", role: "Director", image: "/images/Our_Staff1.png" },
    { id: 2, name: "Jane Smith", role: "Principal", image: "/images/Our_Staff2.png" },
    { id: 3, name: "Robert Johnson", role: "Head Teacher", image: "/images/Our_Staff3.png" },
  ];

  return (
    <div className="w-full lg:min-h-screen  px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center gap-10 hover:shadow-xl transition-shadow duration-300">
        <h1 style={{fontFamily:"font3"}} className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-fadeIn">
          Our <span className="text-[#27186B]">Staff</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {staffMembers.map((staff, index) => (
            <div 
              key={staff.id}
              className="flex flex-col items-center ju group animate-float"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h1 className="text-2xl font-semibold text-gray-800 group-hover:text-[#27186B] transition-colors duration-300">
                {staff.name}
              </h1>
              <h4 className="text-lg text-gray-800 font-semibold mt-2 group-hover:text-gray-800 transition-colors duration-300">
                {staff.role}
              </h4>
            </div>
          ))}
        </div>

        <Link 
          to="/about-our-staff" 
          className="mt-6 px-8 py-3 bg-[#D9BF52] text-gray-800 text-lg font-semibold rounded-full hover:bg-yellow-600 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          About Our Staff
        </Link>
        
      </div>
    </div>
  );
};

export default OurStaff;