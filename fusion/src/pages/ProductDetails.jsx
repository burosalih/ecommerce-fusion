import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import parse from "html-react-parser"; 

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  const product = products[id - 1];

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { naziv, cijena, opis, slika } = product;

  const handleAddToCart = () => {
    addToCart(product, product._id);
  };

  return (
    <section className="pt-[150px] md:pt-32 pb-[100px] md:pb-32 lg:py-32 h-full flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-full" src={slika} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {naziv}
            </h1>
            <div className="text-2xl text-red-500 font-medium mb-6">
              {cijena} KM
            </div>
            {parse(opis)}
            <Link to="/" onClick={handleAddToCart}>
              <button className="bg-primary py-4 mt-4 px-8 text-white">
                Dodaj u korpu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
