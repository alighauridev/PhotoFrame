import express from "express";
import expressAsyncHandler from "express-async-handler";
import Inquiry from "../modals/inquiryModel.js";
import FrameImage from "../modals/frameModel.js";

const inquiryRoutes = express.Router();
inquiryRoutes.get(
    "/",
    expressAsyncHandler(async (req, res) => {
        const { name, email, message, frame } = req.body;

        const inquiry = new Inquiry({
            name,
            email,
            message,
            frame,
        });

        inquiry
            .save()
            .then(() => {
                res.json({ message: "Inquiry submitted successfully" });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({ error: "Internal server error" });
            });
    })
);
inquiryRoutes.post(
    "/",
    expressAsyncHandler(async (req, res) => {
        const { name, email, message, frame, user } = req.body;

        const inquiry = new Inquiry({
            name,
            email,
            message,
            frame,
            user,
        });

        inquiry
            .save()
            .then(() => {
                res.json({ message: "Inquiry submitted successfully" });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({ error: "Internal server error" });
            });
    })
);
inquiryRoutes.get(
    "/all",
    expressAsyncHandler(async (req, res) => {
        try {
            const inquiries = await Inquiry.find({}).populate("frame user");
            res.json(inquiries);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        }
    })
);
inquiryRoutes.get(
    "/frameImage/:id/inquiries",
    expressAsyncHandler(async (req, res) => {
        try {
            const { userId } = req.params;

            // Find all the FrameImages created by the user
            const frameImages = await FrameImage.find({ user: userId });

            // Find all the inquiries related to the user's FrameImages
            const inquiries = await Inquiry.find({
                frame: { $in: frameImages.map((f) => f._id) },
            })
                .populate("user")
                .populate("frame");

            res.status(200).json(inquiries);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    })
);

export default inquiryRoutes;
