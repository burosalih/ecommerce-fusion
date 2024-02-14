import React, { useContext , useState } from "react";

import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./ItemInCart";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext); //context za otvaranje zatvaranje sidebara
  const { cart, clearCart, itemAmount, total } = useContext(CartContext); //contexti za manipulaciju korpe
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handleOrderClick = () => {
    setShowCheckoutForm(true);
  };

  const handleSubmitOrder = async () => {
    // Gather order data
    const orderData = {
      fullName,
      phoneNumber,
      address,
      items: cart, // Assuming cart contains item details
      totalPrice: total // Assuming total contains the total price
    };
    try {
      // Send order data to backend
      const response = await fetch("https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/narudzbe/0/narudzbe.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
      });
  
      if (response.ok) {
        // Order successfully submitted, perform any necessary actions (clear cart, display confirmation message, etc.)
        clearCart();
        // Display confirmation message to the user
        alert("Order placed successfully!");
      } else {
        // Handle error response from server
        console.error("Failed to submit order:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };


  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } " w-[300px] bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
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
      <div className="flex flex-col gap-y-3  mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold">
            <span className="mr-2">Ukupno:</span>KM {" "}
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white hover:bg-red-600 duration-300 w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <button onClick={handleOrderClick} className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium hover:bg-black duration-500">
          Naruči
        </button>
        {/* Render the CheckoutForm component conditionally based on showCheckoutForm state */}
        {showCheckoutForm && (
          <CheckoutForm
            fullName={fullName}
            phoneNumber={phoneNumber}
            address={address}
            onFullNameChange={handleFullNameChange}
            onPhoneNumberChange={handlePhoneNumberChange}
            onAddressChange={handleAddressChange}
            onSubmit={handleSubmitOrder}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
