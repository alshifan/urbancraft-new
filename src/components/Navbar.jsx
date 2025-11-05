"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/urban_logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/70 shadow-2xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={Logo} alt="UrbanCraft Logo" className="h-12 w-auto" />
          <span className="text-black font-bold text-xl tracking-wide">
            Urban<span className="text-yellow-500">Craft</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black/90 hover:text-yellow-500 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black hover:text-yellow-500 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t shadow-lg ${
              isScrolled 
                ? "bg-white/70 backdrop-blur-xl border-white/20" 
                : "bg-white/95 backdrop-blur-md border-gray-200"
            }`}
          >
            <div className="flex flex-col items-center py-6 space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-black/90 hover:text-yellow-500 font-medium text-lg transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
