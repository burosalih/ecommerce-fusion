import React, { useState } from "react";
import { FaViber, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const openViberChat = () => {
    window.open("viber://chat?number=+387644094444"); //samo stavit njegov broj na sve ovo
  };

  const openWhatsAppChat = () => {
    window.open("https://wa.me/+387644094444");
  };

  const openPhoneCall = () => {
    window.open("tel:+387644094444");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-primary hover:bg-purple-900 text-white font-semibold py-4 px-4 rounded-full shadow-lg animate-ring"
        onClick={toggleOptions}
      >
        <FaPhone className="text-4xl text-white" />
      </button>
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-gray-100 border border-gray-200 rounded-full shadow-lg p-2">
          <div className="flex flex-col gap-5">
            <button
              className="text-white bg-indigo-500 hover:bg-indigo-600 rounded-full p-2"
              onClick={openViberChat}
            >
              <FaViber className="inline-block text-4xl" />
            </button>
            <button
              className="text-white bg-green-500 hover:bg-green-600 rounded-full p-2"
              onClick={openWhatsAppChat}
            >
              <FaWhatsapp className="inline-block text-4xl" />
            </button>
            <button
              className="text-white bg-teal-500 hover:bg-teal-600 rounded-full p-2"
              onClick={openPhoneCall}
            >
              <MdPhone className="inline-block text-4xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
