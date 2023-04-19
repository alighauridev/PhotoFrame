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
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Frame from "./components/Frame";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import InquiryForm from "./Pages/InquiryForm";
import PrivateRouter from "./components/PrivateRouter";

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
          {/* <Route path="/frame" element={<ImageDropZone />} /> */}
          <Route path="/frames" element={<Product />} />
          <Route exact path="/search/:keyword" element={<Product />}></Route>
          <Route
            exact
            path="/search/:keyword/page/:pageNumber"
            element={<Product />}
          ></Route>
          <Route exact path="/page/:pageNumber" element={<Product />}></Route>
          <Route path="/frames/:id" element={<ProductDetail />} />
          <Route element={<PrivateRouter />}>
            <Route path="/frames/:id/inquiry" element={<InquiryForm />} />

          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
        {/* <Frame /> */}
      </main>
    </>
  );
}

export default App;
