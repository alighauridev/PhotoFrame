import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/team.scss";
import { team } from "../assests/data";
import { AiOutlineTwitter } from "react-icons/ai";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Teams = () => {
  return (
    <>
      <section id="team" className="team">
       
        <div className="container">
          <div className="heading">
            <h1
data-aos="fade-down" class="aos-init aos-animate"
            >
            TEAM
            </h1>
        
          </div>
          <div className="team__grid">
            {team.map((ite, ind) => {
              return (
                <div
                  key={ind}
                  className="item"
                  data-aos-delay={ind * 150}
                  data-aos="fade-up"
                >
                  <div className="inner">
                    <div className="img">
                      <img src={ite.path} alt="" />
                    </div>
                    <div className="detail">
                      <h2 className="name">{ite.name}</h2>
                      <h4>{ite.position}</h4>
                    </div>
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

export default Teams;
