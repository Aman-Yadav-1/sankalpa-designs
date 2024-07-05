'use client'
import React from 'react';
import './Hero.css';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for Next.js navigation

// Install Swiper modules
SwiperCore.use([]);

const Hero = ({ images }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        pagination={{ clickable: true }}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <Image
                src={image}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 ease-out"
                priority={index === 0} // Ensure the first image loads with priority
              />
              {/* Vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/25 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Text and Button Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-4xl font-sans1 font-semibold z-10 pointer-events-none mt-20 ml-5">
        <span>Discover your <span className='font-playwrite'>living</span> space.</span>
        <Link href="/contact">
          <div className="mt-4 px-2 py-1 bg-black/50 text-white text-xs hover:text-black hover:bg-white/50 border border-white/50 pointer-events-auto transition-all duration-1000">
            Get in Touch
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
