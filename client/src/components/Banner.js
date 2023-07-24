import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/banner.scss";

import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Banner = ({ timeline, ease }) => {
  const [img, setimg] = useState("/images/nft/1-.png");
  const [modal, setmodal] = useState(false);
  useEffect(() => {
    AOS.init({});
  }, []);
  // write a function that generate a random number between 1 and 20 after 1 second

  return (
    // <>
    //   <section className="banner" id="banner">
    //     <img src="/images/logo.png" className="welcome" alt="" />
    //     <div className="container">
    //       <div className="main__content">
    //         <h1>Frame Your Best Pictures</h1>
    //         <p>
    //           Upload any image and customize the frame style in seconds. We'll
    //           print and frame your photo and ship it to your door.
    //         </p>
    //         <Link to={"/frames-all"}>
    //           <div className="btn">Shop Frames</div>
    //         </Link>
    //       </div>
    //     </div>
    //   </section>{" "}
    // </>
    // <div>
    //   <img src="./images/hero.png" alt="" width={'100%'}/>
    //   <img src="./images/how.png" alt="" width={'100%'}/>
    //   <img src="./images/frame.png" alt="" width={'100%'}/>
    //   <img src="./images/gift.png" alt="" width={'100%'}/>
    //   <img src="./images/master.png" alt="" width={'100%'}/>
    // </div>
 <div className="banner-parent">
     <div style={{background:'#F8F8F8',padding:'80px 0'}}>
      <div>
        <center><h1 style={{fontFamily:'Montserrat, system-ui',fontSize:'48px',fontWeight:'600',margin:'0',paddingBottom:'40px'}}>Bring Your Art to Life By <b style={{color:'#4890A9'}}>Printing</b> on Wood <br /> Grain, Canvas or Acrylic!</h1></center>
        <center><p style={{fontFamily:'Montserrat, system-ui',fontSize:'18px',fontWeight:'400',margin:'0',paddingBottom:'40px'}}>Turn your photos into personalised gifts for weddings and special occasions</p></center>
      </div>
      <div style={{display:'flex',justifyContent:'center',gap:'40px',padding:'20px 0 60px 0'}} className="banner-grid">
        <div style={{background:'#F0F0F0'}} >
          <img src="./images/d1.png" alt="" width={'100%'} />
          <div style={{background:'#F0F0F0',padding:'20px 0',borderRadius:'8px'}}>
          <center> <h3>Art Design</h3></center>
          </div>
        </div>
        <div style={{background:'#F0F0F0'}} >
          <img src="./images/d4.png" alt="" width={'100%'} />
          <div style={{background:'#F0F0F0',padding:'20px 0',borderRadius:'8px'}}>
          <center> <h3>Art Design</h3></center>
          </div>
        </div>
        <div style={{background:'#F0F0F0'}} >
          <img src="./images/d2.png" alt="" width={'100%'} />
          <div style={{background:'#F0F0F0',padding:'20px 0',borderRadius:'8px'}}>
          <center> <h3>Art Design</h3></center>
          </div>
        </div>
        <div style={{background:'#F0F0F0'}} >
          <img src="./images/d3.png" alt="" width={'100%'} />
          <div style={{background:'#F0F0F0',padding:'20px 0',borderRadius:'8px'}}>
          <center> <h3>Art Design</h3></center>
          </div>
        </div>
      </div>
      <div>
      <Link to={"/frames-all"}>
        <center><button style={{background:'#4890A9',borderRadius:'50px',padding:'13px 25px',color:'white',border:'none'}}>shop all frames</button></center>
          </Link>
      </div>
    </div>
   
 </div>
  );
};

export default Banner;
