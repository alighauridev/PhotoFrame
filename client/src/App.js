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

import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import InquiryForm from "./Pages/InquiryForm";
import PrivateRouter from "./components/PrivateRouter";
import Pannel from "./Pages/Pannel";
import Upload from "./components/Pannel/Upload";
import Profile from "./components/Pannel/Profile";
import Inquiry from './components/Pannel/Inquiry'
import ArtWork from "./components/Pannel/ArtWork";
import Navbar from "./components/Navbar";

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
          <Route path="/pannel" element={<Pannel/>}/>
          <Route path="/artwork" element={<ArtWork/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/inquiry" element={<Inquiry/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
        
      </main>
      
      
    </>
  );
}

export default App;
