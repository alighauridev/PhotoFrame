import React, { useEffect, useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";
import Navigation from "./Navigation";

const Roadmap = () => {
  const { ref } = useParallax < HTMLDivElement > { speed: 10 };
  return (
    <>
      z
      <section id="roadmap" className="roadmap">
        <img src="/images/Power crystal.png" alt="" className="ore floating" />
        <div className="heading">
          <h1 data-aos="fade-down" class="aos-init aos-animate">
            OUR Roadmap
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Our roadmap will be in phases to keep it simple & clear as well as
            keeping it exciting.
          </p>
        </div>
        <div className="container">
          <div className="roadmap__grid">
            <div className="top">
              <div className="item">
                <h3 data-aos="fade-up" data-aos-delay="300">
                  Phase 1
                </h3>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="300">Launch</li>
                  <li data-aos="fade-up" data-aos-delay="300">Kaiyocats warrior advancement</li>
                  <li data-aos="fade-up" data-aos-delay="300">Staking</li>
                  <li data-aos="fade-up" data-aos-delay="300">Chapter 1 Finale & Kaiyo holder surprise</li>
                </ul>
              </div>
              <div className="item">
                <h3 data-aos="fade-up" data-aos-delay="300">
                  Phase 2
                </h3>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="300">Chapter 2 - Escaped </li>
                </ul>
              </div>
            </div>
            <p data-aos="fade-up" data-aos-delay="300">
              Our roadmap is not static and we will continue to get better
              with the fast evolving NFT space. List is not including our
              collabs, partnerships, drops & other cool stuff we don't want
              frontrun.
            </p>
            {/* <div className="bottom">
              <h3 data-aos="fade-up" data-aos-delay="300">
                
              </h3>
              <p data-aos="fade-up" data-aos-delay="300">
              
              </p>
            </div> */}
          </div>
        </div>
        {/* <img src="/images/Website-comic/1.png" alt="" /> */}
      </section>
    </>
  );
};

export default Roadmap;
