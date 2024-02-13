import React, { createContext, useState, useEffect } from "react";

export const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/narudzbe.json"); //treba dodat poziv za narudzbe iz nase baze
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <OrdersContext.Provider value={{ orders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
