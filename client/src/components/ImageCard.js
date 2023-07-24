import React, { useState, useEffect } from "react";
import rodTwo from "../assests/weathered-grey-face.jpg";
import corner from "../assests/corner1.jpg";
import rodTwoY from "../assests/weathered-grey-face.jpg";
import Corners from "./Corners";
import Rods from "./Rods";
const ImageCard = ({ rod }) => {
    const [originalImage, setOriginalImage] = useState(null);
    const [rotatedImages, setRotatedImages] = useState({
        angle90: null,
        angle180: null,
        angle270: null,
        angle360: null,
    });
    const [crop, setCrop] = useState({ x: 0, y: 0 });

    const [fetchError, setFetchError] = useState(false);
    const [zoom, setZoom] = useState(1);
    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await fetch(rod.image);
                if (!response.ok) {
                    throw new Error("Failed to fetch image.");
                }
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onloadend = () => {
                    setOriginalImage(reader.result);
                };
                reader.readAsDataURL(blob);
            } catch (error) {
                console.error(error);
                setFetchError(true);
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

                const canvas270 = document.createElement("canvas");
                const ctx270 = canvas270.getContext("2d");

                canvas90.width = canvas270.width = img.height;
                canvas90.height = canvas270.height = img.width;

                ctx90.translate(canvas90.width / 2, canvas90.height / 2);
                ctx90.rotate((90 * Math.PI) / 180);
                ctx90.drawImage(img, -img.width / 2, -img.height / 2);

                ctx270.translate(canvas270.width / 2, canvas270.height / 2);
                ctx270.rotate((270 * Math.PI) / 180);
                ctx270.drawImage(img, -img.width / 2, -img.height / 2);

                const rotatedImagesState = {
                    angle90: canvas90.toDataURL(),
                    angle180: null, // You can add the code for angle180 and angle360 if needed
                    angle270: canvas270.toDataURL(),
                    angle360: null,
                };

                setRotatedImages(rotatedImagesState);
            };

            img.src = originalImage;
        }
    }, [originalImage]);

    // Check if all rotated images are loaded before rendering the component
    useEffect(() => {
        if (
            rotatedImages.angle90 &&
            rotatedImages.angle180 &&
            rotatedImages.angle270 &&
            rotatedImages.angle360
        ) {
            // All rotated images are loaded, you can render the component here
        }
    }, [rotatedImages]);

    return (
        <div className={`frame__box__two ${rod.multiLayer ? "pad-60" : "pad-60"}`}>
            <figure
                className="img__box"
                style={{
                    boxShadow: 'none',
                    border: '0',
                    padding: '0'
                }}
            >

            </figure>
            <Rods rotatedImages={rotatedImages} rod={rod} />
            <Corners corner={rod.image} />
        </div>
    );
};

export default ImageCard;
