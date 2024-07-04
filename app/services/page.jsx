import React from 'react';
import ImageInteriorDesign from '@/public/assets/arch/workspace-2.jpeg';
import ImageArchitecturalDesign from '@/public/assets/arch/workspace.jpeg';
import ImageMinimalistDesign from '@/public/assets/arch/workspace-5.jpeg';
import ServiceCard from './ServiceCard'; 

const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Commercial Space"
            description="Transform your living spaces into aesthetically pleasing environments for professional lifestyle."
            image={ImageInteriorDesign}
            href="/commercial"
          />
          <ServiceCard
            title="Residential Space"
            description="Innovative residential designs tailored to meet your specific requirements."
            image={ImageArchitecturalDesign}
            href="/residential"
          />
          <ServiceCard
            title="Minimalist Design"
            description="Minimal designs tailored for your shoothing experience."
            image={ImageMinimalistDesign}
            href="/contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
