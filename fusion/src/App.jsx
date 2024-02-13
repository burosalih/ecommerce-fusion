import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <ProductDetails />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}
export default App;