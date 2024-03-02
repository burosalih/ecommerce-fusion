import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsBag, BsList } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { SidebarContext } from "../context/SidebarContext";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProizvodiOpen, setIsProizvodiOpen] = useState(false);
  const { itemAmount } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsProizvodiOpen(false);
  };

  const toggleProizvodi = () => {
    setIsProizvodiOpen(!isProizvodiOpen);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const subitemClick = () => {
    setIsProizvodiOpen(false);
    setIsDropdownOpen(false);
    scrollToTop();
  };

  const menuItems = [
    {
      label: "Home",
      to: "/",
      onClick: () => {
        setIsDropdownOpen(false);
        scrollToTop();
      },
    },

    {
      label: "Kontakt",
      to: "#",
      onClick: () => {
        setIsDropdownOpen(false);
        scrollToFooter();
      },
    },
    {
      label: "Savjeti i informacije",
      to: "/savjeti",
      onClick: () => {
        setIsDropdownOpen(false);
        scrollToTop();
      },
    },
    {
      label: "Recenzije",
      to: "/",
      onClick: () => {
        setIsDropdownOpen(false);
        scrollToFooter();
      },
    },
    {
      label: "Proizvodi",
      onClick: toggleProizvodi,
      submenu: [
        { label: "Muškarci", to: "/muskarci", onClick: subitemClick },
        { label: "Žene", to: "/zene", onClick: subitemClick },
      ],
    },
  ];

  return (
    <header className="bg-primary py-5 shadow-xl fixed w-full z-10 lg:px-8 transition-all">
      <div className="container mx-auto flex justify-between h-full items-center">
        <div className="hidden lg:flex space-x-16">
          <div>
            <img src="./Potencija.png" alt="Logo" className="h-8" />
          </div>
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                to={item.to}
                onClick={item.onClick}
                className="font-primary text-white"
              >
                {item.label}
              </Link>
              {item.submenu && isProizvodiOpen && (
                <div className="absolute bg-white py-2 rounded-lg shadow-lg left-0">
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      to={subitem.to}
                      className="block pl-4 pr-8 py-2 text-gray-800 hover:bg-primary hover:text-white"
                      onClick={subitem.onClick}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div onClick={toggleDropdown} className="cursor-pointer lg:hidden">
          <BsList className="text-2xl text-white" />
        </div>
        {isDropdownOpen && (
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
                {item.submenu && isProizvodiOpen && (
                  <div className="absolute bg-gray-100 shadow-lg rounded-br-2xl">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.to}
                        className="block pl-4 pr-8 py-2 text-gray-800 hover:bg-primary hover:text-white duration-300"
                        onClick={subitem.onClick}
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
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
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
