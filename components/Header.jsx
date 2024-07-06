// components/Header.js
"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import LogoWhite from '@/public/assets/Logo1.png';
import LogoBlack from '@/public/assets/Logo1.png'; // Add a white version of the logo
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-black'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={isScrolled ? LogoBlack : LogoWhite}
              alt="Sankalpa Designs"
              width={60}
              height={50}
            />
            {isScrolled && (
              <span className="text-xl text-blue-800 font-sans1 font-medium mt-3">Sankalpa Designs</span>
            )}
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
