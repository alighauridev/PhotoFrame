import React, { useState, useEffect } from 'react';
import Cropper from 'react-easy-crop';

const ImageCropper = () => {
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
                const response = await fetch('https://res.cloudinary.com/dipcjbjho/image/upload/v1681215530/xcsw6mcg7fhaeybqcrw2.png');
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
    }, []);



    return (
        <div>
            {rotatedImages.angle90 && (
                <div>
                    <img src={rotatedImages.angle90} alt="Rotated Image 90" />
                </div>
            )}
            {rotatedImages.angle180 && (
                <div>
                    <img src={rotatedImages.angle180} alt="Rotated Image 180" />
                </div>
            )}
            {rotatedImages.angle270 && (
                <div>
                    <img src={rotatedImages.angle270} alt="Rotated Image 270" />
                </div>
            )}
            {rotatedImages.angle360 && (
                <div>
                    <img src={rotatedImages.angle360} alt="Rotated Image 360" />
                </div>
            )}
            {originalImage && (
                <Cropper
                    image={originalImage}
                    crop={crop}
                    zoom={zoom}
                    aspect={1 / 1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                />
            )}
        </div>
    );
};

export default ImageCropper;
