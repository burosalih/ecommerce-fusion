import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa"

const OrderSuccess = ({ onClose }) => {
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
            <FaCheckCircle className="text-primary text-2xl" />
            <p className="text-lg text-black font-semibold ml-2">Narudžba uspješna !</p>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSuccess;
