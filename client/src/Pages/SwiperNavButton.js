import React from 'react';
import { useSwiper } from 'swiper/react';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns" style={{display:'flex',justifyContent:'center'}}>
      <button onClick={() => swiper.slidePrev()}><span style={{color:'white !important'}}><AiOutlineArrowLeft style={{color:'white !Important'}}/></span></button>
      <button onClick={() => swiper.slideNext()}><AiOutlineArrowRight style={{color:'white'}}/></button>
    </div>
  );
};
