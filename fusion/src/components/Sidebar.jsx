import React, { useContext, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./ItemInCart";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const [ime, setIme] = useState("");
  const [brojTel, setBrojTel] = useState("");
  const [adresa, setAdresa] = useState("");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleImeChange = (event) => setIme(event.target.value);
  const handleBrojTelChange = (event) => setBrojTel(event.target.value);
  const handleAdresaChange = (event) => setAdresa(event.target.value);
  const handleOrderClick = () => {
    setShowCheckoutForm(true);
  };

  const handleSubmitOrder = async () => {
    const orderData = {
      _id: '',
      ime,
      brojTel,
      adresa,
      proizvodi: cart.map(item => ({ 
        naziv: item.naziv, 
        kolicina: item.amount 
      })),
      cijena: total,
    };
    
    console.log("Nova narudžba:", orderData);

  
    try {
      // Dohvati sve narudžbe iz baze podataka
      const response = await fetch("https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/narudzbe/0/narudzbe.json");
      const data = await response.json();
  
      // Pronađi maksimalni ključ
      let maxKey = 0;
      for (const key in data) {
        const currentKey = parseInt(key);
        if (currentKey > maxKey) {
          maxKey = currentKey;
        }
      }
  
      // Inkrementiraj maksimalni ključ za novu narudžbu
      const newKey = maxKey + 1;
      orderData._id = newKey;
  
      // Dodaj novu narudžbu sa inkrementiranim ključem u bazu podataka
      const responseAdd = await fetch(`https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/narudzbe/0/narudzbe/${newKey}.json`, {
        method: "PUT", // Koristi PUT metodu za ažuriranje
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
      });
  
      if (!responseAdd.ok) {
        throw new Error('Neuspješan zahtjev za kreiranje narudžbe');
      }
  
      console.log("Uspješno kreirana narudžba sa ključem:", newKey);
  
    } catch (error) {
      console.error('Greška prilikom kreiranja narudžbe:', error);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-[300px] bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Korpa ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-poniter w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl hover:text-primary hover:scale-105 duration-300" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 mt-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 500px)" }}>
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold">
            <span className="mr-2">Ukupno:</span>KM{" "}
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white hover:bg-red-600 duration-300 w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <button
          onClick={handleOrderClick}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium hover:bg-black duration-500"
        >
          Naruči
        </button>
        {showCheckoutForm && (
          <CheckoutForm
            ime={ime}
            brojTel={brojTel}
            adresa={adresa}
            onimeChange={handleImeChange}
            onbrojTelChange={handleBrojTelChange}
            onadresaChange={handleAdresaChange}
            onSubmit={handleSubmitOrder}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
