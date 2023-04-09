import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

import "../scss/comics.scss";
const Comics = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <section className="comics" id="story">
      <img src="/images/Catufo.png" alt="" className="ore floating" />
      <div className="heading">
        <h1 data-aos="fade-down" class="aos-init aos-animate">story</h1>
        <p>
          <span data-aos="fade-up" data-aos-delay="300">
            The Kaiyocats safely landed in pods from the outer brims of space. Initially, we knew little of why they arrived or where the came from, only that they hope to start a new life.

          </span>
          <span data-aos="fade-up" data-aos-delay="300">

            Now the Kaiyocats nestle a nearby town, purring in curiosity & ready to tell their story. In this pocket of the metaverse, cats are celebrated and loved - and in return, they fuel humanity with their stories, intellect and power.
          </span>
        </p>{" "}
      
        {/* <img
          src="/images/Website-comic/Title.png"
          style={{ width: "95%" }}
          alt=""
        /> */}
      </div>
      <div className="second__heading">
      <h1 data-aos="fade-down" class="aos-init aos-animate">CHAPTER 1:ORIGINS</h1>
      </div>

      <div className="container">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={false}
          pagination={pagination}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
            return (
              <SwiperSlide>
                <img
                  src={`/images/Website-comic/${item}.png`}
                  style={{ width: "95%", margin: "auto" }}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className="flat__container">
      {[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
            return (
              
               <div className="item">
                 <img
                  src={`/images/Website-comic/${item}.png`}
                  style={{ width: "100%", margin: "30px auto" }}
                  alt=""
                />
               </div>
        
            );
          })}
      </div> */}
      <h1 data-aos="fade-up" class="aos-init aos-animate">TO BE CONTINUED...</h1>
    </section>
  );
};

export default Comics;
