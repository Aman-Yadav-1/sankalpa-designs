import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ title, description, image, href }) => {
  return (
    <Link href={href}>
      <div className="block overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 bg-white">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
