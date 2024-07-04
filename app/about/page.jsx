// pages/about.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-cover bg-center relative py-20 mt-10" >
      <div className="container mx-auto px-4 text-left bg-white bg-opacity-80">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 font-sans1">About Us</h1>
        <h2 className="text-xl font-semibold mb-6 text-gray-800 font-sans1">Crafting Timeless Elegance</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-sans1">
          Welcome to Sankalpa Designs, where the artistry of both contemporary and modern luxury designs takes center stage. Our atelier is dedicated to covering every aspect of the interior design and architecture landscape, specializing in crafting bespoke experiences that seamlessly blend contemporary and modern luxury aesthetics.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-sans1">
          At Sankalpa Designs, our mission is to elevate our presence as a distinguished international design atelier through the creation of projects that embody a truly unique and one-of-a-kind style. Our designs are tailored to reflect the personal tastes and lifestyles of our clients, ensuring that each project is a true reflection of their vision and aspirations.
        </p>
        <a href="/contact" className="inline-block bg-gray-900 text-white py-2 px-3 hover:bg-gray-700 transition duration-300 text-sm font-sans1">Get in Touch</a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 border-t border-gray-100"></div>
    </section>
  );
};

export default About;
