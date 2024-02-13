import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Header = () => { 
  const [isActive, setIsActive] = useState(false); //header stateovi ovaj je samo za estetiku
  const { isOpen, setIsOpen } = useContext(SidebarContext); //state za otvorit korpu
  const { itemAmount } = useContext(CartContext); //za broj artikala u korpi

  // event listener samo za estetiku da se ljepse pojavi header
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-primary py-4 shadow-xl" : "bg-primary py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px]">
            <img src={"https://fakeimg.pl/600x400"} alt="" /> {/* stavio placeholder za logo ne znam jel ima logo il cemo brisat ovo */}
          </div>
        </Link>
        <Link to={"/"} className="font-primary text-white">
          Home
        </Link>
        <Link to={"/"} className="font-primary text-white">
          Kontakt
        </Link>
        <Link to={"/"} className="font-primary text-white">
          Recenzije
        </Link>
        {/* korpa */}
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
