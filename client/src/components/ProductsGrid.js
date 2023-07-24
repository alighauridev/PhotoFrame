import React, { useState, useEffect } from "react";
import { Pagination, Typography, Rating } from "@mui/material";
import { product } from "../assests/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/actions/productActions";
import ImageCard from "./ImageCard";
const ProductsGrid = ({ frames, pages, pageNumber, art }) => {
    const [value, setValue] = useState();
    const [page, setPage] = useState(0);
    const [keyword, setKeyword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (event, value) => {
        setPage(value);
        navigate(`/page/${value}`);
    };
    const searchHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            if (!art) {
                navigate(`/frame/search/${keyword}`);
                console.log(keyword);
            } else {
                navigate(`/artwork/search/${keyword}`);
                console.log(keyword);
            }
        } else {
            navigate(`/`);
        }
    };

    return (
        <div className="product-image">
            {/* SORT SECTION START HERE */}
            <form className="search__inner" onSubmit={searchHandler}>
                {/* <button className="search__icon">
                    <BiSearch />
                </button> */}
                <input
                    type="search"
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search Products"
                />
            </form>

            {/* PRODUCT IMAGES START HERE */}

            <div className="product-images-grid">
                {frames?.length > 0 ? (
                    <>
                        {frames?.map((frame) => {
                            return (
                                <div
                                    onClick={() =>
                                        navigate(
                                            art
                                                ? `/artworks-all/${frame._id}`
                                                : `/frames-all/${frame._id}`
                                        )
                                    }
                                >
                                    <div className="frame">
                                        {
                                            frame.patch ? <ImageCard rod={frame} /> : <img style={{ width: '100%', maxHeight: '300px' }} src={frame.image} alt="" />
                                        }
                                    </div>
                                    <h4>{frame.title}</h4>
                                    <p>{frame.description}</p>
                                    <Typography component="legend"></Typography>
                                    {/* <button>View Now</button> */}
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <h2 style={{ height: "45vh" }}>
                        <center>loading....</center>
                    </h2>
                )}
            </div>

            <div className="sort-parent" style={{ margin: "40px 0" }}>
                <div className="sort-section">
                    {!pages == 0 ? (
                        <Pagination
                            count={pages}
                            page={page}
                            onChange={handleChange}
                            defaultPage={1}
                        />
                    ) : null}
                </div>
            </div>

            {/* SECTION DETAIL */}
        </div>
    );
};

export default ProductsGrid;
