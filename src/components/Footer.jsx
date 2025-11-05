import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-100 via-gray-50 to-white text-gray-700 pt-20 pb-10 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand Info */}
          <div>
            <h3 className="text-3xl font-extrabold text-black mb-4">
              Urban<span className="text-yellow-500">Craft</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transforming cities into sustainable, thriving ecosystems where
              technology meets humanity.
            </p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-black text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

         

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-black text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                {/* Address Icon */}
                <span>
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 10.5c0 7.5-9 11-9 11s-9-3.5-9-11a9 9 0 1118 0z" />
                    <circle cx="12" cy="10.5" r="3" />
                  </svg>
                </span>
                Cambridge, ON
              </li>
              <li className="flex items-center gap-2">
                {/* Phone Icon */}
                <span>
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="inline-flex gap-2">
                  <a href="tel:+12269893966" className="text-sm hover:underline">+1 (226) 989-3966</a>
                  <span>|</span>
                  <a href="tel:+15799851427" className="text-sm hover:underline">+1 (579) 985-1427</a>
                  <span>|</span>
                  <a href="tel:+919940914399" className="text-sm hover:underline">+91 9940914399</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                {/* Mail Icon */}
                <span>
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a
                  href="mailto:support@urbancraft.com"
                  className="hover:text-yellow-600 transition"
                >
                  support@urbancraft.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8 mt-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-yellow-600 font-medium">UrbanCraft</span>.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-600 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-600 transition">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
