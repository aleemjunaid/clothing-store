import React from "react";
import Slider from "components/Slider";
import Product from "views/Products";

const Home = () => {
  return (
    <>
      <div>
        <Slider />
      </div>
      <Product/>
    </>
  );
};

export default Home;
