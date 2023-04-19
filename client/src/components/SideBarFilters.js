import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getFilters, getProducts } from "../Redux/actions/productActions";
import "../scss/sidebarfilters.scss";

const SideBarFilters = ({ toggle, settoggle }) => {
    const dispatch = useDispatch();
    const [materials, setMaterials] = useState([]);
    const [types, setTypes] = useState([]);
    const [colors, setColors] = useState([]);
    const productFilter = useSelector((state) => state.Filters);
    const {
        materials: materialState,
        types: typeState,
        colors: colorsState,
    } = productFilter;

    const handleFilterClick = () => {

        dispatch(getProducts({ material: materials, type: types, color: colors }));
        settoggle(false)
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

    const handleTypeChange = (type) => {
        console.log(types);
        if (types.includes(type)) {
            // Type already exists, remove it
            setTypes(types.filter((t) => t !== type));
        } else {
            // Type doesn't exist, add it
            setTypes([...types, type]);
        }
    };
    const handleColorChange = (color) => {
        console.log(colors);
        if (colors.includes(color)) {
            // Color already exists, remove it
            setColors(colors.filter((c) => c !== color));
        } else {
            // Color doesn't exist, add it
            setColors([...colors, color]);
        }
    };

    return (
        <div className="colors-filter" style={{ display: toggle ? "block" : null }}>
            {/* FRAME METERIAL SECTION START HERE */}
            {/* <div className="frame-material">
                <h4>Colors </h4>

                <div
                    className="frame-material-div"
                    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                >
                    {colorsState?.map((color) => (
                        <span
                            key={color}
                            className={`color-circle ${colors.includes(color) ? "active" : ""}`}
                            style={{
                                background: color,
                                width: '20px',
                                height: '20px',
                                borderRadius: '100px'
                            }}
                            onClick={() => handleColorChange(color)}
                        ></span>
                    ))}
                </div>
            </div> */}
            <div className="frame-material">
                <h4>Frame Material </h4>

                <div className="frame-material-div">
                    {materialState?.map((material) => (
                        <div className="frame-material-div" key={material}>
                            <input
                                type="checkbox"
                                onChange={() => handleMaterialChange(material)}
                            />
                            <h3>{material}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* FRAME TYPE SECTION START HERE */}
            <div className="frame-material">
                <h4>Frame Type</h4>

                <div className="frame-material-div">
                    {typeState?.map((type) => (
                        <div className="frame-material-div" key={type}>
                            <input type="checkbox" onChange={() => handleTypeChange(type)} />
                            <h3>{type}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="btn__grid">
                <button onClick={handleFilterClick}>Filter</button>
                <button>Clear</button>
            </div>
        </div>
    );
};

export default SideBarFilters;
