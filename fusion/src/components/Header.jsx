import React, { useContext, useEffect, useState, useRef } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false); // Header stateovi ovaj je samo za estetiku
  const [dropdownOpen, setDropdownOpen] = useState(false); // State za otvorit korpu
  const { isOpen, setIsOpen } = useContext(SidebarContext); // State za otvorit korpu
  const { itemAmount } = useContext(CartContext); // Za broj artikala u korpi
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });

    // Close dropdown when clicking outside of it
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <div ref={dropdownRef} className="relative" onBlur={() => setDropdownOpen(false)}>
          <span
            onClick={toggleDropdown}
            className="font-primary text-white cursor-pointer"
          >
            Proizvodi
          </span>
          {dropdownOpen && (
            <div className="absolute bg-white mt-2 py-2 rounded-lg shadow-lg">
              <Link
                to={"/muskarci"}
                className="block pl-4 pr-8 py-2 text-gray-800 hover:bg-primary hover:text-white"
              >
                Muškarci
              </Link>
              <Link
                to={"/zene"}
                className="block pl-4 pr-8 py-2 text-gray-800 hover:bg-primary hover:text-white"
              >
                Žene
              </Link>
            </div>
          )}
        </div>
        <Link to={"/savjeti"} className="font-primary text-white">
          Savjeti i informacije
        </Link>
        <Link to={"#"} onClick={scrollToFooter} className="font-primary text-white">
          Kontakt
        </Link>
        <Link to={"#"} onClick={scrollToFooter} className="font-primary text-white">
          Recenzije
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl text-white" />
          <div className="bg-red-500 absolute -right-2 -top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
