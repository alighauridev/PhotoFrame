import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Frame = () => {
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ aspect: 1 / 1, rotation: 0 });

    const handleCrop = async () => {
        const croppedImage = await getCroppedImage(image, crop);
        const rotatedImage = await rotateImage(croppedImage, 90);
        // send rotatedImage to frame image
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const getCroppedImage = (image, crop) => {
        return new Promise((resolve, reject) => {
            const imageObject = new Image();
            imageObject.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = crop.width;
                canvas.height = crop.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(
                    imageObject,
                    crop.x,
                    crop.y,
                    crop.width,
                    crop.height,
                    0,
                    0,
                    crop.width,
                    crop.height
                );
                canvas.toBlob((blob) => {
                    resolve(blob);
                }, 'image/jpeg');
            };
            imageObject.onerror = reject;
            if (image) {
                imageObject.src = URL.createObjectURL(image);
            } else {
                reject(new Error('No image file provided'));
            }
        });
    };

    const rotateImage = (image, degrees) => {
        return new Promise((resolve, reject) => {

            if (image) {
                const imageObject = new Image();
                imageObject.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = imageObject.height;
                    canvas.height = imageObject.width;
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    ctx.rotate((degrees * Math.PI) / 180);
                    ctx.drawImage(
                        imageObject,
                        -imageObject.width / 2,
                        -imageObject.height / 2
                    );
                    canvas.toBlob((blob) => {
                        resolve(blob);
                    }, 'image/jpeg');
                    URL.revokeObjectURL(imageObject.src); // revoke the object URL
                };
                imageObject.onerror = reject;
                imageObject.src = URL.createObjectURL(image);
            } else {
                reject(new Error('No image file provided'));
            }
        });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {image && (
                <ReactCrop
                    src={URL.createObjectURL(image)}
                    crop={crop}
                    onChange={(crop) => setCrop(crop)}
                />
            )}
            <button onClick={handleCrop}>Crop and Rotate</button>
        </div>
    );
};

export default Frame;
