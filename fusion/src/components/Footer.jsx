import React, { forwardRef } from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = forwardRef((props, ref) => (
  <footer
    ref={ref}
    id="footer"
    className="bg-gradient-to-b from-primary to-emerald-700 py-12"
  >
    <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
      <div className="text-white mb-8 md:mr-8">
        <p>Kontaktirajte nas: </p>
        <a href="tel:+387644094444" className="flex items-center py-2 text-md md:text-xl">
          <FaPhone className="mr-2 text-xl md:text-2xl" />
          <p>+387644094444</p>
        </a>
        <div className="flex items-center py-2 text-md md:text-xl">
          <FaEnvelope className="mr-2 text-xl md:text-2xl" />
          <p>
            <a href="mailto:kamagrabalk@gmail.com">kamagrabalk@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="text-white mb-8 md:mb-0 md:mr-8">
        <p className="lg:text-center">Partneri stanice: </p>
        <a
          href="https://kamagra-hrvatska.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center py-2 text-lg md:text-xl"
        >
          <FaGlobe className="mr-2 text-xl md:text-2xl" />
          <p className="md:text-sm lg:text-lg">KAMAGRA BALKAN</p>
        </a>
        <a
          href="https://kamagra-hrvatska.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center py-2 text-lg md:text-xl"
        >
          <FaGlobe className="mr-2 text-xl md:text-2xl" />
          <p className="md:text-sm lg:text-lg">KAMAGRA BOSNA</p>
        </a>
        <a
          href="https://kamagra-hrvatska.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center py-2 text-lg md:text-xl"
        >
          <FaGlobe className="mr-2 text-xl md:text-2xl" />
          <p className="md:text-sm lg:text-lg">KAMAGRA BALKAN</p>
        </a>
      </div>
      <div className="text-white md:text-center">© 2024 POTENCIJA KAMAGRA</div>
      <div className="flex justify-end">
        <img src="./Potencija.png" alt="Logo" className="h-36 mr-4" />
      </div>
    </div>
  </footer>
));

export default Footer;
