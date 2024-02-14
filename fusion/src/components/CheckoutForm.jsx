import React from "react";

const CheckoutForm = ({
  fullName,
  phoneNumber,
  address,
  onFullNameChange,
  onPhoneNumberChange,
  onAddressChange,
  onSubmit,
}) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-4">Unesite informacije za narudžbu</h2>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Ime i prezime
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={onFullNameChange}
          autoComplete="off"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Broj telefona
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onPhoneNumberChange}
          autoComplete="off"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Adresa
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={onAddressChange}
          autoComplete="off"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <button
        onClick={onSubmit}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300"
      >
        Potvrdi narudžbu
      </button>
    </div>
  );
};

export default CheckoutForm;
