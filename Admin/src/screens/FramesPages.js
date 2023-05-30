import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../api/axiosa";
import { Link, useNavigate } from "react-router-dom";
import "../scss/frames.scss";
import Navigation from "../pages/Navigation";
const FramesPages = () => {
    const UserLogin = useSelector((state) => state.UserLogin);
    const [frames, setframes] = useState([]);
    const { userInfo } = UserLogin;
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const getFrames = async () => {
        setloading(true);

        try {
            const { data } = await axios.get(`/api/frame/all/${userInfo._id}`);

            setframes(data.frames);
            setloading(false);
        } catch (error) {
            setloading(false);
            console.error("Error uploading frame:", error);
        }
    };
    const deleteFrame = async (id) => {

        try {
            await axios.delete(`/api/frame/user/${id}`);
            alert("Frame deleted");
            getFrames();
        } catch (error) {
            console.error("Error deleting frame:", error);
        }
    };
    useEffect(() => {
        getFrames();
    }, []);
    return (
        <>
            <Navigation />
            <div className="admin__panel">
                <h1>Frames</h1>
                <ul>
                    <li>
                        {" "}
                        <Link to={"/frame/upload"}>Upload Frame</Link>
                    </li>

                    <li>
                        {" "}
                        <Link to={"/frame-inquiries"}>Inquiries</Link>
                    </li>
                </ul>
                {!loading ? (
                    <div className="frames">
                        {
                            frames.length > 0 ? <>{frames?.map((item, index) => {
                                return (
                                    <div className="frame">
                                        <div className="img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="details">
                                            <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
                                            <p style={{ marginBottom: '10px' }}>{item.description}</p>
                                            <button onClick={() => deleteFrame(item._id)}>
                                                Delete
                                            </button>
                                            <button
                                                onClick={() => navigate(`/frame/upload/${item._id}`)}
                                            >
                                                edit
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}</> : <p><h2>No Frames Found</h2></p>
                        }
                    </div>
                ) : (
                    <p>loading.....</p>
                )}
            </div>
        </>
    );
};

export default FramesPages;
