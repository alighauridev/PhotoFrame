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
import Inquiry from "./components/Pannel/Inquiry";
import ArtWork from "./components/Pannel/ArtWork";
import Navbar from "./components/Navbar";
import ArtworkAdmin from "./Pages/ArtworkAdmin";
import ArtworksPage from "./Pages/ArtworksPage";
import FramesPages from "./Pages/FramesPages";
import FrameAdmin from "./Pages/FrameAdmin";
import FramePanel from "./components/Pannel/FramePanel";
import Artwork from "./components/Artwork";
import ArtworkDetails from "./components/ArtworkDetails";
import InquiriesPage from "./Pages/InquiriesPage";
import ArtWorkInquiries from "./Pages/ArtWorkInquiries";
import Editor from "./components/Editor";

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

          <Route path="/frame/upload/:id?" element={<FrameAdmin />} />

          <Route path="/frames" element={<FramesPages />} />

          <Route path="/artworks" element={<ArtworksPage />} />

          <Route path="/artwork/upload/:id?" element={<ArtworkAdmin />} />

          <Route path="/frames-all" element={<Product />} />
          <Route path="/artworks-all" element={<Artwork />} />
          <Route
            exact
            path="/frame/search/:keyword"
            element={<Product />}
          ></Route>
          <Route
            exact
            path="/frame/search/:keyword/page/:pageNumber"
            element={<Product />}
          ></Route>
          <Route
            exact
            path="/frame/page/:pageNumber"
            element={<Product />}
          ></Route>
          <Route
            exact
            path="/artwork/search/:keyword"
            element={<Artwork />}
          ></Route>
          <Route
            exact
            path="/artwork/search/:keyword/page/:pageNumber"
            element={<Artwork />}
          ></Route>
          <Route
            exact
            path="/artwork/page/:pageNumber"
            element={<Artwork />}
          ></Route>
          <Route path="/frames-all/:id" element={<ProductDetail />} />
          <Route path="/artworks-all/:id" element={<ArtworkDetails />} />
          <Route element={<PrivateRouter />}>
            <Route path="/:mode/:id/inquiry" element={<InquiryForm />} />
          </Route>
          <Route path="/pannel" element={<Pannel />} />
          <Route path="/artwork" element={<ArtWork />} />
          <Route exact path="/frame" element={<FramePanel />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/frame-inquiries" element={<InquiriesPage />} />
          <Route path="/artwork-inquiries" element={<ArtWorkInquiries />} />
          <Route path="/inquiry" element={<InquiriesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
