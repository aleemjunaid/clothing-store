import React from "react";
import { URL } from "constants/index";
import { Route, Routes } from "react-router-dom";
import Home from "views/Home";
import Products from "views/Products";
import Navbar from "components/Nav";
import ProductsDetail from "views/productsDetail";
import About from "views/About";
import Contact from "views/Contact";
import Cart from "views/Cart";

const MainRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/ProductsDetail/:id" element={<ProductsDetail/>}></Route>
        <Route exact path="/about" element={<About/>} ></Route>
        <Route exact path="/contact" element={<Contact/>} ></Route>
        <Route exact path="/Cart" element={<Cart/>} ></Route>
      </Routes>
    </>
  );
};

export default MainRouter;