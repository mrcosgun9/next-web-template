import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function FullSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-item" style={{ background: "url(/images/slider/slider-1.jpg) center center no-repeat", backgroundSize: "cover" }}>
            <div className="slider-content">
              <label>Interior Decorative</label>
              <h1>HPL Panels</h1>
              <p>
                Eco-Friendly Interior Decorative Surfaces & Panels
                <br />
                Phenolic impregnated kraft papers pressed with high scratch resistant and hygenic decorative paper in...
              </p>
              <button>HOOK ME UP</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item" style={{ background: "url(/images/slider/slider-1.jpg) center center no-repeat", backgroundSize: "cover" }}>
            <div className="slider-content">
              <label>Interior Decorative</label>
              <h1>HPL Panels</h1>
              <p>
                Eco-Friendly Interior Decorative Surfaces & Panels
                <br />
                Phenolic impregnated kraft papers pressed with high scratch resistant and hygenic decorative paper in...
              </p>
              <button>HOOK ME UP</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FullSlider