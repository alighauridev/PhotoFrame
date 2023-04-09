import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";
import Cards from "../components/Cards";
const AboutNft = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <h2>Framed Photos You Can Cherish Forever</h2>
          <div className="about__grid">
            <div className="item">
              <img src="https://d29mtkonxnc5fw.cloudfront.net/site_assets/wedding_photo_taller.jpg" alt="" />
            </div>
            <div className="item">
              <img src="https://d29mtkonxnc5fw.cloudfront.net/site_assets/frame-pictures-web.jpg" alt="" />
            </div>
            <div className="item">
              <img src="https://d29mtkonxnc5fw.cloudfront.net/site_assets/framed-photo-natural-maple.jpg" alt="" />
            </div>
          </div>
          <div className="details">
            <p>Choose any photo from your phone or computer and customize a museum-quality frame to fit. We'll print your photo, handcraft the frame and deliver it ready to hang within days.</p>
            <p>It's the perfect way to remember your favorite moments or create an unforgettable gift.</p>
            <p>We take expert care of each image entrusted to us, transforming the digital file into a handcrafted, custom framed photo designed to look great and last for decades.</p>
          </div>
          <div className="btns">
            <button>READ REVIEWS</button>
            <button>VIEW GALLERY</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNft;
