import React from "react";
import "../scss/contact.scss";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter, AiFillMediumCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
const icons = [
  {
    icon: <AiFillMediumCircle />,
    link: "https://medium.com/@SaltyBabiesNFT",
  },
  {
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/kaiyocats",
  },
  {
    icon: <AiFillInstagram />,
    link: "https://instagram.com/saltybabiesnft",
  },
  {
    icon: <FaDiscord />,
    link: "https://discord.gg/vmJtFdZKM5",
  },
];
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="item">
          <h1>Join the community</h1>
          <p>
            Join our Discord for the latest announcements or contact us on
            Twitter. Join our Discord for the latest announcements or contact us
            on Twitter.
          </p>

          <div className="icons">
            {icons.map((ite, i) => {
              return (
                <a href={ite.link} key={i} target="_blank">
                  {ite.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="item">
          <img src="/images/threecats.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
