import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../modals/productModal.js";
import { admin, protect } from "../middlewares/authMiddleware.js";
import FrameImage from "../modals/frameModel.js";
const frameRoutes = express.Router();
// GET all products with sort and pagination
frameRoutes.get(
    "/",
    asyncHandler(async (req, res) => {
        const pageSize = 8;
        const page = Number(req.query.pageNumber) || 1;

        const count = await FrameImage.find({ Category });
        const frames = await FrameImage.find({})
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: -1 });
        res.json({ frames, page, pages: Math.ceil(count / pageSize) });
    })
);

// GET all products
frameRoutes.get(
    "/all",

    asyncHandler(async (req, res) => {
        const products = await FrameImage.find({}).sort({ _id: -1 });

        res.json(products);
    })
);

// GET single Product
frameRoutes.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const frame = await FrameImage.findById(req.params.id);
        if (frame) {
            res.json(frame);
        } else {
            res.status(404);
            throw new Error("Product Not Found!");
        }
    })
);

// DELETE single Product
frameRoutes.delete(
    "/:id",

    admin,
    asyncHandler(async (req, res) => {
        const frame = await FrameImage.findById(req.params.id);
        if (frame) {
            await frame.remove();
            res.json({ message: "Frame Removed" });
        } else {
            res.status(404);
            throw new Error("Frame Not Found");
        }
    })
);
// EDIT single Product
frameRoutes.put(
    "/:id",
    admin,
    asyncHandler(async (req, res) => {
        const { title, description, image, type } = req.body;
        const frame = await FrameImage.findById(req.params.id);

        if (frame) {
            frame.title = title || frame.title;
            frame.description = description || frame.description;
            frame.image = image || frame.image;
            frame.type = type || frame.type;
            const updatedFrame = await FrameImage.save();
            res.json(updatedFrame);
        } else {
            res.status(404);
            throw new Error("Note Not Found");
        }
    })
);

// Create single Product
frameRoutes.post(
    "/create",
    admin,
    asyncHandler(async (req, res) => {
        const { title, description, image, type } = req.body;
        const exist = await FrameImage.findOne({ title });
        if (exist) {
            res.status(400);
            throw new Error("Product Name Already Exist!");
        } else {
            const frame = new FrameImage({
                title,
                description,
                image,
                type
            });
            if (frame) {
                const createFrame = await FrameImage.save();
                res.status(201).json(createFrame);
            } else {
                res.status(400);
                throw new Error("Invalid Data!");
            }
        }
    })
);

;

export default frameRoutes;
