import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ProductProvider from "./context/ProductContext";
import SidebarProvider from "./context/SidebarContext";
import CartProvider from "./context/CartContext";
import OrdersProvider from "./context/OrdersContext";
import InformationMessageProvider from "./context/InformationMessageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <InformationMessageProvider>
    <OrdersProvider>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </OrdersProvider>
  </InformationMessageProvider>
  
);
