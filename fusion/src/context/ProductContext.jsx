import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/proizvodi.json"
        );
        const data = await response.json();

        // Filtrirajte objekte koji nisu null
        const filteredData = Object.values(data).filter(
          (product) => product !== null
        );

        setProducts(filteredData);
      } catch (error) {
        console.error("Greška prilikom dohvatanja proizvoda:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
