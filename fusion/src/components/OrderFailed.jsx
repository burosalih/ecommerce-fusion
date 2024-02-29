import React, { useEffect, useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";


const OrderFailed = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg flex items-center justify-center">
            <FaCircleXmark className="text-red-500 text-2xl" />
            <p className="text-lg text-black font-semibold ml-2">Narudžba neuspješna !</p>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderFailed;
