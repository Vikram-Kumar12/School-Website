import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiNavigation,
} from "react-icons/fi";
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const LocationImage = () => {

  // School location coordinates (replace with your school's actual coordinates)
  const schoolLocation = {
    lat: 24.211950493738595, // Example: Delhi coordinates
    lng: 85.59608901158167,
  };

  // State for info window visibility
  const [showInfo, setShowInfo] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Map styles
  const mapStyles = {
    height: "500px",
    width: "100%",
    borderRadius: "16px",
    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
  };

  // Custom map styling to make it more elegant
  const mapOptions = {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "landscape",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        featureType: "road",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2
            style={{ fontFamily: "font3" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
          >
            Find Our <span className="text-blue-600">Campus</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-semibold ">
            Visit us at our beautiful campus located in the heart of the city.
            We welcome students and parents for tours.
          </p>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="relative"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0  rounded-2xl shadow-xl transform rotate-1 -z-10"></div>
          <div className="relative  p-1 rounded-2xl overflow-hidden shadow-lg h-full">
            <LoadScript
              googleMapsApiKey={apiKey} // Replace with your API key
              onLoad={() => setMapLoaded(true)}
            >
              {mapLoaded && (
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={16}
                  center={schoolLocation}
                  options={mapOptions}
                >
                  <Marker
                    position={schoolLocation}
                    onClick={() => setShowInfo(true)}
                    icon={{
                      url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    }}
                  />
                  {showInfo && (
                    <InfoWindow
                      position={schoolLocation}
                      onCloseClick={() => setShowInfo(false)}
                    >
                      <div className="p-2">
                        <h3 className="font-bold text-blue-600">
                          Little Flower Vidya Mandir
                        </h3>
                        <p className="text-sm">
                          6H6W+MCV, Pesra, Jharkhand 825323
                        </p>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              )}
            </LoadScript>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-12 items-center">
          {/* Contact Info Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="p-8 h-full flex flex-col">

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FiMapPin className="mr-2 text-blue-500" />
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FiMapPin className="text-blue-600 font-semibold" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">
                        Pesra, Gangpacho, Barkatha 
                        <br />
                        Hazaribagh, Jharkhand 825323
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FiPhone className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 1234567890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FiMail className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@littleflowervidyamandir.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FiClock className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Office Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 4:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-auto">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${schoolLocation.lat},${schoolLocation.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md font-semibold"
                >
                  <FiNavigation className="mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Transportation Section */}
          <motion.div
            className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                How to Reach Us
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800">By Metro</h4>
                  </div>
                  <p className="text-gray-600">
                    Nearest metro station: Central Station (500m walk)
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800">By Bus</h4>
                  </div>
                  <p className="text-gray-600">
                    Bus routes: 101, 205, 307 (Stop: Education Avenue)
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800">Parking</h4>
                  </div>
                  <p className="text-gray-600">
                    Visitor parking available at the main gate
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
};

export default LocationImage;

// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for default marker icons in React Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
//   iconUrl: 'leaflet/dist/images/marker-icon.png',
//   shadowUrl: 'leaflet/dist/images/marker-shadow.png',
// });

// const Location = () => {
//   // Replace with your school's coordinates
//   // // lat: 24.211950493738595,  // Example: Delhi coordinates
// // // lng: 85.59608901158167
//   const schoolLocation = [24.211950493738595, 85.59608901158167];

//   return (
//     <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
//           Our <span className="text-green-600">Location</span>
//         </h2>

//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <div className="h-96 w-full rounded-lg overflow-hidden">
//             <MapContainer
//               center={schoolLocation}
//               zoom={15}
//               style={{ height: "100%", width: "100%", borderRadius: "8px" }}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               />
//               <Marker position={schoolLocation}>
//                 <Popup>
//                   Our School <br /> 123 School Road
//                 </Popup>
//               </Marker>
//             </MapContainer>
//           </div>

//           <div className="mt-6 text-center">
//             <p className="text-lg text-gray-600 mb-4">
//               123 School Road, Education Nagar<br />
//               New Delhi, Delhi 110001
//             </p>
//             <a
//               href={`https://www.openstreetmap.org/directions?from=&to=${schoolLocation[0]}%2C${schoolLocation[1]}#map=15/${schoolLocation[0]}/${schoolLocation[1]}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//             >
//               Get Directions
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;
