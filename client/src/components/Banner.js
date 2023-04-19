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
    <>
      <section className="banner" id="banner">

        <img src="/images/logo.png" className="welcome" alt="" />
        <div className="container">
          <div className="main__content" >
            <h1>
              Frame Your Best Pictures
            </h1>
            <p>
              Upload any image and customize the frame style in seconds.
              We'll print and frame your photo and ship it to your door.
            </p>
            <Link to={'/frames'} >
              <div className="btn">
                Shop Frames
              </div>
            </Link>
          </div>
        </div>
      </section>{" "}

    </>
  );
};

export default Banner;
