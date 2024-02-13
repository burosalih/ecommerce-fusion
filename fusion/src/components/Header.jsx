import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  return (
    <header
      className={`${
        isActive ? "bg-primary py-4 shadow-xl" : "bg-primary py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px]">
            <img src={"https://fakeimg.pl/600x400"} alt="" />
          </div>
        </Link>
        <Link to={"/"} onClick={scrollToTop} className="font-primary text-white">
          Home
        </Link>
        <Link to={"#"} onClick={scrollToFooter} className="font-primary text-white">
          Kontakt
        </Link>
        <Link to={"#"} onClick={scrollToFooter} className="font-primary text-white">
          Recenzije
        </Link>
        <div className="cursor-pointer flex relative">
          <BsBag className="text-2xl text-white" />
          <div className="bg-red-500 absolute -right-2 -top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            0
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
