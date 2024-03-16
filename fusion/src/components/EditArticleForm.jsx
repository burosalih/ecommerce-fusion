import React, { useState } from 'react';

function EditArticleForm({ article, onSave, onClose }) {
  const [editedArticle, setEditedArticle] = useState(article);
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedArticle({
      ...editedArticle,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedArticle = { ...editedArticle };
    if (imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', 'your_upload_preset');
      formData.append('folder', 'articles');
      fetch('endpoint', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          updatedArticle.imageUrl = data.secure_url;
          onSave(updatedArticle);
        })
        .catch(error => console.error('Error uploading image:', error));
    } else {
      onSave(updatedArticle);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Uredi artikal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="naslov" className="block font-medium mb-1">Naslov</label>
            <input
              type="text"
              id="naslov"
              name="naslov"
              value={editedArticle.naslov}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="opis" className="block font-medium mb-1">Opis</label>
            <textarea
              id="opis"
              name="opis"
              value={editedArticle.opis}
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
              onChange={handleImageChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 border border-gray-300 rounded-md">Odustani</button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">Spremi</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditArticleForm;
