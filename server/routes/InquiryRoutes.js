import express from "express";
import asyncHandler from "express-async-handler";
import Inquiry from "../modals/inquiryModel.js";
import FrameImage from "../modals/frameModel.js";

const inquiryRoutes = express.Router();

// GET User Inquiries
inquiryRoutes.get(
    "/user/:userId",
    asyncHandler(async (req, res) => {
        const inquiries = await Inquiry.find({ user: req.params.userId }).populate(
            "frame artwork"
        );
        res.json(inquiries);
    })
);

// GET Artist Inquiries
inquiryRoutes.get(
    "/artist/:artistId",
    asyncHandler(async (req, res) => {
        const inquiries = await Inquiry.find({
            artist: req.params.artistId,
        }).populate("frame artwork");
        res.json(inquiries);
    })
);

inquiryRoutes.post(
    "/frame",
    asyncHandler(async (req, res) => {
        const { name, email, message, frame, user } = req.body;

        const inquiry = new Inquiry({
            name,
            email,
            message,
            frame,
            user,
            artist,
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
    "/artwork",
    asyncHandler(async (req, res) => {
        const { name, email, message, artwork, user } = req.body;

        const inquiry = new Inquiry({
            name,
            email,
            message,
            artwork,
            user,
            artist,
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

export default inquiryRoutes;
