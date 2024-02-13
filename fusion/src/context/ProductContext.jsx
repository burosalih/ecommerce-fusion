import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // state za artikle
  const [products, setProducts] = useState([]);
  // ovdje vi morate svoj api povezat, ja sam stavio samo fetch s nekog fake storea da vidim jel radi sve kako treba
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/0/proizvodi.json");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
