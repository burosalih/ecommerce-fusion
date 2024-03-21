import React, { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // state za korpu
  const [cart, setCart] = useState([]);
  // state za kolicinu artikla
  const [itemAmount, setItemAmount] = useState(0);
  // state za izracunat ukupnu cijenu
  const [total, setTotal] = useState(0);

  //ovdje racunam ukupnu cijenu
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.cijena * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // brojac za kolicinu 
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // dodavanje artikla u korpu
  const addToCart = (product, id) => {
   
    
    const newItem = { ...product, amount: 1 };
    
    // ovdje provjerim jel ima vec artikal u korpi i dole u ifu dodam samo +1 ako ga nadje
    const cartItem = cart.find((item) => {
      
      return item._id === product._id;
    });
    
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item._id === product._id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // izbacivanje iz korpe
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item._id !== id;
    });
    setCart(newCart);
  };

  // ciscenje korpe skrozno
  const clearCart = () => {
    setCart([]);
  };

  // povecavanje kolicine artikla
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item._id === id);
    addToCart(cartItem, id);
  };

  // smanjivanje kolicine artikla
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item._id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item._id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
