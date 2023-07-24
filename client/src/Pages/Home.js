import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import AboutNft from "../components/AboutNft";
import Material from "../components/Material";
import Footer from "../components/Footer";
import Favi from './Favi'
import Unique from "./Unique";
import Upload from "./Upload";
import Review from "../components/Review";
const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
          <Favi/>
            {/* <AboutNft /> */}
            <Unique/>
            <Upload/>
           <Review/>
            <Footer />
        </>
    );
};

export default Home;
