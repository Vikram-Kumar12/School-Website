// components/Header.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F7F7F7] text-black  shadow-lg sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 py-2 ">
        <div className="flex justify-between items-center  ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex   h-16 sm:h-20 md:h-24  w-auto max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] lg:h-[75px] items-center"
          >
            <Link to="/" href="/" passHref>
              <img
                src="/school_logo2.png"
                alt="School Logo"
                className="object-cover w-full h-full mr-2 sm:mr-3 cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={item.path} href={item.path} passHref>
                  <span className="hover:text-secondary transition-colors text-lg xl:text-xl font-semibold text-gray-600 hover:text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#1F085A] hover:after:w-full after:transition-all cursor-pointer">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-2xl focus:outline-none px-3 sm:px-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-2 space-y-2 pb-3"
          >
            {navItems.map((item) => (
              <motion.div key={`mobile-${item.name}`}>
                <Link to={item.path} href={item.path} passHref>
                  <span
                    className="block py-2 px-4 rounded transition-colors text-lg font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
        
      </div>
    </header>
  );
}
