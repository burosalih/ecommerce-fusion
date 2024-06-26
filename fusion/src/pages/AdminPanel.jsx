import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { OrdersContext } from "../context/OrdersContext";
import { InformationMessageContext } from "../context/InformationMessageContext";
import { AiOutlineMenu } from "react-icons/ai";
import EditProductForm from "../components/EditProductForm";
import EditMessageForm from "../components/EditMessageForm";
import AddArticleForm from "../components/AddArticleForm";
import EditArticleForm from "../components/EditArticleForm";

function AdminPanel() {
  const { message, setMessage } = useContext(InformationMessageContext);
  const { orders, setOrders } = useContext(OrdersContext);
  const { products, setProducts } = useContext(ProductContext);
  const [activeView, setActiveView] = useState("products");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAddProductFormOpen, setIsAddProductFormOpen] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedMessage, setEditedMessage] = useState({
    tekst: "",
    prikazi: false,
  });
  const [isAddArticleFormOpen, setIsAddArticleFormOpen] = useState(false);
  const [editArticle, setEditArticle] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [blogArticles, setBlogArticles] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog.json"
        );

        if (!response.ok) {
          throw new Error("Neuspelo dohvatanje blogova");
        }

        const data = await response.json();

        // Filtrirajte objekte koji nisu null
        const filteredData = Object.values(data).filter(
          (blog) => blog !== null
        );

        setBlogArticles(filteredData);
      } catch (error) {
        console.error("Greška prilikom dohvatanja blogova", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleAddArticle = () => {
    setIsAddArticleFormOpen(true);
  };

  const handleCloseAddArticleForm = () => {
    setIsAddArticleFormOpen(false);
  };

  const handleAddArticleFormSubmit = async (article) => {
    const response = await fetch(
      "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog.json"
    );
    const data = await response.json();
    let maxKey = 0;
    for (const key in data) {
      const currentKey = parseInt(key);
      if (currentKey > maxKey) {
        maxKey = currentKey;
      }
    }
    const newKey = maxKey + 1;
    article.id = newKey;
    const articleObject = {
      [newKey]: {
        ...article,
      },
    };

    const postResponse = await fetch(
      "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog.json",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleObject),
      }
    );

    if (!postResponse.ok) {
      throw new Error("HTTP error! Status: " + postResponse.status);
    }
    setBlogArticles([...blogArticles, article]);
    setIsAddArticleFormOpen(false);
  };

  const handleEditArticle = (article) => {
    setEditArticle(article);
  };

  const handleSaveEditedArticle = async (editedArticle) => {
    console.log("OVO JE PRAVA FUCKIJA");
    console.log(editedArticle);
    try {
      // Dohvati sve proizvode
      const response = await fetch(
        "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog.json"
      );
      const data = await response.json();

      console.log(data);

      const blogIdToUpdate = Object.keys(data).find(
        (blogId) => data[blogId].id === editedArticle.id
      );

      if (!blogIdToUpdate) {
        throw new Error("Proizvod koji želite ažurirati nije pronađen");
      }

      // Napravi PUT zahtjev samo za pronađeni proizvod
      const updateResponse = await fetch(
        `https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog/${blogIdToUpdate}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedArticle),
        }
      );

      if (!updateResponse.ok) {
        throw new Error("Neuspješan zahtjev za ažuriranje proizvoda");
      }

      fetchBlogs();
      setEditArticle(null);
      console.log("Proizvod uspješno ažuriran");
    } catch (error) {
      console.error("Greška prilikom ažuriranja proizvoda:", error);
    }
  };

  const handleDeleteArticle = async (articleId) => {
    try {
      const url = `https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog/${articleId}.json`;

      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Neuspješan zahtjev za brisanje bloga");
      }

      fetchBlogs();
      console.log("Blog je uspešno obrisana.");
    } catch (error) {
      console.error("Greška prilikom brisanja bloga:", error);
    }
  };

  const handleEditClick = (mess) => {
    setEditMode(true);
    setEditedMessage(mess);
  };

  const handleSaveEditMessage = async (mess) => {
    // Ovdje implementirajte logiku za čuvanje uređene poruke

    try {
      // Dohvati sve poruke
      const response = await fetch(
        "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/poruka/0/poruka.json"
      );
      const data = await response.json();

      // Napravi PUT zahtjev samo za pronađeni proizvod
      const updateResponse = await fetch(
        `https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/poruka/0/poruka/0.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mess),
        }
      );

      if (!updateResponse.ok) {
        throw new Error("Neuspješan zahtjev za ažuriranje poruke");
      }

      setEditMode(false);
      fetchInformationMessage(); // Zatvori formu za uređivanje
      console.log("Poruka uspješno ažuriran");
    } catch (error) {
      console.error("Greška prilikom ažuriranja proizvoda:", error);
    }
  };

  const [editProduct, setEditProduct] = useState({
    _id: "",
    naziv: "",
    cijena: "",
    opis: "",
    slika: "",
  });

  const [newProduct, setNewProduct] = useState({
    _id: "",
    naziv: "",
    cijena: "",
    opis: "",
    slika: "",
  });

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleAddProduct = () => {
    //razradit logiku za dodavanje artikla u bazu
    setIsAddProductFormOpen(true);
  };

  const handleEditProduct = (productId) => {
    setEditProductId(productId);
    // Pronađite proizvod koji se uređuje na osnovu productId i postavite ga u stanje za uređivanje
    const productToEdit = products.find((product) => product._id === productId);
    if (productToEdit) {
      setEditProduct(productToEdit);
    }
  };

  const handleEditFormSubmit = async (editedProduct) => {
    try {
      // Dohvati sve proizvode
      console.log(editedProduct);
      const response = await fetch(
        "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/proizvodi.json"
      );
      const data = await response.json();
      console.log(data);

      // Pronađi proizvod koji želite ažurirati
      const productIdToUpdate = Object.keys(data).find(
        (productId) => data[productId] && data[productId]._id === editedProduct._id
      );

      if (!productIdToUpdate) {
        throw new Error("Proizvod koji želite ažurirati nije pronađen");
      }

      // Napravi PUT zahtjev samo za pronađeni proizvod
      const updateResponse = await fetch(
        `https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/proizvodi/${productIdToUpdate}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedProduct),
        }
      );

      if (!updateResponse.ok) {
        throw new Error("Neuspješan zahtjev za ažuriranje proizvoda");
      }

      fetchProducts(); // Ponovo dohvati proizvode nakon ažuriranja
      setEditProductId(null); // Zatvori formu za uređivanje
      console.log("Proizvod uspješno ažuriran");
    } catch (error) {
      console.error("Greška prilikom ažuriranja proizvoda:", error);
    }
  };

  const handleAddProductFormSubmit = async () => {
    setIsAddProductFormOpen(false);

    try {
      // Dohvati sve proizvode iz baze podataka
      const response = await fetch(
        "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/proizvodi.json"
      );
      const data = await response.json();

      // Pronađi maksimalni ključ
      let maxKey = 0;
      for (const key in data) {
        const currentKey = parseInt(key);
        if (currentKey > maxKey) {
          maxKey = currentKey;
        }
      }

      // Inkrementiraj maksimalni ključ za novi proizvod
      const newKey = maxKey + 1;
      newProduct._id = newKey;

      // Dodaj novi proizvod sa inkrementiranim ključem u bazu podataka
      const responseAdd = await fetch(
        `https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/proizvodi/${newKey}.json`,
        {
          method: "PUT", // Koristi PUT metodu za ažuriranje
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      if (!responseAdd.ok) {
        throw new Error("Neuspješan zahtjev za dodavanje proizvoda");
      }
      fetchProducts();
    } catch (error) {
      console.error("Greška prilikom dodavanja proizvoda:", error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      const url = `https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/narudzbe/0/narudzbe/${orderId}.json`;

      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Neuspješan zahtjev za brisanje narudzbe");
      }

      fetchOrders();
      console.log("Narudzba je uspešno obrisana.");
    } catch (error) {
      console.error("Greška prilikom brisanja narudzbe:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const url = `https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/proizvodi/${productId}.json`;

      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Neuspješan zahtjev za brisanje proizvoda");
      }

      fetchProducts();
      console.log("Proizvod je uspešno obrisan.");
    } catch (error) {
      console.error("Greška prilikom brisanja proizvoda:", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/proizvodi.json"
      );
      const data = await response.json();

      // Filtrirajte objekte koji nisu null
      const filteredData = Object.values(data).filter(
        (product) => product !== null
      );

      setProducts(filteredData);
    } catch (error) {
      console.error("Greška prilikom dohvatanja proizvoda:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog.json"
      );
      const data = await response.json();

      // Filtrirajte objekte koji nisu null
      const filteredData = Object.values(data).filter((blog) => blog !== null);

      setBlogArticles(filteredData);
    } catch (error) {
      console.error("Greška prilikom dohvatanja proizvoda:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/narudzbe/0/narudzbe.json"
      );
      const data = await response.json();

      // Filtrirajte objekte koji nisu null
      const filteredData = Object.values(data).filter(
        (orders) => orders !== null
      );

      setOrders(filteredData);
    } catch (error) {
      console.error("Greška prilikom dohvatanja narudzbi:", error);
    }
  };

  const fetchInformationMessage = async () => {
    try {
      const response = await fetch(
        "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/poruka/0/poruka.json"
      );
      const data = await response.json();

      // Filtrirajte objekte koji nisu null
      const filteredData = Object.values(data).filter((mess) => mess !== null);

      setMessage(filteredData);
    } catch (error) {
      console.error("Greška prilikom dohvatanja poruka:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchProducts();
    fetchInformationMessage();
  }, []);

  return (
    <div className="flex h-screen">
      <div
        className={
          isSidebarOpen
            ? "w-42 md:w-72 bg-gradient-to-b from-primary to-emerald-700 text-white"
            : "hidden"
        }
      >
        <div className="p-3"></div>
        <ul className="pt-0 mb-10">
          <li
            className="px-4 py-2 hover:bg-emerald-500 cursor-pointer text-2xl"
            onClick={() => handleViewChange("products")}
          >
            Artikli
          </li>
          <li
            className="px-4 py-2 hover:bg-emerald-500 cursor-pointer text-2xl"
            onClick={() => handleViewChange("orders")}
          >
            Narudžbe
          </li>
          <li
            className="px-4 py-2 hover:bg-emerald-500 cursor-pointer text-2xl"
            onClick={() => handleViewChange("message")}
          >
            Informativna Poruka
          </li>
          <li
            className="px-4 py-2 hover:bg-emerald-500 cursor-pointer text-2xl"
            onClick={() => handleViewChange("blog")}
          >
            Blog
          </li>
        </ul>
        <Link
          to="/login"
          className="px-4 py-2 cursor-pointer hover:bg-red-500 block"
        >
          Log Out
        </Link>
      </div>
      <button
        onClick={toggleSidebar}
        className="bg-gradient-to-b from-primary to-emerald-700 text-white font-bold py-4 px-4 flex items-start"
      >
        <AiOutlineMenu />
      </button>
      <div className="flex-grow bg-gray-200 overflow-auto">
        <div className="p-4 mt-10">
          {activeView === "products" && (
            <>
              <h1 className="text-3xl font-bold mb-4">Artikli</h1>
              <button
                onClick={handleAddProduct}
                className="bg-primary hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded mb-4"
                style={{ marginRight: isSidebarOpen ? "60px" : "0" }} // Adjust the marginRight dynamically
              >
                Dodaj Artikal
              </button>
              {}
              {isAddProductFormOpen && (
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Naziv"
                    value={newProduct.naziv}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, naziv: e.target.value })
                    }
                    className="border border-gray-400 px-2 py-1 mr-2 mb-2 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Cijena"
                    value={newProduct.cijena}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, cijena: e.target.value })
                    }
                    className="border border-gray-400 px-2 py-1 mr-2 mb-2 rounded-lg"
                  />
                  <textarea
                    type="text"
                    placeholder="Opis"
                    value={newProduct.opis}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        opis: e.target.value,
                      })
                    }
                    className="border border-gray-400 px-2 py-1 mr-2 rounded-lg w-full h-[300px] mb-4 resize-none"
                  />
                   <input
                    type="text"
                    placeholder="Slika"
                    value={newProduct.slika}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, slika: e.target.value })
                    }
                    className="border border-gray-400 px-2 py-1 mr-2 mb-2 rounded-lg"
                  />
                
                  <button
                    onClick={handleAddProductFormSubmit}
                    className="bg-primary hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Dodaj
                  </button>
                </div>
              )}
              <ul>
                {products.map((product) => (
                  <li
                    key={product._id}
                    className="flex items-center justify-between border-b border-gray-300 py-2"
                  >
                    <div className="flex items-center">
                      <img src={product.slika} className="w-10 h-10" />
                      <div className="ml-2">
                        <div>{product.naziv}</div>
                        <div>Cijena: {product.cijena}</div>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleEditProduct(product._id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 mr-2 my-3 rounded-md"
                      >
                        Uredi
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product._id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                      >
                        Obriši
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              {editProductId && (
                <EditProductForm
                  product={editProduct}
                  onSave={handleEditFormSubmit}
                  onClose={() => setEditProductId(null)}
                />
              )}
            </>
          )}
          {activeView === "orders" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">Narudžbe</h1>
              <ul className="overflow-auto">
                {orders.map((order) =>
                  order && order._id ? (
                    <li
                      key={order._id}
                      className="border border-gray-300 rounded-xl px-4 py-2 mb-4 bg-white"
                    >
                      <div>ID Narudžbe : {order._id}</div>
                      <div>Ime : {order.ime}</div>
                      <div>Broj telefona : {order.brojTel}</div>
                      <div>Grad : {order.grad}</div>
                      <div>Poštanski broj : {order.postanskiBroj}</div>
                      <div>Adresa : {order.adresa}</div>
                      <div>Ukupna cijena: {order.cijena} KM</div>
                      <div>Proizvodi:</div>
                      <ul>
                        {order.proizvodi.map((item, index) => (
                          <li key={index}>
                            Naziv: {item.naziv}, Količina: {item.kolicina}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-2 px-2 rounded-md"
                      >
                        Obriši narudžbu
                      </button>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}
          {activeView === "message" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">Poruka</h1>
              <ul className="overflow-auto">
                {message.map((mess) => (
                  <li className="border border-gray-300 rounded-xl px-4 py-2 mb-4 bg-white">
                    <div>Tekst poruke : {mess.tekst}</div>
                    <div>Prikazi poruku: {mess.prikazi ? "DA" : "NE"}</div>
                    <button
                      onClick={() => handleEditClick(mess)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    >
                      Uredi
                    </button>
                  </li>
                ))}
              </ul>
              {editMode && (
                <EditMessageForm
                  message={message[0]}
                  onSave={handleSaveEditMessage}
                  onClose={() => setEditMode(false)}
                />
              )}
            </div>
          )}
          {activeView === "blog" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">Blog</h1>
              <button
                onClick={handleAddArticle}
                className="bg-primary hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded mb-4"
              >
                Dodaj Artikal
              </button>
              {isAddArticleFormOpen && (
                <AddArticleForm
                  onAdd={handleAddArticleFormSubmit}
                  onClose={handleCloseAddArticleForm}
                />
              )}
              <ul className="overflow-auto">
                {blogArticles.map((article) => (
                  <li
                    key={article.id}
                    className="border border-gray-300 rounded-xl px-4 py-2 mb-4 bg-white"
                  >
                    <div className="flex items-center mb-2">
                      <img
                        src={require(`../blog/${article.slika}.jpg`)}
                        alt="Article Image"
                        className="w-20 h-auto mr-4"
                      />
                      <div>
                        <div>Naslov: {article.naslov}</div>
                        <div>Opis: {article.opis}</div>
                        <div>Slika: {article.slika}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleEditArticle(article)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 mr-2 my-3 rounded-md"
                    >
                      Uredi
                    </button>
                    <button
                      onClick={() => handleDeleteArticle(article.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mr-2 my-3 rounded-md"
                    >
                      Obriši
                    </button>
                  </li>
                ))}
              </ul>
              {editArticle && (
                <EditArticleForm
                  article={editArticle}
                  onSave={handleSaveEditedArticle}
                  onClose={() => setEditArticle(null)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
