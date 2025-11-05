import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

// Modern Photo Header with image background
const ModernPhotoHeader = ({ imageUrl, badge, alt = "" }) => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[10rem] md:min-h-[14rem] rounded-xl md:rounded-2xl relative overflow-hidden group">
      {/* Image */}
      <img 
        src={imageUrl} 
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5 opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
      
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block text-xs font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 shadow-lg">
            {badge}
          </span>
        </div>
      )}
      
      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-yellow-500/20 to-transparent opacity-50 rounded-tl-full" />
    </div>
  );
};

// Featured Photo Header (same size as ModernPhotoHeader)
const FeaturedPhotoHeader = ({ imageUrl, badge, alt = "" }) => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] md:min-h-[14rem] rounded-xl md:rounded-2xl relative overflow-hidden group">
    {/* Image */}
    <img 
      src={imageUrl} 
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
    
    {/* Badge */}
    {badge && (
      <div className="absolute top-6 left-6 z-10">
        <span className="inline-block text-xs font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-lg">
          {badge}
        </span>
      </div>
    )}
    
    {/* Decorative corner elements */}
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-yellow-500/20 to-transparent opacity-50 rounded-tl-full" />
    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-30 rounded-br-full" />
  </div>
);

export function BentoGridDemo() {
  return (
    <div className="space-y-12 md:space-y-20">
      {/* Strategic & Industrial Services */}
      <div>
        <div className="text-center mb-8 md:mb-12">
          
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
            Strategic & Industrial <span className="text-yellow-500">Solutions</span>
          </h3>
        </div>
        <BentoGrid className="max-w-7xl mx-auto">
          {strategicServices.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
            />
          ))}
        </BentoGrid>
      </div>

      {/* Building & Maintenance Solutions */}
      <div>
        <div className="text-center mb-8 md:mb-12">
          
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
            Building & Maintenance <span className="text-yellow-500">Solutions</span>
          </h3>
        </div>
        <BentoGrid className="max-w-7xl mx-auto">
          {buildingServices.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}


// Strategic & Industrial Services
const strategicServices = [
  {
    title: "End-to-End Procurement",
    description: "Sourcing, negotiation, and supplier onboarding (FOB, C&F, CIF).",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
        alt="Procurement and sourcing"
      />
    ),
  },
  {
    title: "Vendor Managed Inventory",
    description: "Streamlined inventory control and replenishment (VMI).",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80"
        alt="Warehouse inventory"
      />
    ),
  },
  {
    title: "Shutdown & Spot Orders",
    description: "Rapid sourcing for urgent plant and project needs.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80"
        alt="Industrial plant shutdown"
      />
    ),
  },
  {
    title: "Strategic Advisory",
    description: "Supplier development, benchmarking, and compliance support.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
        alt="Strategic consultation"
      />
    ),
  },
  
];

// Building & Maintenance Services
const buildingServices = [
  // Structural & Repair Services - Featured
  {
    title: "Ceiling Solutions",
    description: "Ensuring structural integrity and aesthetic appeal with expert ceiling solutions.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
        alt="Ceiling installation"
      />
    ),
  },
  {
    title: "Bin Cleaning & Freshening",
    description: "Professional cleaning and sanitization services for waste management systems.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1653858712082-9877c9fbe417?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3731"
        alt="Bin cleaning"
      />
    ),
  },
  {
    title: "Drywall & Partition Services",
    description: "Transforming spaces with precision and quality craftsmanship.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80"
        alt="Drywall installation"
      />
    ),
  },
  {
    title: "Concrete Restoration",
    description: "Restoring and enhancing concrete structures to their former glory.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
        alt="Concrete restoration"
      />
    ),
  },
  // Aesthetic & Finishing Services
  {
    title: "Frosted Glass Solutions",
    description: "Enhancing privacy and aesthetics with professional glass frosting solutions.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1711006777187-2c991e1b90b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3298"
        alt="Frosted glass"
      />
    ),
  },
  {
    title: "Tile Installation & Grouting",
    description: "Crafting durable and visually appealing tile solutions for your spaces.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1563219125-1db796e20ff2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2800"
        alt="Tile installation"
      />
    ),
  },
  {
    title: "Painting & Coating Services",
    description: "Bringing vibrancy and life to your walls with meticulous attention to detail.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2448"
        alt="Professional painting"
      />
    ),
  },
  // Custom & Functional Solutions
  {
    title: "Furniture Restoration",
    description: "Restoring functionality and aesthetics to your furniture with expert drawer repair.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80"
        alt="Furniture restoration"
      />
    ),
  },
  {
    title: "General Services",
    description: "Providing reliable and professional contract services tailored to your specific requirements.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3538"
        alt="General contracting"
      />
    ),
  },
  {
    title: "Security & Boundary Fencing",
    description: "Offering durable and secure fencing solutions tailored to your property's needs.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1628493706937-a5138cfcefb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3540"
        alt="Security fencing"
      />
    ),
  },
  // Outdoor & Cleaning Services
  {
    title: "Landscape Design & Maintenance",
    description: "Creating sustainable, beautiful, and functional outdoor environments.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
        alt="Landscape design"
      />
    ),
  },
  {
    title: "Facility Cleaning Services",
    description: "Maintaining cleanliness and hygiene with thorough, efficient cleaning services.",
    header: (
      <ModernPhotoHeader 
        imageUrl="https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3540"
        alt="Facility cleaning"
      />
    ),
  },
];
