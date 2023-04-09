import React from "react";
import { works } from "../assests/data";
import "../scss/works.scss";
const Works = () => {
  return (
    <>
      <section className="works">
        <div className="second__heading">
          <h1 data-aos="fade-down" class="aos-init aos-animate">Kaiyo Warriors, get ready for battle!</h1>
          <p data-aos="fade-up" data-aos-delay="300">
            In this first chapter you will be able to get your hands on Ores.
            These Ores are NFTs you can earn and swap for each chapter
            advancement, enhancment or transformation. Don't worry if you miss
            the chapter 1 advancement because there will be awesome new one's
            with each new chapter of the Kaiyocats story.
          </p>
        </div>
        <div className="heading">
          <h1 data-aos="fade-down" class="aos-init aos-animate">
            How It Works!
          </h1>
        </div>
        <div className="container">
          <div className="grid">
            {works.map((item, i) => {
              return (
                <div
                  className="item"
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
                >
                  <h1>Step {i + 1}</h1>
                  <p>{item.desc}</p>
                  <div className="img">
                    <img src={item.src} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
