import shopImg from "../../assets/images/shop.jpg";
import clothImg from "../../assets/images/the-outnet.jpg";
import clothImg2 from "../../assets/images/download.jpg";
import clothImg3 from "../../assets/images/elec.jpg";
import clothImg4 from "../../assets/images/bagshop.jpg";
import clothImg5 from "../../assets/images/off.jpg";
import clothImg6 from "../../assets/images/online ordering.jpg";
import clothImg7 from "../../assets/images/superslae.jpg";
import clothImg8 from "../../assets/images/weekend sal.jpg";


import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="h-60">
          <img className="h-60 w-full" src={shopImg} />
        </SwiperSlide>
        <SwiperSlide className="h-60">
          <img className="h-60 w-full" src={clothImg} />
        </SwiperSlide>
        <SwiperSlide className="h-60">
            <img className="h-60 w-full" src={clothImg2} />
        </SwiperSlide>
        <SwiperSlide className="h-60">
            <img className="h-60 w-full" src={clothImg3} />
        </SwiperSlide>
        <SwiperSlide className="h-60">
            <img className="h-60 w-full" src={clothImg4} />
        </SwiperSlide>
        <SwiperSlide className="h-60">
            <img className="h-60 w-full" src={clothImg5} />
        </SwiperSlide>
        <SwiperSlide className="h-60">
            <img className="h-60 w-full" src={clothImg6} />
        </SwiperSlide>
        <SwiperSlide className="h-60">
            <img className="h-60 w-full" src={clothImg7} />
        </SwiperSlide>
        <SwiperSlide className="h-60">
            <img className="h-60 w-full" src={clothImg8} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
