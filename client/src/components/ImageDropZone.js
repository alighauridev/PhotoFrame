import { useState, useEffect } from "react";


import { useDropzone } from "react-dropzone";
import React from "react";
import axios from "axios";
import "../scss/frame.scss"
import FrameImage from "./FrameImage";
import rodTwo from "../assests/weathered-grey-face.jpg";

function ImageDropZone() {
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(null);
    const [corner, setcorner] = useState(null)
    const [frames, setframes] = useState([])
    const [rod, setRod] = useState(rodTwo);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setImage(URL.createObjectURL(acceptedFiles[0]));
        },
    });
    const getFrames = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/frame/all");
            setframes(data);
        } catch (error) {
            console.error("Error uploading frame:", error);
        }
    };
    useEffect(() => {
        getFrames()
    }, [])

    return (
        <>
            <section className="frame">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gridGap: "3rem",
                        marginBottom: '50px'
                    }}
                >
                    <div className="frames">
                        <h4>Select Frame</h4>
                        <div className="frames" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px', justifyContent: 'center' }}>
                            {frames?.map((item, index) => {
                                return (
                                    <div className="frame">
                                        <div className="img">
                                            <img onClick={() => {
                                                setRod(item.image);
                                                setcorner(item.corner)
                                            }} style={{ width: '40px', cursor: 'pointer' }} src={item.image} alt="" />
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div {...getRootProps()} className="dropzone">
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p>Drop the image here...</p>
                            ) : (
                                <p>Drag 'n' drop an image here, or click to select an image</p>
                            )}
                        </div>
                        {/* {image && (
          <img
            style={{ width: "100%" }}
            src={image}
            alt="uploaded"
            className="uploaded-image"
          />
        )} */}
                    </div>
                    <FrameImage mainImageUrl={image} rod={rod} corner={corner} />
                </div>
            </section>
        </>
    );
}

export default ImageDropZone;
