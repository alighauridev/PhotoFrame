import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import "../scss/frames.scss";
const ArtworksPage = () => {
    const UserLogin = useSelector((state) => state.UserLogin);
    const [artworks, setArtworks] = useState([]);
    const [loading, setloading] = useState(false)
    const { userInfo } = UserLogin;
    const navigate = useNavigate();

    const getArtworks = async () => {
        setloading(true);
        try {
            const { data } = await axios.get(`/api/artwork/${userInfo._id}/all`);

            setArtworks(data);
            setloading(false);
        } catch (error) {
            setloading(false);
            console.error("Error uploading artwork:", error);
        }
    };
    const deleteFrame = async (id) => {
        try {
            await axios.delete(`/api/artwork/${id}`);
            alert("Artwork deleted");
            getArtworks();
        } catch (error) {
            console.error("Error deleting Artwork:", error);
        }
    };
    useEffect(() => {
        getArtworks();
    }, []);
    return (
        <>
            <div className="admin__panel">
                <h1>Artworks</h1>
                <ul>
                    <li>
                        {" "}
                        <Link to={"/artwork/upload"}>Upload Artwork</Link>
                    </li>

                    <li>    <Link to={"/artwork-inquiries"}>Inquiries</Link></li>
                </ul>
                <div className="frames">
                    {
                        loading ? <p>loading...</p> : <>
                            {
                                artworks.length > 0 ? <>
                                    {artworks?.map((item, index) => {
                                        return (
                                            <div className="frame">
                                                <div className="img">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="details">
                                                    <h3 style={{ marginBottom: '10px' }}>Title: {item.title}</h3>
                                                    <p style={{ marginBottom: '10px' }}>Description: {item.description}</p>
                                                    <p style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>Category: {item.category.name} <span>Price: {item.price}</span></p>
                                                    <p>{item.approved ? "Approved" : "Not Approved"}</p>
                                                    <button onClick={() => deleteFrame(item._id)}>Delete</button>
                                                    <button onClick={() => navigate(`/artwork/upload/${item._id}`)}>
                                                        edit
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </> : <h2>No ArtWorks Found!</h2>
                            }
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default ArtworksPage;
