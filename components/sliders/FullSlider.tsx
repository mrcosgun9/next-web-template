import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function FullSlider() {
  const router = useRouter()

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-item" style={{ background: "url(/images/slider/slider1.jpg) center center no-repeat", backgroundSize: "cover" }}>
            <div className="slider-content-right  text-ogb-200">
              <label>Plumbing Fixtures</label>
              <p>
                Customer-oriented solutions in different designs and colors shaped according to demand
              </p>
              <button onClick={() => router.push('/product/plumbing-fixtures')}>More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item" style={{ background: "url(/images/slider/slider2.jpg) center center no-repeat", backgroundSize: "cover" }}>
            <div className="slider-content-right text-white">
              <label>Shower Sets</label>
              <p>
                Alternatives that will both meet the needs and add elegance to the bathrooms
              </p>
              <button onClick={() => router.push('/product/plumbing-fixtures')}>More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item" style={{ background: "url(/images/slider/slider3.jpg) center center no-repeat", backgroundSize: "cover" }}>
            <div className="slider-content">
              <label>Transition Profiles</label>

              <p>
                Corner profiles, bordure profiles, angle profiles, technical profiles


              </p>
              <button onClick={() => router.push('/product/transition-drains')}>More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FullSlider