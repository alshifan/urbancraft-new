import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700">
UrbanCraft Global              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Smart{" "}
              <span className="relative inline-block">
                <span className="text-yellow-500"> Sourcing</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M0 6C50 2, 100 2, 200 6"
                    stroke="#EAB308"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>{" "}
Starts Here            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
Your trusted gateway to global industrial supply, offering fast, reliable, and cost-effective procurement solutions. From rare spares to recycled materials, we deliver with precision, speed, and trust.
</motion.p>

            

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-yellow-500 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Services
                  
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-yellow-500 hover:text-black transition-all duration-300 hover:shadow-lg"
              >
                Partner with Us
              </a>
            </motion.div>
          </div>

          {/* Right Content - Image Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Industrial Facility"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  
                </div>
              </div>

              {/* Small Images */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                  alt="Supply Chain"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
                  alt="Quality Control"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-yellow-500 rounded-4xl shadow-2xl p-6 "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
                  
                
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
