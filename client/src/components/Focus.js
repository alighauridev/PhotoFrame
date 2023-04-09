import React from "react";
import "../scss/focus.scss";
const Focus = () => {
  return (
    <>
      <section className="focus" id="goal">
        <div className="container">
          <div className="about__grid">
            <div className="details">
              <h4 data-aos="fade-up" data-aos-delay="300">
                OUR GOAL!
              </h4>

              <p data-aos="fade-up" data-aos-delay="300">
                KaiyoCats is a community focused project centered around story
                creation, utility building, collaboration, adventure and long
                term connection. It is our goal to build a large community of
                likeminded people, creators, builders & dreamers that can help
                bring great changes to the NFT space.
              </p>
              <a
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ display: "inline-block" }}
                href="https://twitter.com/kaiyocats"
                target={"_blank"}
              >
                <button>Join Community!</button>
              </a>
            </div>
            <div className="img">
              <img data-aos='zoom-out-up' src="/images/threecats.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Focus;
