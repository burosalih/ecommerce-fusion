import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProductAdded = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 1500);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <p className="text-lg text-black font-semibold ml-2">
              Dodali ste artikal u korpu !
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductAdded;
