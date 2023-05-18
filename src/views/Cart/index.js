import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setData(cartItems);
  }, []);
  const onDel = (i) => {
    const data = JSON.parse(localStorage.getItem("cartItems"));
    data.splice(i, 1);
    setData(data);
    localStorage.setItem("cartItems", JSON.stringify(data));
    if (data.length === 0) {
      localStorage.clear();
    }
  };
  const totalPrice = data.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  const onChange = (i, quantity) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cartItems[i].quantity = quantity;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setData(cartItems);
  };
  if (data.length === 0) {
    return (
      <div className="mt-60">
        <h1 className="text-center text-2xl font-bold">Your Cart Is Empty</h1>
      </div>
    );
  }
  return (
    <div className="mt-[-55px]">
      <div className="pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart products</h1>
          <p className="text-center font-bold text-lg mb-10">
            Total Price : {totalPrice}$
          </p>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {data.map((product, i) => (
              <div
                key={product.id + "cvbcvb"}
                className="justify-between mb-6 rounded-lg bg-gray-100 p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={product.image}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {product.title}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      {product.category}
                    </p>
                    <p className="text-sm mt-2">
                      Price : {product.price * product.quantity}$
                    </p>
                    <div className="flex products-center border-gray-100 mt-2">
                      <input
                        onChange={(e) => onChange(i, e.target.value)}
                        className="h-8 w-12 border bg-white text-center text-xs outline-none"
                        type="number"
                        min="1"
                        max="10"
                        value={product.quantity}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-1 ml-1">
                    <div className="flex products-center space-x-4">
                      <NavLink to="/Products">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        onClick={() => onDel(i)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
