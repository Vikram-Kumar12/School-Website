import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowLeft, FiArrowRight, FiCalendar, FiInfo } from 'react-icons/fi';
import ContactForm from "../components/ContactForm"
import LocationImage from "../components/homePage/LocationImage"
const Gallery = () => {
  // Gallery categories
  const categories = [
    'All',
    'Annual Functions',
    'Sports Events',
    'Classroom Activities',
    'Cultural Celebrations',
    'Infrastructure',
    'Other Highlights'
  ];

  // Sample gallery items (replace with your actual images)
  const galleryItems = [
    { id: 1, category: 'Annual Functions', image: '/images/gallery/annual-1.jpg', date: '15-Mar-2023', title: 'Annual Day Performance', description: 'Students performing cultural dance' },
    { id: 2, category: 'Sports Events', image: '/images/gallery/sports-1.jpg', date: '10-Feb-2023', title: 'Sports Day', description: 'Annual sports competition' },
    { id: 3, category: 'Classroom Activities', image: '/images/gallery/class-1.jpg', date: '05-Jan-2023', title: 'Science Fair', description: 'Students showcasing projects' },
    { id: 4, category: 'Cultural Celebrations', image: '/images/gallery/cultural-1.jpg', date: '26-Jan-2023', title: 'Republic Day', description: 'Flag hoisting ceremony' },
    { id: 5, category: 'Infrastructure', image: '/images/gallery/infra-1.jpg', date: '20-Dec-2022', title: 'School Library', description: 'Newly renovated library' },
    { id: 6, category: 'Other Highlights', image: '/images/gallery/other-1.jpg', date: '15-Nov-2022', title: 'Field Trip', description: 'Educational visit to museum' },
    { id: 7, category: 'Annual Functions', image: '/images/gallery/annual-2.jpg', date: '20-Mar-2023', title: 'Prize Distribution', description: 'Honoring meritorious students' },
    { id: 8, category: 'Sports Events', image: '/images/gallery/sports-2.jpg', date: '12-Feb-2023', title: 'Cricket Match', description: 'Inter-school tournament' },
    { id: 9, category: 'Classroom Activities', image: '/images/gallery/class-2.jpg', date: '08-Jan-2023', title: 'Art Class', description: 'Students painting landscapes' },
    { id: 10, category: 'Cultural Celebrations', image: '/images/gallery/cultural-2.jpg', date: '15-Aug-2022', title: 'Independence Day', description: 'Cultural program' },
    { id: 11, category: 'Infrastructure', image: '/images/gallery/infra-2.jpg', date: '10-Dec-2022', title: 'Playground', description: 'New sports facilities' },
    { id: 12, category: 'Other Highlights', image: '/images/gallery/other-2.jpg', date: '05-Nov-2022', title: 'Guest Lecture', description: 'Industry expert interaction' }
  ];

  // Sample videos (replace with your actual videos)
  const videos = [
    { id: 1, title: 'Annual Day 2023', embedUrl: '/images/video/annualday-1.mp4' },
    { id: 2, title: 'Sports Meet Highlights', embedUrl: '/images/video/sports-1.mp4' },
    { id: 3, title: 'Science Exhibition', embedUrl: '/images/video/science-1.mp4' }
  ];

  // State management
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  // Filter images by category
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{fontFamily:"font3"}} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-semibold text-center">
            Explore glimpses of academic excellence, cultural celebrations, sports activities, and joyful moments at Little Flower Vidya Mandir.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 object-cover cursor-pointer transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.section 
          className="mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 style={{fontFamily:"font3"}} className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-10">
            Video <span className="text-blue-600">Highlights</span>
          </h2>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto bg-gray-200 rounded-xl overflow-hidden shadow-lg ">
              <iframe
                src={videos[currentVideo].embedUrl}
                title={videos[currentVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted"
                allowFullScreen
                className="w-full h-64 sm:h-96"
              ></iframe>
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentVideo === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact form */}
        <div><ContactForm/></div>

        {/* Location */}
        <div><LocationImage/></div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white p-2"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <FiX className="w-6 h-6" />
              </button>
              
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold text-gray-800">{selectedImage.title}</h3>
                <div className="flex items-center text-gray-600 mt-2">
                  <FiCalendar className="mr-2" />
                  <span className="text-sm">{selectedImage.date}</span>
                </div>
                <p className="mt-2 text-gray-700 flex items-start">
                  <FiInfo className="mr-2 mt-1 flex-shrink-0" />
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
