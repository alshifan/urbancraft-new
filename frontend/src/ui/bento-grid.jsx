import { cn } from "../lib/utils";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto",
        className
      )}
      style={{
        gridAutoRows: 'auto'
      }}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={itemRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        "row-span-1 rounded-2xl md:rounded-3xl group/bento transition-all duration-700 p-4 md:p-8 bg-white border border-gray-200 hover:border-gray-300 flex flex-col relative overflow-hidden cursor-pointer h-full",
        className
      )}
      style={{
        transform: isHovered 
          ? "translateY(-12px) scale(1.02)" 
          : "translateY(0) scale(1)",
        boxShadow: isHovered
          ? "0 24px 48px -12px rgba(0, 0, 0, 0.08)"
          : "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Spotlight effect that follows cursor */}
      <div
        className="absolute inset-0 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 179, 8, 0.06), transparent 40%)`,
        }}
      />

      {/* Animated gradient border overlay */}
      <div
        className={`absolute inset-0 rounded-3xl transition-opacity duration-700 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `linear-gradient(135deg, transparent 0%, rgba(234, 179, 8, 0.1) 50%, transparent 100%)`,
          backgroundSize: "200% 200%",
          animation: isHovered ? "gradient-shift 3s ease infinite" : "none",
        }}
      />

      {/* Floating number indicator */}
      <motion.div
        className={`absolute top-8 right-8 text-8xl font-bold transition-all duration-700 ${
          isHovered ? "opacity-5 scale-110" : "opacity-0 scale-100"
        }`}
        style={{
          color: "#EAB308",
          transform: isHovered ? "rotate(-12deg)" : "rotate(0deg)",
        }}
      >
        •
      </motion.div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full justify-between space-y-3 md:space-y-4">
        {/* Header with scale animation */}
        <div
          className={`transition-all duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        >
          {header}
        </div>

        {/* Text content */}
        <div className="flex flex-col space-y-3 md:space-y-4">
          <div className="space-y-2 md:space-y-3">
            {/* Title with letter spacing animation */}
            <h4
              className={`font-bold text-xl md:text-2xl text-black transition-all duration-500 ${
                isHovered ? "tracking-wide" : "tracking-normal"
              }`}
            >
              {title}
            </h4>

            {/* Description with fade */}
            <p
              className={`text-sm md:text-base text-gray-600 leading-relaxed transition-all duration-500 ${
                isHovered ? "text-gray-800" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          </div>

          {/* Animated underline indicator */}
          <div className="relative pt-3 md:pt-4">
            <div
              className={`h-px bg-gradient-to-r from-yellow-500 to-transparent transition-all duration-700 ${
                isHovered ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Subtle corner accent */}
      <div
        className={`absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-500 rounded-full blur-3xl transition-all duration-1000 ${
          isHovered ? "opacity-5 scale-150" : "opacity-0 scale-100"
        }`}
      />
    </div>
  );
};
