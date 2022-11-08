import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function FullSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full bg-blue-700 h-screen bg-cover" style={{ background: "url(/images/slider/slider-1.jpg) center center no-repeat", backgroundSize: "cover" }}>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-blue-700 h-screen bg-cover" style={{ background: "url(/images/slider/slider-1.jpg) center center no-repeat", backgroundSize: "cover" }}>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FullSlider