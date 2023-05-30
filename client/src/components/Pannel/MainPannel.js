import React from "react";
import "./Scss/MainPannel.scss";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
const MainPannel = () => {
    return (
        <div className="pannel-grid">
            <div className="side-bar">
                <div className="Pannel-title">
                    <h1>Dashboard</h1>
                </div>
                <Link to="/profile">
                    <h3>Profile</h3>
                </Link>

                <Link to="/upload">
                    {" "}
                    <h3>Upload</h3>
                </Link>


                <Link to="/artwork">
                    <h3>Artwork</h3>
                </Link>
                <Link to="/frame">
                    <h3>frames</h3>
                </Link>
            </div>
        </div>
    );
};

export default MainPannel;
