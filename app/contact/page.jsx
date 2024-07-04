'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ImageTeam from '@/public/assets/arch/team-work.png';
import WhatsappChatIcon from '@/components/whatsapp';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage('Email sent successfully');
      } else {
        const errorData = await res.json();
        setResponseMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setResponseMessage('Error sending email');
    }
  };

  return (
    <section className="bg-black py-12 relative mt-20">
      <div className="container mx-auto px-4 mt-10 mb-6">
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="uppercase text-xl md:text-3xl font-semibold mb-8 font-sans1">
              Transform Your Space with Sankalpa Designs: Elegance, Style, and Innovation.
            </h2>
            <form className="max-w-md" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-2 font-sans1">Enter Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full font-sans1 px-4 py-2 border-b border-gray-500 bg-transparent focus:border-yellow-500 focus:outline-none"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-semibold mb-2 font-sans1">Phone</label>
                <div className="flex items-center">
                  <span className="mr-2 font-sans1">🇮🇳</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border-b border-gray-500 bg-transparent focus:border-gray-500 focus:outline-none font-sans1"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-2 font-sans1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border-b border-gray-500 bg-transparent focus:border-yellow-500 focus:outline-none font-sans1"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-white text-gray-900 py-2 px-4 mt-4 hover:bg-gray-500 hover:text-white transition-colors focus:outline-none"
              >
                Send
              </button>
              <p className="mt-4 text-xs font-sans1">By clicking on the "Send" button, I agree to the terms of the privacy policy.</p>
              {responseMessage && <p className="mt-4 text-sm font-sans1">{responseMessage}</p>}
            </form>
            <div className="mt-8">
              <p className="font-semibold font-sans1">BANGALORE</p>
              <p className='font-sans1'>+91 7338058170</p>
              <p className='font-sans1'>admin@sankalpadesigns.in</p>
              <p className='font-sans1'>#380, 4th cross Chikkamaranahalli, MSR Nagar, Mathikere, Bangalore -560054
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end h-full w-full relative">
            <Image src={ImageTeam} alt="Teamwork" layout="responsive" objectFit="cover" />
          </div>
        </div>
      </div>
      {/* Golden Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 border-t border-white"></div>
      <WhatsappChatIcon/>
    </section>
  );
};

export default Contact;
