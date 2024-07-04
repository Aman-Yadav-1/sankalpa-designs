'use client';
import Image1 from '@/public/assets/hero/hero.png';
import Image2 from '@/public/assets/hero/hero-1.png';
import Image3 from '@/public/assets/hero/hero-2.png';
import Image4 from '@/public/assets/hero/hero-3.png';
import Testimonial from "@/components/Testimonial";
import About from "./about/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import WhatsappChatIcon from "@/components/whatsapp";
import Hero from '@/components/Hero';

export default function Home() {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <>
      <Hero images={images} />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      <WhatsappChatIcon />
    </>
  );
}
