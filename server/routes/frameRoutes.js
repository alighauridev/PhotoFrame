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
        const pageSize = 9;
        const page = Number(req.query.pageNumber) || 1;
        const keyword = {};
        if (req.query.type) {
            keyword.type = { $in: req.query.type.split(",") };
        }
        if (req.query.material) {
            keyword.material = { $in: req.query.material.split(",") };
        }
        if (req.query.color) {
            keyword.color = req.query.color;
        }
        if (req.query.keyword) {
            keyword.title = {
                $regex: req.query.keyword,
                $options: "i",
            };
        }
        const count = await FrameImage.countDocuments(keyword);
        const frames = await FrameImage.find(keyword)
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: -1 });

        // Get all materials and types used in the frames
        const materials = await FrameImage.distinct("material");
        const types = await FrameImage.distinct("type");
        const colors = await FrameImage.distinct("color");

        res.json({
            frames,
            page,
            pages: Math.ceil(count / pageSize),
            materials,
            types,
            colors,
        });
    })
);
frameRoutes.get(
    "/filters",
    asyncHandler(async (req, res) => {
        // Get all materials and types used in the frames
        const materials = await FrameImage.distinct("material");
        const types = await FrameImage.distinct("type");
        const colors = await FrameImage.distinct("color");

        res.json({ materials, types, colors });
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
frameRoutes.get(
    "/filters",
    asyncHandler(async (req, res) => {
        const materials = await FrameImage.distinct("material");
        const types = await FrameImage.distinct("type");
        const colors = await FrameImage.distinct("color");

        res.json({ materials, types, colors });
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

    // admin,
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
    asyncHandler(async (req, res) => {
        const {
            title,
            description,
            image,
            type,
            price,
            multiLayer,
            material,
            color,
        } = req.body;
        const updatedFrame = await FrameImage.findByIdAndUpdate(
            req.params.id,
            {
                title: title,
                description: description,
                image: image,
                type: type,
                price: price,
                multiLayer: multiLayer,
                material: material,
                color: color,
            },
            { new: true }
        );

        if (updatedFrame) {
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
    // admin,
    asyncHandler(async (req, res) => {
        const {
            title,
            description,
            price,
            image,
            type,
            material,
            multiLayer,
            color,
        } = req.body;
        const exist = await FrameImage.findOne({ title });
        if (exist) {
            res.status(400);
            throw new Error("Product Name Already Exist!");
        } else {
            const frame = new FrameImage({
                title,
                description,
                image,
                type,
                material,
                price,
                multiLayer,
                color,
            });
            if (frame) {
                const createFrame = await frame.save();
                res.status(201).json(createFrame);
            } else {
                res.status(400);
                throw new Error("Invalid Data!");
            }
        }
    })
);

export default frameRoutes;
