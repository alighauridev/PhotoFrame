import React, { useState, useEffect } from "react";
import rodTwo from "../assests/weathered-grey-face.jpg";
import corner from "../assests/corner1.jpg";
import rodTwoY from "../assests/weathered-grey-face.jpg";
import Corners from "./Corners";
import Rods from "./Rods";
const FrameImage = ({ mainImageUrl, rod }) => {
    const [originalImage, setOriginalImage] = useState(null);
    const [rotatedImages, setRotatedImages] = useState({
        angle90: null,
        angle180: null,
        angle270: null,
        angle360: null,
    });
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await fetch(rod.image);
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onloadend = () => {
                    setOriginalImage(reader.result);
                };
                reader.readAsDataURL(blob);
            } catch (error) {
                console.error(error);
            }
        }

        fetchImage();
    }, [rod]);
    useEffect(() => {
        if (originalImage) {
            const img = new Image();
            img.onload = () => {
                const canvas90 = document.createElement("canvas");
                const ctx90 = canvas90.getContext("2d");

                const canvas180 = document.createElement("canvas");
                const ctx180 = canvas180.getContext("2d");

                const canvas270 = document.createElement("canvas");
                const ctx270 = canvas270.getContext("2d");

                const canvas360 = document.createElement("canvas");
                const ctx360 = canvas360.getContext("2d");

                canvas90.width =
                    canvas180.width =
                    canvas270.width =
                    canvas360.width =
                    img.height;
                canvas90.height =
                    canvas180.height =
                    canvas270.height =
                    canvas360.height =
                    img.width;

                ctx90.translate(canvas90.width / 2, canvas90.height / 2);
                ctx90.rotate((90 * Math.PI) / 180);
                ctx90.drawImage(img, -img.width / 2, -img.height / 2);

                ctx180.translate(canvas180.width / 2, canvas180.height / 2);
                ctx180.rotate((180 * Math.PI) / 180);
                ctx180.drawImage(img, -img.width / 2, -img.height / 2);

                ctx270.translate(canvas270.width / 2, canvas270.height / 2);
                ctx270.rotate((270 * Math.PI) / 180);
                ctx270.drawImage(img, -img.width / 2, -img.height / 2);

                ctx360.translate(canvas360.width / 2, canvas360.height / 2);
                ctx360.rotate((360 * Math.PI) / 180);
                ctx360.drawImage(img, -img.width / 2, -img.height / 2);

                const rotatedImagesState = {
                    angle90: canvas90.toDataURL(),
                    angle180: canvas180.toDataURL(),
                    angle270: canvas270.toDataURL(),
                    angle360: canvas360.toDataURL(),
                };

                setRotatedImages(rotatedImagesState);
            };

            img.src = originalImage;
        }
        console.log(rotatedImages);
    }, [originalImage]);
    return (
        mainImageUrl && (
            <>

                {
                    rod.multiLayer ? <>

                        <div className="grid__">
                            <div className={`frame__box ${rod.multiLayer ? "pad-60" : "pad-60"}`}>
                                <figure
                                    className="img__box"
                                    style={{
                                        boxShadow: 'none',
                                        border: '0',
                                        padding: '0'
                                    }}
                                >
                                    <img
                                        src={mainImageUrl}
                                        className="w-100"
                                    />
                                </figure>
                                <Rods rotatedImages={rotatedImages} rod={rod} />
                                <Corners corner={rod.image} />
                            </div>
                            <div className={`frame__box ${rod.multiLayer ? "pad-60" : "pad-60"}`}>
                                <figure
                                    className="img__box"
                                >
                                    <img
                                        src={mainImageUrl}
                                        className="w-100"
                                    />
                                </figure>
                                <Rods rotatedImages={rotatedImages} rod={rod} />
                                <Corners corner={rod.image} />
                            </div>
                            <div className={`frame__box ${rod.multiLayer ? "pad-60" : "pad-60"}`}>
                                <figure className="img__box">
                                    <figure className="img__box">
                                        <img
                                            src={mainImageUrl}
                                            className="w-100"

                                        />
                                    </figure>
                                </figure>
                                <Rods rotatedImages={rotatedImages} rod={rod} />
                                <Corners corner={rod.image} />
                            </div>
                        </div>
                    </> : <>
                        <div className={`frame__box ${rod.multiLayer ? "pad-60" : "pad-60"}`}>
                            <figure
                                className="img__box"
                                style={{
                                    boxShadow: 'none',
                                    border: '0',
                                    padding: '0'
                                }}
                            >
                                <img
                                    src={mainImageUrl}
                                    className="w-100"
                                />
                            </figure>
                            <Rods rotatedImages={rotatedImages} rod={rod} />
                            <Corners corner={rod.image} />
                        </div>
                    </>
                }
            </>
        )
    );
};

export default FrameImage;
