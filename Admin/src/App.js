import React, { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from "./PrivateRouter";
import { Routes, Route } from "react-router-dom";
import FrameAdmin from "./screens/FrameAdmin";
import Login from "./screens/LoginScreen";
import { useDispatch } from "react-redux";
import AdminInquiries from "./screens/AdminInquiries";
import Home from "./pages/Home";
import ArtworkAdmin from "./screens/ArtworkAdmin";
import FramesPages from "./screens/FramesPages";
import ArtworksPage from "./screens/ArtworksPage";
import AdminFramesPage from "./pages/AdminFramesPage";
import AdminArtworkPage from "./pages/AdminArtworkPage";
import InquiriesPage from "./pages/InquiriesPage";
import ArtWorkInquiries from "./pages/ArtWorkInquiries";

function App() {
  const dispatch = useDispatch();

  useEffect(() => { }, [dispatch]);

  return (
    <>
      <Routes>
        <Route exact element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route exact element={<PrivateRouter />}>
          <Route path="/frame/upload/:id?" element={<FrameAdmin />} />
        </Route>
        <Route exact element={<PrivateRouter />}>
          <Route path="/frames" element={<FramesPages />} />
        </Route>
        <Route exact element={<PrivateRouter />}>
          <Route path="/new-frames" element={<AdminFramesPage />} />
        </Route>
        <Route exact element={<PrivateRouter />}>
          <Route path="/frame-inquiries" element={<InquiriesPage />} />
        </Route>
        <Route exact element={<PrivateRouter />}>
          <Route path="/artwork-inquiries" element={<ArtWorkInquiries />} />
        </Route>
        <Route exact element={<PrivateRouter />}>
          <Route path="/new-artwork" element={<AdminArtworkPage />} />
        </Route>
        <Route exact element={<PrivateRouter />}>
          <Route path="/artworks" element={<ArtworksPage />} />
        </Route>
        <Route exact element={<PrivateRouter />}>
          <Route path="/artwork/upload/:id?" element={<ArtworkAdmin />} />
        </Route>
        <Route exact element={<PrivateRouter />}>
          <Route path="/inquires" element={<AdminInquiries />} />
        </Route>
        <Route path="/login" element={<Login />} />{" "}
      </Routes>
    </>
  );
}

export default App;
