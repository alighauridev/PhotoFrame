import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
    getArtworks,
    getFilters,
    getProducts,
} from "../Redux/actions/productActions";
import "../scss/sidebarfilters.scss";

const SideBarFilters = ({ toggle, settoggle, art }) => {
    const dispatch = useDispatch();
    const [materials, setMaterials] = useState([]);

    const productFilter = useSelector((state) => state.artworkFilters);
    const Filter = useSelector((state) => state.Filters);
    const { categories } = productFilter;
    const { categories: filtercat } = Filter;

    const handleFilterClick = () => {
        if (art) {
            dispatch(getArtworks({ material: materials }));
        } else {
            dispatch(getProducts({ material: materials }));
        }
        settoggle(false);
    };

    const handleMaterialChange = (material) => {
        console.log(materials);
        if (materials.includes(material)) {
            // Material already exists, remove it
            setMaterials(materials.filter((m) => m !== material));
        } else {
            // Material doesn't exist, add it
            setMaterials([...materials, material]);
        }
    };

    return (
        <>
            {art && (
                <div
                    className="colors-filter"
                    style={{ display: toggle ? "block" : null }}
                >
                    {categories &&
                        categories.map((category) => (
                            <div className="frame-material" key={category._id}>
                                <h4>{category.name} </h4>
                                <div className="frame-material-div">
                                    {category.subcategories?.map((sub) => (
                                        <div className="frame-material-div" key={sub._id}>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleMaterialChange(sub.name)}
                                            />
                                            <h3>{sub.name}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    <div className="btn__grid">
                        <button onClick={handleFilterClick}>Filter</button>
                        <button>Clear</button>
                    </div>
                </div>
            )}
            {!art && (
                <div
                    className="colors-filter"
                    style={{ display: toggle ? "block" : null }}
                >
                    {filtercat &&
                        filtercat.map((category) => (
                            <div className="frame-material" key={category._id}>
                                <h4>{category.name} </h4>
                                <div className="frame-material-div">
                                    {category.subcategories?.map((sub) => (
                                        <div className="frame-material-div" key={sub._id}>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleMaterialChange(sub.name)}
                                            />
                                            <h3>{sub.name}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    <div className="btn__grid">
                        <button onClick={handleFilterClick}>Filter</button>
                        {/* <button>Clear</button> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default SideBarFilters;
