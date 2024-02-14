import React from "react";

const CheckoutForm = ({
  ime,
  brojTel,
  adresa,
  onimeChange,
  onbrojTelChange,
  onadresaChange,
  onSubmit,
}) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-4">Unesite informacije za narudžbu</h2>
      <div className="mb-4">
        <label htmlFor="ime" className="block text-sm font-medium text-gray-700">
          Ime i prezime
        </label>
        <input
          type="text"
          id="ime"
          name="ime"
          value={ime}
          onChange={onimeChange}
          autoComplete="off"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="brojTel" className="block text-sm font-medium text-gray-700">
          Broj telefona
        </label>
        <input
          type="tel"
          id="brojTel"
          name="brojTel"
          value={brojTel}
          onChange={onbrojTelChange}
          autoComplete="off"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="adresa" className="block text-sm font-medium text-gray-700">
          Adresa
        </label>
        <input
          type="text"
          id="adresa"
          name="adresa"
          value={adresa}
          onChange={onadresaChange}
          autoComplete="off"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <button
        onClick={onSubmit}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-black transition duration-300 overflow-y-auto"
      >
        Potvrdi narudžbu
      </button>
    </div>
  );
};

export default CheckoutForm;
