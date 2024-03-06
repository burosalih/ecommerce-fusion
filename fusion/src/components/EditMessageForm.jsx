import React, { useState, useEffect } from "react";

function EditMessageForm({ message, onSave, onClose }) {
  const [editedMessage, setEditedMessage] = useState({
    tekst: message.tekst,
    prikazi: message.prikazi,
    id: message._id,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setEditedMessage({
      ...editedMessage,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedMessage);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 w-[400px] rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Uredi Poruku</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tekst poruke
            </label>
            <textarea
              name="tekst"
              value={editedMessage.tekst}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32" // Promijenite visinu (npr. h-32)
            />
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              name="prikazi"
              checked={editedMessage.prikazi}
              onChange={handleInputChange}
              className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label
              htmlFor="prikazi"
              className="text-sm font-medium text-gray-700"
            >
              Prikazi poruku
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary hover:bg-emerald-700 text-white px-4 py-2 rounded-md mr-2"
            >
              Sačuvaj
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
            >
              Odustani
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditMessageForm;
