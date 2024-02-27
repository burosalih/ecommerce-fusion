import React, { useContext, useEffect, useState, useRef } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { BsBag, BsList } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false); // Header stateovi ovaj je samo za estetiku
  const [dropdownOpen, setDropdownOpen] = useState(false); // State za dropdown
  const [proizvodiOpen, setProizvodiOpen] = useState(false); // State za Proizvodi submenu dropdown
  const { isOpen, setIsOpen } = useContext(SidebarContext); // State za otvorit korpu
  const { itemAmount } = useContext(CartContext); // Za broj artikala u korpi
  const dropdownRef = useRef(null);
  const proizvodiRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      proizvodiRef.current &&
      !proizvodiRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
      setProizvodiOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setProizvodiOpen(false);
  };

  const toggleProizvodiDropdown = () => {
    setProizvodiOpen(!proizvodiOpen);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { label: "Home", to: "/", onClick: scrollToTop },
    { label: "Kontakt", to: "#", onClick: scrollToFooter },
    { label: "Recenzije", to: "#", onClick: scrollToFooter },
    {
      label: "Proizvodi",
      onClick: toggleProizvodiDropdown,
      submenu: [
        { label: "Muškarci", to: "/muskarci" },
        { label: "Žene", to: "/zene" },
      ],
    },
  ];

  return (
    <header
      className={`${
        isActive ? "bg-primary py-4 shadow-xl" : "bg-primary py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex justify-between h-full items-center">
        <div className="hidden lg:flex space-x-16">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                to={item.to}
                onClick={item.onClick}
                className="font-primary text-white"
              >
                {item.label}
              </Link>
              {item.submenu && proizvodiOpen && (
                <div className="absolute bg-white py-2 rounded-lg shadow-lg left-0">
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      to={subitem.to}
                      className="block pl-4 pr-8 py-2 text-gray-800 hover:bg-primary hover:text-white"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          ref={dropdownRef}
          onClick={toggleDropdown}
          className="cursor-pointer lg:hidden"
        >
          <BsList className="text-2xl text-white" />
        </div>
        {dropdownOpen && (
          <div className="absolute top-full bg-white left-0 w-full shadow-lg rounded-br-2xl">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <Link
                  to={item.to}
                  onClick={item.onClick}
                  className="block pl-4 pr-8 py-2 text-gray-800 hover:bg-primary hover:text-white duration-300"
                >
                  {item.label}
                </Link>
                {item.submenu && proizvodiOpen && (
                  <div className="absolute bg-gray-100 shadow-lg rounded-br-2xl">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.to}
                        className="block pl-4 pr-8 py-2 text-gray-800 hover:bg-primary hover:text-white duration-300"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
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