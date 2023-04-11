import React, { useState, useEffect } from 'react'
import rodTwo from "../assests/weathered-grey-face.jpg";
import corner from "../assests/corner1.jpg";
import rodTwoY from "../assests/weathered-grey-face.jpg";
const FrameImage = ({ mainImageUrl, rod, corner }) => {

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
                    margin: '20px auto 50px'
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

                    style={{
                        position: "absolute",
                        top: "0px",
                        left: "0",
                        backgroundImage: `url(${rod})`,
                        backgroundSize: "contain",
                        height: "30px",
                        width: "100%",
                        backgroundRepeat: "repeat",
                    }}
                ></div>

                {/* Bottom rod */}
                <div

                    style={{
                        position: "absolute",
                        bottom: "0px",
                        left: "0",
                        backgroundImage: `url(${rod})`,
                        backgroundSize: "contain",
                        height: "30px",
                        width: "100%",
                        backgroundRepeat: "repeat",
                    }}
                ></div>

                {/* Left rod */}
                <div

                    style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "0px",
                        backgroundImage: `url(${rod})`,
                        backgroundSize: "contain",
                        height: "calc(100% - 60px)",
                        width: "30px",
                        backgroundRepeat: "round",
                    }}
                ></div>

                {/* Right rod */}
                <div

                    style={{
                        position: "absolute",
                        bottom: "30px",
                        right: "0px",
                        backgroundImage: `url(${rod})`,
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
                        backgroundImage: `url(${corner})`,
                    }}
                >
                    <span className="first"></span>
                    <span className="bottom"></span>
                </div>

                {/* Top-right corner */}
                <div
                    className="rod-corner top-right-corner"
                    style={{
                        backgroundImage: `url(${corner})`,
                    }}
                >
                    <span className="first"></span>
                    <span className="bottom"></span>
                </div>

                {/* Bottom-left corner */}
                <div
                    className="rod-corner bottom-left-corner"
                    style={{
                        backgroundImage: `url(${corner})`,
                    }}
                >
                    <span className="first"></span>
                    <span className="bottom"></span>
                </div>

                {/* Bottom-right corner */}
                <div
                    className="rod-corner bottom-right-corner"
                    style={{
                        backgroundImage: `url(${corner})`,
                    }}
                >
                    <span className="first"></span>
                    <span className="bottom"></span>
                </div>

            </div>
        )
    );
};

export default FrameImage
