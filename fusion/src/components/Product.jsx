import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // rastavljanje artikla
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-gray-300 rounded-3xl h-[300px] mb-4 relative overflow-hidden group transition hover:border-gray-600">
        <div className="w-full h-full flex justify-center items-center">
          {/* slika artikla */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttoni za dodat i pogledat artikal */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-primary hover:bg-blue-600 duration-300">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl hover:bg-gray-600 hover:text-white duration-300"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* kategorija, ime i cijena, ne znam hocel trebat kategorija al eto ima moze se i izbacit */}
      <div>
        <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <h2 className="font-semibbold">{price} KM</h2>
      </div>
    </div>
  );
};

export default Product;
