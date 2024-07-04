"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Abraham',
    rating: 5,
    comment: 'Sankalpa Designs transformed my living space into a sanctuary. Their attention to detail and understanding of my style preferences were exceptional. I am amazed at how they seamlessly integrated functionality with aesthetic appeal. Working with them was a pleasure, and I would highly recommend their services to anyone looking to elevate their home decor.',
  },
  {
    id: 2,
    name: 'Sunil Dutt',
    rating: 4,
    comment: 'I am thrilled with the results from Sankalpa Designs. They perfectly captured the essence of elegance and functionality I desired for my home. From concept to execution, their team showed professionalism and creativity. Each room feels like a work of art, tailored to my lifestyle. I look forward to enjoying my newly designed space for years to come.',
  },
  {
    id: 3,
    name: 'Katrina Cafe',
    rating: 3,
    comment: 'Nulla facilisi. Vivamus nec magna at elit faucibus rhoncus. Sankalpa Designs provided creative solutions that completely revitalized my workspace. Their expertise in creating harmonious environments is unparalleled. I appreciate their attention to detail and ability to transform a mundane office into an inspiring place of productivity. They truly understand the dynamics of interior design.',
  },
  {
    id: 4,
    name: 'Bobby Deol',
    rating: 5,
    comment: 'Working with Sankalpa Designs was a delight. Their ability to blend modern aesthetics with practicality exceeded my expectations. They listened attentively to my ideas and incorporated them seamlessly into the design. The result is a home that reflects my personality and meets my family’s needs perfectly. I am grateful for their professionalism and commitment to excellence.',
  },
  {
    id: 5,
    name: 'Aisha Kapoor',
    rating: 4,
    comment: 'Sed quis ligula nec lectus fermentum tristique sed a ligula. Sankalpa Designs not only met but exceeded my expectations in transforming my kitchen. Their attention to detail and innovative ideas made the process seamless. They understood my vision and brought it to life with their expertise. I highly recommend their services to anyone looking for top-notch interior design solutions.',
  },
  {
    id: 6,
    name: 'Michael Tiger',
    rating: 5,
    comment: 'Vestibulum sit amet ligula eu sem posuere vestibulum eget vitae sapien. I highly recommend Sankalpa Designs for their professionalism and creativity. They created a space that reflects my personality and lifestyle perfectly. Their attention to detail and commitment to quality are evident in every aspect of their work. It was a pleasure collaborating with them on my home renovation project.',
  },
  {
    id: 7,
    name: 'Shraddha Singh',
    rating: 4,
    comment: 'Fusce lobortis orci nec dui convallis, sit amet malesuada ante convallis. Sankalpa Designs understood my vision and brought it to life with elegance and sophistication. I am thrilled with the outcome of their work. They managed to strike a balance between aesthetics and functionality, creating a space that is both beautiful and practical. Their team’s dedication to excellence is commendable.',
  },
  {
    id: 8,
    name: 'David Miller',
    rating: 3,
    comment: 'Integer et nunc eget libero tincidunt tristique non sed erat. Sankalpa Designs provided innovative design solutions that enhanced the functionality of my home office. Their attention to detail is commendable. They understood my requirements and delivered a workspace that inspires productivity and creativity. I appreciate their professionalism and would recommend them without hesitation.',
  },
  {
    id: 9,
    name: 'Kareena Singh',
    rating: 5,
    comment: 'Sankalpa Designs exceeded my expectations in every way possible. They turned my dull living room into a vibrant and cozy space that my family loves to spend time in. Their ability to incorporate unique design elements while maintaining functionality is truly remarkable. I couldn\'t be happier with the results!',
  },
  {
    id: 10,
    name: 'Kevin Peterson',
    rating: 4,
    comment: 'I am impressed with the level of professionalism and creativity shown by Sankalpa Designs. They transformed my outdated kitchen into a modern culinary haven. The attention to detail and quality craftsmanship are evident throughout the entire renovation process. I would highly recommend their services to anyone looking to upgrade their home.',
  },
  {
    id: 11,
    name: 'Emma Watson',
    rating: 5,
    comment: 'From start to finish, Sankalpa Designs delivered exceptional service and design expertise. They listened to my ideas and preferences and transformed them into a beautiful reality. Every room in my house now reflects my personality and style, thanks to their dedication and craftsmanship. I am grateful for their professionalism and would recommend them without hesitation.',
  },
  {
    id: 12,
    name: 'Daniel Doshanjh',
    rating: 4,
    comment: 'Sankalpa Designs provided outstanding interior design solutions for my home. They combined functionality with aesthetic appeal, creating spaces that are both practical and visually stunning. Their attention to detail and ability to understand my needs were impressive. Working with them was a pleasure, and I am delighted with the results.',
  },
];

const Testimonial = ({ testimonial }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 mx-4 mb-8 md:mb-0">
    <div className="text-lg font-semibold mb-2">{testimonial.name}</div>
    <div className="text-gray-600 mb-4">{testimonial.comment}</div>
    <div className="flex items-center">
      {[...Array(testimonial.rating)].map((_, index) => (
        <FaStar key={index} className="w-5 h-5 fill-current text-yellow-400 mr-1" />
      ))}
    </div>
  </div>
);

const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const startIndex = currentPage * testimonialsPerPage;
  const displayedTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 max-w-screen-xl my-8">
        <h1 className="text-4xl font-bold text-center mb-16">Testimonials</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <button
            className="p-2 bg-gray-100 rounded-full text-gray-600 focus:outline-none mx-2"
            onClick={prevTestimonials}
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex flex-col md:flex-row md:justify-between w-full md:w-auto">
            {displayedTestimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <button
            className="p-2 bg-gray-100 rounded-full text-gray-600 focus:outline-none mx-2"
            onClick={nextTestimonials}
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
