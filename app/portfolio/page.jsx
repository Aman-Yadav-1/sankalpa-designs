'use client';

import Link from 'next/link';
import Image from 'next/image';
import commercialImage from '@/public/assets/arch/team-space-2.jpeg'; // Replace with the correct image for commercial
import residentialImage from '@/public/assets/extra/interior-2.jpeg'; // Replace with the correct image for architectural

const Portfolio = () => {
  return (
    <section className="py-12 bg-white mt-5">
      <div className="container mx-auto px-4 mt-15 mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12 font-sans1">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/commercial" passHref>
            <div className="relative w-full h-96 cursor-pointer border-2 border-gray-200 p-4 group">
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-white transition-all duration-300 ease-in-out"></div>
              <Image
                src={commercialImage}
                alt="Commercial Projects"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 shadow-md rounded transform group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-35 flex flex-col items-center justify-center p-4">
                <h3 className="text-3xl text-white mb-2">Commercial</h3>
                <p className="text-white text-center">Explore our commercial projects featuring innovative designs and modern aesthetics, perfect for business environments.</p>
              </div>
            </div>
          </Link>
          <Link href="/residential" passHref>
            <div className="relative w-full h-96 cursor-pointer border-2 border-gray-200 p-4 group">
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-white transition-all duration-300 ease-in-out"></div>
              <Image
                src={residentialImage}
                alt="Residential Projects"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 shadow-md rounded transform group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-35 flex flex-col items-center justify-center p-4">
                <h3 className="text-3xl text-white mb-2">Residential</h3>
                <p className="text-white text-center">Discover our residential projects that showcase cutting-edge design and unique residential flair.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
