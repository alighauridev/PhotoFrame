import { React, useEffect, useState, useRef } from "react";
import Navigation from ".//Navigation";
import "..//scss/Product.scss";

import {
    colors,
    depth,
    popularframe,
    product,
    style,
    width,
} from "..//assests/data";
import { Pagination, Typography, Rating } from "@mui/material";
import Footer from "..//components/Footer";
import SideBarFilters from "./SideBarFilters";
import ProductsGrid from "./ProductsGrid";
import { useDispatch, useSelector } from "react-redux";
import { getFilters, getProducts } from "../Redux/actions/productActions";
import { useParams } from "react-router-dom";
import Productbanner from "./Productbanner";
const Product = () => {
    const [value, setValue] = useState();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.Products);
    const { frames, loading, pages, page } = products;
    const { keyword } = useParams();
    const [toggle, settoggle] = useState(false);
    const { pageNumber } = useParams();
    useEffect(() => {
        dispatch(getProducts({}));
        dispatch(getFilters());
    }, []);
    useEffect(() => {
        dispatch(getProducts({ keyword, pageNumber }));
    }, [pageNumber, keyword]);
    return (
        <>
            <Navigation />
            <Productbanner />
            <div className="product-parent">
                {/* SECOND MAIN GRID SECTION START HERE */}
                <button
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px",
                        cursor: "pointer",
                        fontWeight: "700",
                        fontSize: "16px",
                        fontFamily: "Montserrat, sans-serif",
                        textDecoration: "none",
                        textAlign: "center",
                        pointerEvents: "all",
                        transition: "all 0.3s ease 0s",
                        textTransform: "none",
                        border: "2px solid #272727",
                        backgroundColor: "#272727",
                        color: "white",
                        borderRadius: "4px",
                        margin: "10px 10px",
                        padding: "15px 32px",
                    }}
                    className="filter__toggle"
                    onClick={() => settoggle(!toggle)}
                >
                    {" "}
                    Filters
                </button>
                <div className="colors-filter-product-parent">
                    {/* SIDEBAR SECTION START HERE */}

                    <SideBarFilters art={false} toggle={toggle} settoggle={settoggle} />

                    {/* PRODUCT IMAGES SECTION START HERE */}
                    <ProductsGrid
                        frames={frames}
                        pages={pages}
                        keyword={keyword}
                        art={false}
                        pageNumber={pageNumber}
                    />
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Product;
