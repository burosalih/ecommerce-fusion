import React, { useState, useEffect } from "react";

function EditProductForm({ product, onSave, onClose }) {
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    // Postavljamo editedProduct samo pri prvom renderovanju
    setEditedProduct(product);
  }, [product]); // Ovo će se pokrenuti svaki put kada se promeni product prop

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    const newValue = e.target.type === 'checkbox' ? checked : value;

    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: newValue,
    }));

    if (name === 'unisex' && checked) {
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        spol: 'MZ',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedProduct);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 w-[400px] rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Uredi proizvod</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="naziv" className="block text-sm font-semibold mb-1">
              Naziv:
            </label>
            <input
              type="text"
              id="naziv"
              name="naziv"
              value={editedProduct.naziv || ""}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cijena" className="block text-sm font-semibold mb-1">
              Cijena:
            </label>
            <input
              type="text"
              id="cijena"
              name="cijena"
              value={editedProduct.cijena || ""}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Spol:</label>
            <div>
              <label htmlFor="muski" className="mr-4">
                Muški
                <input
                  type="checkbox"
                  id="muski"
                  name="muski"
                  checked={editedProduct.spol === 'M'}
                  onChange={() => handleInputChange({ target: { name: 'spol', value: 'M' } })}
                  className="ml-2"
                />
              </label>
              <label htmlFor="zenski" className="mr-4">
                Ženski
                <input
                  type="checkbox"
                  id="zenski"
                  name="zenski"
                  checked={editedProduct.spol === 'Z'}
                  onChange={() => handleInputChange({ target: { name: 'spol', value: 'Z' } })}
                  className="ml-2"
                />
              </label>
              <label htmlFor="unisex" className="mr-4">
                Unisex
                <input
                  type="checkbox"
                  id="unisex"
                  name="unisex"
                  checked={editedProduct.spol === 'MZ'}
                  onChange={handleInputChange}
                  className="ml-2"
                />
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="opis" className="block text-sm font-semibold mb-1">
              Opis:
            </label>
            <textarea
              id="opis"
              name="opis"
              value={editedProduct.opis || ""}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-64 resize-none"
            />
            <label htmlFor="slika" className="block text-sm font-semibold mb-1">
              Slika:
            </label>
            <input type="file" accept="image/*" className="py-2" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-primary hover:bg-emerald-700 text-white px-4 py-2 rounded-md mr-2">
              Sačuvaj
            </button>
            <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md">
              Odustani
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductForm;
