import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/HeroSection";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <Hero />
      <section className="py-0">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Naši proizvodi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mb-12">
            {products.map((product) => {
              return <Product product={product} key={product._id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;