import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import "../scss/cards.scss";

import { collection } from "../assests/data";


import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Cards = () => {
  const [item, setItem] = useState(6);
  const [padding, setPadding] = useState(40);


  SwiperCore.use([Autoplay]);
  return (
    <>
      <section id="cards" className="cards">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {collection.map((nft, i) => {
            return (
              <SwiperSlide key={i} className="item"  data-swiper-autoplay="2000">
          
                  <div className="nft__item">
          
                      <img src={nft} alt="" />
                   
                  </div>
            
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Cards;
