import React from 'react'
import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../scss/Review.scss'
import { SwiperNavButtons } from '../Pages/SwiperNavButton';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const Review = () => {
    const [value, setValue] = React.useState(2);
  return (
    <div className="App">
    <h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView="auto"
      >
        <SwiperSlide className="res-slide" style={{boxShadow:'0px 0px 10px -8px black',padding:'30px'}}>
            <center><img src="./images/Review.png" alt="" />
      <Stack spacing={1}>
      <center><Rating name="size-small" defaultValue={0} size="small"  />
     </center>
    </Stack>
    <h3 style={{fontSize:'24px',fontWeight:'600'}}>Dane Botsford</h3>
    <p style={{color:'#00000080',fontWeight:'400',fontSize:'16px',lineHeight:'22px',marginTop:'10px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </center>
    
        </SwiperSlide>

{/* ..............................................................---------------------- */}

        <SwiperSlide className="res-slide" style={{boxShadow:'0px 0px 10px -8px black',padding:'30px'}}>
            <center><img src="./images/Review.png" alt="" />
      <Stack spacing={1}>
      <center><Rating name="size-small" defaultValue={0} size="small"  />
     </center>
    </Stack>
    <h3 style={{fontSize:'24px',fontWeight:'600'}}>Dane Botsford</h3>
    <p style={{color:'#00000080',fontWeight:'400',fontSize:'16px',lineHeight:'22px',marginTop:'10px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </center>
    
        </SwiperSlide>

{/* ------------------------------------------------ */}

        <SwiperSlide className="res-slide" style={{boxShadow:'0px 0px 10px -8px black',padding:'30px'}}>
            <center><img src="./images/Review.png" alt="" />
      <Stack spacing={1}>
      <center><Rating name="size-small" defaultValue={0} size="small"  />
     </center>
    </Stack>
    <h3 style={{fontSize:'24px',fontWeight:'600'}}>Dane Botsford</h3>
    <p style={{color:'#00000080',fontWeight:'400',fontSize:'16px',lineHeight:'22px',marginTop:'10px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </center>
    
        </SwiperSlide>
{/* ..................................................................... */}

        <SwiperSlide className="res-slide" style={{boxShadow:'0px 0px 10px -8px black',padding:'30px'}}>
            <center><img src="./images/Review.png" alt="" />
      <Stack spacing={1}>
      <center><Rating name="size-small" defaultValue={0} size="small"  />
     </center>
    </Stack>
    <h3 style={{fontSize:'24px',fontWeight:'600'}}>Dane Botsford</h3>
    <p style={{color:'#00000080',fontWeight:'400',fontSize:'16px',lineHeight:'22px',marginTop:'10px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </center>
    
        </SwiperSlide>


      <SwiperNavButtons/>
      </Swiper>
    </h1>
  </div>
  )
}

export default Review