import React, { useState } from "react";

const CheckoutForm = ({
  ime,
  brojTel,
  adresa,
  onimeChange,
  onbrojTelChange,
  onadresaChange,
  onSubmit,
}) => {
  const [imeError, setImeError] = useState(false);
  const [brojTelError, setBrojTelError] = useState(false);
  const [adresaError, setAdresaError] = useState(false);

  const handleOrderClick = () => {
    let hasError = false;

    if (!ime.trim()) {
      setImeError(true);
      hasError = true;
    } else {
      setImeError(false);
    }
    
    if (!brojTel.trim()) {
      setBrojTelError(true);
      hasError = true;
    } else {
      setBrojTelError(false);
    }
    
    if (!adresa.trim()) {
      setAdresaError(true);
      hasError = true;
    } else {
      setAdresaError(false);
    }

    if (!hasError) {
      onSubmit();
    }
  };

  return (
    <div className="mt-4 mb-8">
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
          className={`mt-1 p-2 border ${imeError ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
        />
        {imeError && <p className="text-red-500 text-sm mt-1">Molimo unesite ime i prezime.</p>}
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
          className={`mt-1 p-2 border ${brojTelError ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
        />
        {brojTelError && <p className="text-red-500 text-sm mt-1">Molimo unesite broj telefona.</p>}
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
          className={`mt-1 p-2 border ${adresaError ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
        />
        {adresaError && <p className="text-red-500 text-sm mt-1">Molimo unesite adresu.</p>}
      </div>
      <button
        onClick={handleOrderClick}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-black transition duration-300 overflow-y-auto"
      >
        Potvrdi narudžbu
      </button>
    </div>
  );
};

export default CheckoutForm;
