import React from "react";
import { motion } from "framer-motion";

export default function BrandMarquee() {
  // Brand logos - using Tesla logo as placeholder for all
  const brands = [
    { name: "Loblaws", logoUrl: "https://upload.wikimedia.org/wikipedia/en/e/e2/Loblaws.svg" },
    { name: "Zehrs", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Zehrs_logo.png" },
    { name: "Rcss", logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/bb/Real_Canadian_Superstore_logo.svg" },
    { name: "TWC", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Wholesale_Club_Logo.svg" },
    { name: "noFrills", logoUrl: "https://upload.wikimedia.org/wikipedia/en/2/23/No_Frills_logo.svg" },
    

  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Trusted by <span className="text-yellow-500">Industry Leaders</span>
          </h2>
          <p className="text-gray-600">
            Partnering with global brands to deliver excellence
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Content */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-8 py-4 group cursor-pointer"
            >
              <div className="h-16 w-32 flex items-center justify-center">
                {/* Brand Logo Image */}
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  className="h-12 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

          </section>
  );
}

