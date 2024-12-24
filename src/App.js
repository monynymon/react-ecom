import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Blog from "./Components/Pages/Blog";
import BlogDetail from "./Components/Pages/BlogDetail";
import Shop from "./Components/Pages/Shop";
import ShoppingCart from "./Components/Pages/ShoppingCart";
import Checkout from "./Components/Pages/Checkout";
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
