import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { _id, slika, naziv, cijena } = product;

  return (
    <div>
      <div className="border border-gray-300 rounded-3xl h-[300px] mb-4 relative overflow-hidden group transition hover:border-gray-600">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={slika}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-primary hover:bg-emerald-700 duration-300">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${_id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl hover:bg-gray-600 hover:text-white duration-300"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <Link to={`/product/${_id}`}>
          <h2 className="font-bold mb-1">{naziv}</h2>
        </Link>
        <div className="justify-start flex gap-4 items-center">
        <h2 className="text-gray-400 line-through">100 KM</h2>
        <h2 className="">{cijena} KM</h2>
        <h2 className="bg-red-500 rounded-lg p-1 text-white font-bold">AKCIJA !</h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
