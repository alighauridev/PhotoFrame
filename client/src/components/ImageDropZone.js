import { useState, useEffect } from "react";

import { useDropzone } from "react-dropzone";
import React from "react";
import axios from "axios";
import "../scss/frame.scss";
import FrameImage from "./FrameImage";
import rodTwo from "../assests/weathered-grey-face.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ImageDropZone({ framePiece }) {
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(null);
    const [corner, setcorner] = useState(null);
    const [frames, setframes] = useState([]);
    const [rod, setRod] = useState(rodTwo);
    const navigate = useNavigate();
    const token = useSelector((state) => state.UserLogin.userInfo) || {};
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",

        onDrop: (acceptedFiles) => {
            setImage(URL.createObjectURL(acceptedFiles[0]));
        },
    });



    return (
        <>
            <section className="frame">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gridGap: "3rem",
                        marginBottom: "50px",
                    }}
                >
                    <div
                        style={{
                            height: "50vh",
                            display: "grid",
                            alignItems: "center",
                        }}
                    >
                        {
                            token.token ? <div
                                {...getRootProps()}
                                className="dropzone"
                            >
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p>Drop the image here...</p>
                                ) : (
                                    <p>Drag your photo to frame now!</p>
                                )}
                            </div> : <div
                                onClick={() => navigate("/login")}

                                className="dropzone"
                            >
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p>Drop the image here...</p>
                                ) : (
                                    <p>Drag your photo to frame now!</p>
                                )}
                            </div>
                        }
                    </div>
                    {
                        framePiece.patch ? <FrameImage mainImageUrl={image} rod={framePiece} /> : <div className="full__image" style={{
                            backgroundImage: `url(${framePiece.image})`,

                            padding: '5%',
                            backgroundRepeat: 'no-repeat',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundPosition: 'center',
                            backgroundSize: '100%'
                        }}>
                            <img src={image} alt="" />
                        </div>
                    }
                </div>
            </section >
        </>
    );
}

export default ImageDropZone;
