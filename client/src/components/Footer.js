import React from "react";
import "../scss/footer.scss";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import img from "../assests/footer.png"
const Footer = () => {
  return (
    <footer>
      <img src={img} style={{ width: '100%' }} alt="" />
    </footer>
  );
};

export default Footer;
