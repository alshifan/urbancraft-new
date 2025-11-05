import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const stats = [
    {
      number: "20+",
      label: "Global Partners",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      number: "99.8%",
      label: "Success Rate",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: "Global Network",
      description:
        "Access to verified suppliers across North America, Europe, Asia, and the Middle East with 24/7 support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality control, ISO certifications, and full documentation for every component we source.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Reliable Fulfillment",
      description:
        "Proven track record in on-time delivery, even for shutdown or urgent orders.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      title: "Cost Efficiency",
      description:
        "Competitive pricing through our extensive network, helping you reduce costs without compromising quality.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-bold text-yellow-500 uppercase tracking-wider bg-yellow-500/10 px-4 py-2 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Powering Industries{" "}
            <span className="text-yellow-500">Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 2015, UrbanCraft Global has been the trusted sourcing partner for industrial leaders across four continents. We turn complex supply chains into seamless solutions.
          </p>
        </motion.div>

        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-2">
          {/* Image Collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                    alt="Supply Chain"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
                    alt="Quality Control"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80"
                    alt="Industrial"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80"
                    alt="Logistics"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-yellow-500 rounded-2xl shadow-2xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold text-black">5+</p>
              <p className="text-sm font-semibold text-black/80">Years</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Your Trusted Partner in{" "}
              <span className="text-black">Global Sourcing</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            UrbanCraft Global is a tech-enabled international trading firm
delivering end-to-end procurement and supply chain solutions for industrial clients
worldwide. Inspired by global best practices and digital innovation, we simplify sourcing
through strategic partnerships, automation, and transparent process management.            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            With a strong network across North America, Europe, Asia, and the Middle East, we
specialize in rare spares, shutdown orders, and recycled industrial materials. Our platform-
driven approach ensures faster fulfillment, optimized costs, and measurable outcomes—
empowering industries to operate with speed, precision, and confidence.            </p>

            {/* Check list */}
            <ul className="space-y-4">
              {[
                "Real-time inventory tracking & logistics",
                "Dedicated account management team",
                "Custom solutions for complex requirements",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Section - Minimal & Subtle */}
        <motion.div
          className="mb-24 border-b border-gray-200 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Subtle icon - small and minimal */}
                <div className="inline-block text-yellow-500 opacity-40 mb-4 group-hover:opacity-70 transition-opacity duration-500">
                  {stat.icon}
                </div>

                {/* Number */}
                <motion.div
                  className="text-5xl md:text-6xl font-light text-black mb-2 tracking-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>

                {/* Subtle vertical line on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-0 bg-gradient-to-t from-yellow-500 to-transparent group-hover:h-8 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Why Choose Us */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <h3 className="text-3xl lg:text-5xl font-bold text-black mb-6">
            Why Partner with{" "}
            <span className="text-yellow-500">UrbanCraft?</span>
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We combine global reach with local expertise, delivering reliable sourcing solutions tailored to your industrial needs.
          </p>
        </motion.div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {value.icon}
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-black mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {value.description}
              </p>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
