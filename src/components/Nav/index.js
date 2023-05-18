import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const Navbar = () => {
  const [isNav, setIsNav] = useState(false);
  const [length, setLength] = useState(0); 
  const location = useLocation()
  const [cartItems, setCartItems] = useState([]);
  console.log(location)
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItems")) || [];
    setLength(data.length);
    setCartItems(data);
  }, [location.pathname]);
  const onShow = () => {
    setIsNav(!isNav);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full fixed top-0 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <NavLink to="/">My Store</NavLink>
            </span>
          </div>
          <svg
            onClick={() => onShow()}
            className="w-6 h-6 relative block md:hidden"
            aria-hidden="true"
            fillRule="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          {isNav ? (
            <div
              id="dropdown"
              className="block md:hidden z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 right-0 top-16"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <NavLink to="/">
                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Home
                  </li>
                </NavLink>
                <NavLink to="/Products">
                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Products
                  </li>
                </NavLink>
                <NavLink to="/about">
                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    About
                  </li>
                </NavLink>
                <NavLink to="/contact">
                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Contact
                  </li>
                </NavLink>
                <NavLink to={`/Cart`}>
                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <ShoppingCartTwoToneIcon></ShoppingCartTwoToneIcon>Cart (
                    {length})
                  </li>
                </NavLink>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="cursor-pointer font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:hover:text-blue-700"
                aria-current="page"
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <NavLink to="/Products">Products</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <NavLink to={`/Cart`}>
                  <ShoppingCartTwoToneIcon></ShoppingCartTwoToneIcon>Cart (
                  {length})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
