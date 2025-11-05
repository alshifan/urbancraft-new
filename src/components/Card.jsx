import React from "react";

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        
      </div>
    </div>
  );
}