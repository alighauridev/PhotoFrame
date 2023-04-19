import express from "express";
import expressAsyncHandler from "express-async-handler";
import Inquiry from "../modals/inquiryModel.js";


const inquiryRoutes = express.Router();
inquiryRoutes.get(
    "/",
    expressAsyncHandler(async (req, res) => {
        const { name, email, message } = req.body;

        const inquiry = new Inquiry({
            name,
            email,
            message,
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
        const { name, email, message } = req.body;

        const inquiry = new Inquiry({
            name,
            email,
            message,
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
            const inquiries = await Inquiry.find({});
            res.json(inquiries);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        }
    })
);
export default inquiryRoutes;
