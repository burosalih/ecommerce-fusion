import React from "react";
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-emerald-700 py-12">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          <p>Kontaktirajte nas: </p>
          <a href="tel:+061111111" className="flex items-center py-4 text-xl">
            <FaPhone className="mr-2 text-2xl" />
            <p>06111111</p>
          </a>
          <div className="flex items-center py-4 text-xl">
            <FaEnvelope className="mr-2 text-2xl" />
            <p><a href="mailto:example@example.com">dženo@gmail.com</a></p>
          </div>
        </div>
        <div className="text-white text-right">
          © 2024 KAMAGRA
        </div>
      </div>
    </footer>
  );
};

export default Footer;
