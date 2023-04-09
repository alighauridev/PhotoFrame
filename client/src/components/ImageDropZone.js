import { useState } from "react";

import rod from "../assests/pngwing.com.png";
import rodTwo from "../assests/weathered-grey-face.jpg";
import rodTwoY from "../assests/weathered-grey-face.jpg";
import { useDropzone } from "react-dropzone";
import React from "react";
import "../scss/frame.scss"
const FrameImage = ({ mainImageUrl, rodImageUrl }) => {
    return (
        mainImageUrl && (
            <div
                style={{
                    position: "relative",
                    overflow: "unset",
                    minHeight: "350px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxHeight: "580px",
                    width: "fit-content",
                }}
                className="frame__box"
            >
                <img
                    src={mainImageUrl}
                    style={{
                        width: "calc(100%)",
                        objectFit: "contain",
                        height: "calc(100% - 60px)",
                    }}
                    alt="Main image"
                />

                {/* Top rod */}
                <div
                    src={rodTwo}
                    alt="Rod image"
                    style={{
                        position: "absolute",
                        top: "0px",
                        left: "0",
                        backgroundImage: `url(${rodTwo})`,
                        backgroundSize: "contain",
                        height: "30px",
                        width: "100%",
                        backgroundRepeat: "repeat",
                    }}
                ></div>

                {/* Bottom rod */}
                <div
                    src={rodTwo}
                    alt="Rod image"
                    style={{
                        position: "absolute",
                        bottom: "0px",
                        left: "0",
                        backgroundImage: `url(${rodTwo})`,
                        backgroundSize: "contain",
                        height: "30px",
                        width: "100%",
                        backgroundRepeat: "repeat",
                    }}
                ></div>

                {/* Left rod */}
                <div
                    src={rodImageUrl}
                    alt="Rod image"
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "0px",
                        backgroundImage: `url(${rodTwoY})`,
                        backgroundSize: "contain",
                        height: "calc(100% - 60px)",
                        width: "30px",
                        backgroundRepeat: "round",
                    }}
                ></div>

                {/* Right rod */}
                <div
                    src={rodTwo}
                    alt="Rod image"
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        right: "0px",
                        backgroundImage: `url(${rodTwoY})`,
                        backgroundSize: "contain",
                        height: "calc(100% - 60px)",
                        width: "30px",
                        backgroundRepeat: "round",
                    }}
                ></div>
                {/* Top-left corner */}
                <div
                    className="rod-corner top-left-corner"
                    style={{
                        backgroundImage: `url(${rodTwo})`,
                    }}
                >
                    <span className="first"></span>
                    <span className="bottom"></span>
                </div>

                {/* Top-right corner */}
                <div
                    className="rod-corner top-right-corner"
                    style={{
                        backgroundImage: `url(${rodTwo})`,
                    }}
                >
                    <span className="first"></span>
                    <span className="bottom"></span>
                </div>

                {/* Bottom-left corner */}
                <div
                    className="rod-corner bottom-left-corner"
                    style={{
                        backgroundImage: `url(${rodTwo})`,
                    }}
                >
                    <span className="first"></span>
                    <span className="bottom"></span>
                </div>

                {/* Bottom-right corner */}
                <div
                    className="rod-corner bottom-right-corner"
                    style={{
                        backgroundImage: `url(${rodTwo})`,
                    }}
                >
                    <span className="first"></span>
                    <span className="bottom"></span>
                </div>

            </div>
        )
    );
};

function ImageDropZone() {
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(null);
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
                    }}
                >
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
                    <FrameImage mainImageUrl={image} rodImageUrl={rod} />
                </div>
            </section>
        </>
    );
}

export default ImageDropZone;
