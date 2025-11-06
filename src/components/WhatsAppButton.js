import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  const phoneNumber = "+923029825213";
  const message = encodeURIComponent("Hello, I need some help!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-300 rounded-full shadow-lg transition-transform transform hover:scale-110"
    >
      <div className="-mt-[1px]">
        <FaWhatsapp color="green" size={35} />
      </div>
    </a>
  );
};

export default WhatsAppButton;
