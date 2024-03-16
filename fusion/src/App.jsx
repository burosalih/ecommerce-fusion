import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Muskarci from "./pages/Muskarci";
import Zene from "./pages/Zene";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import Savjeti from "./pages/Savjeti";
import Blog from "./pages/Blog";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

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
                <FloatingButton />
                <Footer />
              </>
            }
          />
          <Route
            path="/muskarci"
            element={
              <>
                <Header />
                <Muskarci />
                <FloatingButton />
                <Footer />
              </>
            }
          />
          <Route
            path="/zene"
            element={
              <>
                <Header />
                <Zene />
                <FloatingButton />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <ProductDetails />
                <FloatingButton />
                <Footer />
              </>
            }
          />
          <Route
            path="/savjeti"
            element={
              <>
                <Header />
                <Savjeti />
                <FloatingButton />
                <Footer />
              </>
            }
          /><Route
          path="/blog"
          element={
            <>
              <Header />
              <Blog />
              <FloatingButton />
              <Footer />
            </>
          }
        />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/adminpanel"
            element={isLoggedIn ? <AdminPanel /> : <Navigate to="/login" />}
          />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}
export default App;
