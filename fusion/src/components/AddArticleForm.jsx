import React, { useState } from 'react';

function AddArticleForm({ onAdd, onClose }) {
  const [newArticle, setNewArticle] = useState({
    naslov: '',
    opis: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({
      ...newArticle,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewArticle({
        ...newArticle,
        imageUrl: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newArticle);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Dodaj artikal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="naslov" className="block font-medium mb-1">Naslov</label>
            <input
              type="text"
              id="naslov"
              name="naslov"
              value={newArticle.naslov}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="opis" className="block font-medium mb-1">Opis</label>
            <textarea
              id="opis"
              name="opis"
              value={newArticle.opis}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full h-32 resize-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block font-medium mb-1">Slika</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          {newArticle.imageUrl && (
            <div className="mb-4">
              <img src={newArticle.imageUrl} alt="Article Preview" className="w-full h-auto" />
            </div>
          )}
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 border border-gray-300 rounded-md">Odustani</button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">Dodaj</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddArticleForm;
