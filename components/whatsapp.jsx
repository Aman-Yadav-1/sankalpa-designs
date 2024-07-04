// components/WhatsappChatIcon.jsx

import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";

const WhatsappChatIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/917338058170" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 bg-green p-3 rounded-full border-black shadow-lg transition-transform transform hover:scale-110"
      >
        <FaWhatsappSquare size={50} />
      </a>
    </div>
  );
};

export default WhatsappChatIcon;
