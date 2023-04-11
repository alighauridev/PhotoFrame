import mongoose from "mongoose";

const frameImageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    corner: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'Classic'
    },
    material: {
        type: String,
        default: 'Wooden'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const FrameImage = mongoose.model("FrameImage", frameImageSchema);

export default FrameImage;
