import React, { useState } from 'react';
import { FaViber, FaWhatsapp, FaFacebookMessenger, FaPhone } from 'react-icons/fa';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const openViberChat = () => {
    window.open('viber://chat?number=1234567890'); //samo stavit njegov broj na sve ovo
  };

  const openWhatsAppChat = () => {
    window.open('https://wa.me/1234567890');
  };

  const openMessengerChat = () => {
    window.open('https://m.me/yourPage'); 
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-primary hover:bg-emerald-600 text-white font-semibold py-4 px-4 rounded-full shadow-lg animate-ring"
        onClick={toggleOptions}
      >
        <FaPhone className="text-4xl text-white"/>
      </button>
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-gray-100 border border-gray-200 rounded-full shadow-lg p-2">
          <div className="flex flex-col gap-5">
            <button className="text-white bg-indigo-500 hover:bg-indigo-600 rounded-full p-2" onClick={openViberChat}>
              <FaViber className="inline-block text-4xl" />
            </button>
            <button className="text-white bg-green-500 hover:bg-green-600 rounded-full p-2" onClick={openWhatsAppChat}>
              <FaWhatsapp className="inline-block text-4xl" />
            </button>
            <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-2" onClick={openMessengerChat}>
              <FaFacebookMessenger className="inline-block text-4xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
