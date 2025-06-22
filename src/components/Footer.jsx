import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {

  const socialLinks = [
    { icon: <FaFacebook className="text-white text-xl" />, url: "https://www.facebook.com/" },
    { icon: <FaTwitter className="text-white text-xl" />, url: "https://x.com/" },
    { icon: <FaInstagram className="text-white text-xl" />, url: "https://www.instagram.com/" },
    { icon: <FaYoutube className="text-white text-xl" />, url: "https://www.youtube.com/" }
  ];

  return (
    <footer className=" px-4 sm:px-6 lg:px-8 overflow-hidden ">
      <div className="max-w-7xl mx-auto bg-white bg-opacity-90 rounded-t-xl shadow-2xl mt-10 py-5">

        {/* Top Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img 
            src="/school_logo2.png" 
            alt="Riverdale Christian Academy" 
            className="h-40 lg:w-100  object-cover "
          />
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#D9BF52] text-black  rounded-full p-3  flex items-center justify-center hover:bg-[#333333] transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-1"
        >
          <p className="text-sm font-semibold text-gray-500">
            Little Flower Vidya Mandir © 2015.
          </p>
        </motion.div>

        {/* Reserved Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm md:text-sm text-gray-500 font-semibold ">
            reserved. Developed by Vikram Kumar
          </p>
        </motion.div>
        
      </div>
    </footer>
  );
}