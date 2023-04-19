import mongoose from "mongoose"
const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    frame: {
        type: String,
        ref: 'FrameImage'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry
