// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import Logo from '@/public/assets/Logo1.png'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto px-4 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold mb-4 text-yellow-500">
            <Image src={Logo} alt="Sankalpa Designs" width={60} height={50}/>
            </h3>
            <p className="text-gray-400 text-center md:text-left">Transforming Spaces with Elegance</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="/"><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Home</span></Link></li>
              <li><Link href="/about"><span className="text-gray-400 hover:text-white  transition duration-300 cursor-pointer">About Us</span></Link></li>
              <li><Link href="/portfolio"><span className="text-gray-400 hover:text-white  transition duration-300 cursor-pointer">Portfolio</span></Link></li>
              <li><Link href="/contact"><span className="text-gray-400 hover:text-white  transition duration-300 cursor-pointer">Contact Us</span></Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact Information</h3>
            <p className="text-gray-400">#380, 4th cross Chikkamaranahalli, MSR Nagar, Mathikere, Bangalore -560054
            </p>
            <p className="text-gray-400">Email: admin@sankalpadesigns.in</p>
            <p className="text-gray-400">Phone: +91 7338058170</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center max-h-1">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Sankalpa Designs. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebook className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" size={16} />
            <FaTwitter className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" size={16} />
            <FaInstagram className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" size={16} />
            <FaLinkedin className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" size={16} />
            <FaPinterest className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" size={16} />
          </div>
        </div>
      </div>
      <div className="absolute border-t border-gray-700"></div>
      <p className='relative text-xs mt-2 text-white/10 justify-center items-center flex mb-[-20px]'>&copy; made by Aman Yadav</p>
    </footer>
  );
};

export default Footer;
