'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import project2 from '@/public/assets/arch/team-space-2.jpeg';
import project3 from '@/public/assets/arch/workspace-2.jpeg';
import project4 from '@/public/assets/arch/team-space.jpeg';
import project5 from '@/public/assets/arch/workspace-2.jpeg';
import project6 from '@/public/assets/arch/workspace-5.jpeg';

const projects = [
  { id: 3, image: project3, title: 'Work Space' },
  { id: 4, image: project4, title: 'Team Work place' },
  { id: 5, image: project5, title: 'Commercial Space' },
  { id: 6, image: project6, title: 'Team work space' },
];

const Commercial = () => {
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
          src={project2}
          alt="Architectural Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">Commercial Projects</h1>
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

export default Commercial;
