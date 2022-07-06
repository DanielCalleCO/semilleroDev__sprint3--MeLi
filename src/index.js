import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar/Navbar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/ShoppingCart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
