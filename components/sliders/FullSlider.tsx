import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useElementSize } from "@mantine/hooks";

function FullSlider() {
  const router = useRouter()
  const { ref, width, height } = useElementSize();
  return (
    <div ref={ref} >
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
          <div className="slider-item" style={{ background: "url(/images/slider" + (width < 450 ? "/mobile" : "") + "/slider2.jpg) center center no-repeat", backgroundSize: "cover" }}>
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
          <div className="slider-item" style={{ background: "url(/images/slider" + (width < 450 ? "/mobile" : "") + "/slider3.jpg) center center no-repeat", backgroundSize: "cover" }}>
            <div className="slider-content">
              <label>Transition Profiles</label>

              <p>
                Different types of membranes are installed depending on the specific location and expected function.
              </p>
              <button onClick={() => router.push('/product/transition-drains')}>More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item" style={{ background: "url(/images/slider" + (width < 450 ? "/mobile" : "") + "/slider1.jpg) center center no-repeat", backgroundSize: "cover" }}>
            <div className="slider-content-right  text-white">
              <label>Membrane</label>
              <p>
                Customer-oriented solutions in different designs and colors shaped according to demand
              </p>
              <button onClick={() => router.push('/product/membrane')}>More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default FullSlider