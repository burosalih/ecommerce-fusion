import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { OrdersContext } from "../context/OrdersContext";
import { AiOutlineMenu } from "react-icons/ai";

function AdminPanel() {
  const { products } = useContext(ProductContext);
  const { orders } = useContext(OrdersContext);
  const [activeView, setActiveView] = useState("products");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAddProductFormOpen, setIsAddProductFormOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    ime: "",
    cijena: "",
    opis: ""
  });

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleAddProduct = () => {
    //razradit logiku za dodavanje artikla u bazu
    setIsAddProductFormOpen(true);
  };

  const handleAddProductFormSubmit = () => {
    console.log("Novi artikal:", newProduct);
    setIsAddProductFormOpen(false);
    setNewProduct({
      ime: "",
      cijena: "",
      opis: ""
    });
  };

  const handleDeleteProduct = (productId) => {
    //ovdje dodat logiku za brisanje
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={
          isSidebarOpen
            ? "w-42 md:w-72 bg-gradient-to-b from-primary to-emerald-700 text-white"
            : "hidden"
        }
      >
        <div className="p-3">
        </div>
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
              {/*eo dole u ovim inputima sam malo radio to dodavanje al moras ti prepravit */}
              {isAddProductFormOpen && (
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Naziv"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    className="border border-gray-400 px-2 py-1 mr-2 mb-2 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Cijena"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                    className="border border-gray-400 px-2 py-1 mr-2 mb-2 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Opis"
                    value={newProduct.description}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value
                      })
                    }
                    className="border border-gray-400 px-2 py-1 mr-2 rounded-lg"
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
                    key={product.id}
                    className="flex justify-between items-center border-b py-2"
                  >
                    <img src={product.slika} className="w-10 h-10" />
                    <div>{product.naziv}</div>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                    >
                      Obriši
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
          {activeView === "orders" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">Narudžbe</h1>
              <ul className="overflow-auto">
                {orders.map((order) => (
                  <li
                    key={order._id}
                    className="border border-gray-300 rounded-xl px-4 py-2 mb-4 bg-white"
                  >
                    <div>ID Narudžbe : {order._id}</div>
                    <div>Ime : {order.ime}</div>
                    <div>Broj telefona : {order.broj}</div>
                    <div>Adresa : {order.adresa}</div>
                    <div>Ukupna cijena: {order.cijena} KM</div>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-2 px-2 rounded-md"
                    >
                      Obriši narudžbu
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
