import React, { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from "./PrivateRouter";
import { Routes, Route } from "react-router-dom";
import FrameAdmin from "./screens/FrameAdmin";
import Login from "./screens/LoginScreen";
import { useDispatch } from "react-redux";
import AdminInquiries from "./screens/AdminInquiries";

function App() {
  const dispatch = useDispatch();

  useEffect(() => { }, [dispatch]);

  return (
    <>
      <Routes>
        <Route exact element={<PrivateRouter />}>
          <Route path="/" element={<FrameAdmin />} />
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
