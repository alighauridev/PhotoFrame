import React, { useState, useEffect, useRef } from "react";
import "./scss/normalize.css";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./scss/reset.css";
import AboutNft from "./components/AboutNft";

import { gsap } from "gsap";
import { Power4 } from "gsap/gsap-core";
import Material from "./components/Material";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ImageDropZone from "./components/ImageDropZone";

var Spinner = require("react-spinkit");
function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");
  const containerRef = useRef(null);
  const tl = new gsap.timeline();
  let ease = Power4.easeOut();


  return (
    <>
      <main style={{ overflow: "hidden" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frame" element={<ImageDropZone />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
