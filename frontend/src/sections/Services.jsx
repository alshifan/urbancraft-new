import React from "react";
import { motion } from "framer-motion";
import { BentoGridDemo } from "../components/BentoGridDemo";
import { Globe, Cog, Recycle, Truck, Package, Puzzle, ShieldCheck, Boxes } from "lucide-react";

export default function Services() {
  const highlights = [
    {
      icon: (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
          <Globe className="w-6 h-6" />
        </span>
      ),
      title: "Global Sourcing Network",
      description: "Access to verified suppliers across North America, Europe, Asia & Middle East with 24/7 support.",
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
          <Cog className="w-6 h-6" />
        </span>
      ),
      title: "Industrial Spares & Equipment",
      description: "Comprehensive inventory of industrial spare parts, components, and equipment for all sectors.",
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
          <Recycle className="w-6 h-6" />
        </span>
      ),
      title: "Recycled Materials & Scrap",
      description: "Sustainable sourcing of high-quality recycled industrial materials and scrap commodities.",
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
          <Truck className="w-6 h-6" />
        </span>
      ),
      title: "Supply Chain Solutions",
      description: "End-to-end logistics and supply chain management services with complete transparency.",
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
          <Package className="w-6 h-6" />
        </span>
      ),
      title: "Polymers & Packaging",
      description: "Quality polymers and custom packaging solutions for industrial and commercial applications.",
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
          <Puzzle className="w-6 h-6" />
        </span>
      ),
      title: "Custom Kits & Assemblies",
      description: "Tailored procurement solutions including custom kits and assemblies for unique requirements.",
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
          <ShieldCheck className="w-6 h-6" />
        </span>
      ),
      title: "Certified Products",
      description: "ISO certified materials and components with full documentation and traceability.",
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-400 group-hover:text-white transition-colors duration-300">
          <Boxes className="w-6 h-6" />
        </span>
      ),
      title: "Bulk Packaging",
      description: "Efficient, cost-effective packaging solutions for large-scale orders and industrial shipments.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-bold text-yellow-500 uppercase tracking-wider bg-yellow-500/10 px-4 py-2 rounded-full mb-6">
            Our Services
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Complete Sourcing{" "}
            <span className="text-yellow-500">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From industrial spares to supply chain management, we deliver comprehensive solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Highlights Bar */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-500/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 mb-4 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-black mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Bento Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0 }}
        >
          
          
          <BentoGridDemo />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-12 md:p-16 text-center text-black overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-black/10 rounded-2xl mb-6">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Streamline Your Supply Chain?
            </h3>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Get in touch with our experts today and discover how we can optimize your sourcing operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 font-bold text-yellow-500 bg-black rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Request a Quote
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-white/20 backdrop-blur-sm border-2 border-black/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
