import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Products = () => {
    const [data, setData] = useState([]);
    const [ filter, setFilter] = useState([])
    const getApiData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
        setFilter(res.data)
      } catch (error) {
        alert(error.message);
      }
    };
    useEffect(() => {
      getApiData();
    }, []);
    const filterProduct = (selectedProduct) => {
      if (selectedProduct === "all") {
        setFilter(data);
      } else {
        const updatedList = data.filter((x) => x.category === selectedProduct);
        setFilter(updatedList);
      }
    };
    return (
      <>
        <div className="w-full flex justify-center items-center h-40 text-[#111827]">
          <h1 className="font-medium text-[2rem]">Latest Products</h1>
        </div>
  
        <div className="w-full flex justify-center items-center h-12 mb-20">
          <div className="flex justify-between w-[40%] min-w-min">
          <button
              onClick={() => filterProduct("all")}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              All
            </button>
            <button
              onClick={() => filterProduct("men's clothing")}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Mens's Clothing
            </button>
            <button
              onClick={() => filterProduct("women's clothing")}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Women's Clothing
            </button>
            <button
              onClick={() => filterProduct("jewelery")}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Jewelery
            </button>
            <button
              onClick={() => filterProduct("electronics")}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Electronics
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-8">
          {filter.map((post) => {
            const { id, title, image, price } = post;
            return (
              <div
                className="flex h-96 w-80 flex-wrap justify-between mb-44"
                key={id}
              >
                <img className="bg-cover h-full w-full" src={image} alt="" />
                <div className="flex w-full justify-between mt-4">
                  <h1 className="text-2xl">{title.slice(0,12)}...</h1>
                  <NavLink to={`/ProductsDetail/${post.id}`}>
                  <button
                    className="rounded-1xl bg-blue-600 h-8 w-24 text-white mt-8"
                  >
                    Buy Now
                  </button>
                    </NavLink>
                </div>
                <h1 className="text-2xl font-semibold">Price: {price}$</h1>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  
  export default Products;