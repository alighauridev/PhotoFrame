import React, { Fragment } from "react";

import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import MainPannel from "./MainPannel";
import ArtworksPage from "../../Pages/ArtworksPage";
const ArtWork = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="inquiry-parent">
        <div>
          <MainPannel />
        </div>
        <div>
          <ArtworksPage />
        </div>
      </div>
    </Fragment>
  );
};

export default ArtWork;
