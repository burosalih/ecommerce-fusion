import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  // rastavljanje artikla 
  const { _id, naziv, slika, cijena, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${_id}`}>
          <img className="max-w-[80px]" src={slika} alt="" /> {/* ovdje slika artikla */}
        </Link>
        <div className="w-full flex flex-col">
          {/* ime artikla i ikona za uklonit (u istom su redu) */}
          <div className="flex justify-between mb-2">
            {/* ime artikla poseban div */}
            <Link
              to={`/product/${_id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-black hover:underline"
            >
              {naziv}
            </Link>
            <div
              onClick={() => removeFromCart(_id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* kolicina artikla jednog */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
              <div
                onClick={() => decreaseAmount(_id)}
                className="h-full flex-1 flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(_id)}
                className="h-full flex flex-1 justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* cijena jednog artikla */}
            <div className="flex flex-1 justify-around items-center">
              KM {cijena}
            </div>
            {/* ukupna cijena */}
            <div className="flex flex-1 justify-end items-center text-black font-medium">{`KM ${parseFloat(
              cijena * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
