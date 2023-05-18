import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
        console.log(res);
      } catch (error) {
        alert(error.message);
      }
    };
    getProduct();
  }, [id]);
  const onAddItems = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  return (
    <>
    <div className="w-full justify-center">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center">
        <div className="justify-center flex min-w-[420px]">
          <img
            className="h-[500px] w-[500px]"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="text-[2rem] mt-16 items-center flex flex-col min-w-[0px] md:min-w-[520px]">
          <h4 className="font-medium pt-2 text-gray-500 uppercase">
            {product.category}
          </h4>
          <h1 className="text-[2.5rem] font-light w-[70%] pt-2 italic ml-28">
            {product.title}
          </h1>
          <h4 className="font-medium text-[1.5rem] italic">
            Rating : {product.rating && product.rating.rate}
          </h4>
          <h4 className="font-medium pt-2 italic">Price : {product.price}</h4>
          <h4 className="font-medium text-[1rem] pt-2 w-[80%] italic text-gray-500 text-center">
            {product.description}
          </h4>
          <div className="flex justify-between mb-16">
            <NavLink to={`/Cart`}>
              <button
                onClick={() => onAddItems(product)}
                className="rounded-1xl bg-[#111827] h-12 w-36 text-white mt-8 text-[1rem]"
              >
                Add To Cart
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductsDetail;