import React, { forwardRef } from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = forwardRef((props, ref) => (
  <footer
    ref={ref}
    id="footer"
    className="bg-gradient-to-b from-primary to-emerald-700 py-12"
  >
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-white">
        <p>Kontaktirajte nas: </p>
        <a href="tel:+061111111" className="flex items-center py-4 text-xl">
          <FaPhone className="mr-2 text-2xl" />
          <p>+387644094444</p>
        </a>
        <div className="flex items-center py-4 text-xl">
          <FaEnvelope className="mr-2 text-2xl" />
          <p>
            <a href="mailto:example@example.com">kamagrabalk@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="text-white">
        <p>Partneri stanice: </p>
        <a
          href="https://kamagra-hrvatska.com/"
          target="_blank" // Ovo otvara link u novom tabu
          rel="noopener noreferrer" // Preporučeno zbog sigurnosti
          className="flex items-center py-4 text-xl"
        >
          <FaGlobe className="mr-2 text-2xl" />
          <p>KAMAGRA BALKAN</p>
        </a>
        <a
          href="https://kamagra-hrvatska.com/"
          target="_blank" // Ovo otvara link u novom tabu
          rel="noopener noreferrer" // Preporučeno zbog sigurnosti
          className="flex items-center py-4 text-xl"
        >
          <FaGlobe className="mr-2 text-2xl" />
          <p>KAMAGRA BOSNA</p>
        </a>
        <a
          href="https://kamagra-hrvatska.com/"
          target="_blank" // Ovo otvara link u novom tabu
          rel="noopener noreferrer" // Preporučeno zbog sigurnosti
          className="flex items-center py-4 text-xl"
        >
          <FaGlobe className="mr-2 text-2xl" />
          <p>KAMAGRA BALKAN</p>
        </a>
      </div>

      <div className="text-white text-right">© 2024 KAMAGRA BALKAN</div>
    </div>
  </footer>
));

export default Footer;
