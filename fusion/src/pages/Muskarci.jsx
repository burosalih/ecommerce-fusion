import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";

const Muskarci = () => {

  const { products } = useContext(ProductContext);

  return (
    <div>
      <section id="productsSection" className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 mt-10 text-center">Muški proizvodi</h1>
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

export default Muskarci;
