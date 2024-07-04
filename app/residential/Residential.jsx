'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import project1 from '@/public/assets/hero/hero.png';
import project4 from '@/public/assets/extra/dine.jpeg';
import project5 from '@/public/assets/hero/hero-2.png';
import project6 from '@/public/assets/extra/dining.jpeg';
import project7 from '@/public/assets/extra/room1.jpeg';
import project8 from '@/public/assets/extra/room2.jpeg';
import project9 from '@/public/assets/hero/hero-1.png';
import project10 from '@/public/assets/extra/interior-2.jpeg';
import project11 from '@/public/assets/extra/kitchen.jpeg';

const projects = [
  { id: 4, image: project4, title: 'Dine' },
  { id: 5, image: project5, title: 'Bedroom' },
  { id: 6, image: project6, title: 'Dining' },
  { id: 7, image: project7, title: 'Bedroom 2' },
  { id: 8, image: project8, title: 'Bedroom Side' },
  { id: 9, image: project9, title: 'Hall Area' },
  { id: 10, image: project10, title: 'Drawing' },
  { id: 11, image: project11, title: 'Kitchen' },
];

const Residential = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreenImage = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="bg-white mt-20">
      <div className="w-full relative h-96 mb-12">
        <Image
          src={project1}
          alt="Residential Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">Residential Projects</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-15 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <Link href={project.image.src} passHref>
                <div target="_blank" rel="noopener noreferrer" onClick={() => openFullscreenImage(project.image)}>
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={`Project ${project.id}`}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 shadow-md rounded hover:scale-95 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                </div>
              </Link>
              <div className="text-center mt-2">
                <p className="text-black font-bold">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={closeFullscreenImage}
          >
            &#x2715;
          </button>
          <Image
            src={fullscreenImage}
            alt="Fullscreen Project"
            layout="responsive"
            width={800}
            height={600}
            className="rounded-lg shadow-xl"
          />
        </div>
      )}
    </section>
  );
};

export default Residential;
