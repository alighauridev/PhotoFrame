import React, { Fragment } from "react";

import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import MainPannel from "./MainPannel";
import ArtworksPage from "../../Pages/ArtworksPage";
import FramesPages from "../../Pages/FramesPages";
const FramePanel = () => {
    return (
        <Fragment>
            <Navigation />
            <div className="inquiry-parent">
                <div>
                    <MainPannel />
                </div>
                <div>
                    <FramesPages />
                </div>
            </div>
        </Fragment>
    );
};

export default FramePanel;
