import express from "express";
import asyncHandler from "express-async-handler";
import { admin, protect } from "../middlewares/authMiddleware.js";
import FrameImage from "../modals/frameModel.js";
import Category from "../modals/categoryModel.js";
import Artist from "../modals/artistModel.js";
const frameRoutes = express.Router();

// GET all frame images with sort and pagination for users
// GET all approved frame images with sort and pagination for users
frameRoutes.get(
    "/",
    asyncHandler(async (req, res) => {
        const pageSize = 9;
        const page = Number(req.query.pageNumber) || 1;
        const keyword = { approved: true }; // Only fetch approved frames

        if (req.query.category) {
            const categories = await Category.find({
                name: { $in: req.query.category.split(",") },
            });
            keyword.category = { $in: categories.map((category) => category._id) };
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
            .populate("category")
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: -1 });

        // Get all colors used in the frames
        const colors = await FrameImage.distinct("color");

        res.json({
            frames,
            page,
            pages: Math.ceil(count / pageSize),
            colors,
        });
    })
);

// GET all frames of users
frameRoutes.get(
    "/all/:id",
    asyncHandler(async (req, res) => {
        const frames = await FrameImage.find({ user: req.params.id });

        res.json({
            frames,
        });
    })
);

// Get all unapproved frames for admin
frameRoutes.get(
    "/admin/unapproved",
    admin,
    asyncHandler(async (req, res) => {
        const unapprovedFrames = await FrameImage.find({ approved: false });
        res.json(unapprovedFrames);
    })
);

// GET single frame
frameRoutes.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const frame = await FrameImage.findById(req.params.id)
            .populate("user")
            .populate("category");
        if (frame) {
            res.json(frame);
        } else {
            res.status(404);
            throw new Error("Frame Not Found!");
        }
    })
);

// DELETE single frame user
frameRoutes.delete(
    "/:id",
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

// EDIT single frame
frameRoutes.put(
    "/:id",

    asyncHandler(async (req, res) => {
        const {
            title,
            description,
            image,
            price,
            multiLayer,
            color,
            category,
            user,
        } = req.body;
        const updatedFrame = await FrameImage.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                image,
                price,
                multiLayer,
                color,
                category,
                user,
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

// Create single frame --Admin
frameRoutes.post(
    "/admin/create",

    asyncHandler(async (req, res) => {
        const {
            title,
            description,
            price,
            image,
            multiLayer,
            color,
            category,
            user,
        } = req.body;
        const exist = await FrameImage.findOne({ title });
        if (exist) {
            res.status(400);
            throw new Error("Frame Name Already Exist!");
        } else {
            const frame = new FrameImage({
                title,
                description,
                image,
                price,
                multiLayer,
                color,
                category,
                user,
                approved: "true",
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
// Approve single frame --Admin
frameRoutes.put(
    "/admin/approve/:id",

    asyncHandler(async (req, res) => {
        const frame = await FrameImage.findById(req.params.id);

        if (frame) {
            frame.approved = true;
            const approvedFrame = await frame.save();

            res.json(approvedFrame);
        } else {
            res.status(404);
            throw new Error("Frame Not Found");
        }
    })
);

// DELETE single frame --Admin
frameRoutes.delete(
    "/:id",
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

// DELETE single frame for artist
frameRoutes.delete(
    "/artist/:id",

    asyncHandler(async (req, res) => {
        const frame = await FrameImage.findById(req.params.id);
        if (frame) {
            // Remove frame from artist's frames array
            const artist = await Artist.findOneAndUpdate(
                { user: req.user._id },
                { $pull: { frames: frame._id } }
            );
            if (artist) {
                await frame.remove();
                res.json({ message: "Frame Removed" });
            } else {
                res.status(404);
                throw new Error("Artist Not Found");
            }
        } else {
            res.status(404);
            throw new Error("Frame Not Found");
        }
    })
);

// EDIT single frame for artist
frameRoutes.put(
    "/artist/:id",
    asyncHandler(async (req, res) => {
        const { title, description, image, price, multiLayer, color, category } =
            req.body;
        const updatedFrame = await FrameImage.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                image,
                price,
                multiLayer,
                color,
                category,
            },
            { new: true }
        );

        if (updatedFrame) {
            res.json(updatedFrame);
        } else {
            res.status(404);
            throw new Error("Frame Not Found");
        }
    })
);

// Create single frame for artist
frameRoutes.post(
    "/artist/create",
    asyncHandler(async (req, res) => {
        const { title, description, price, image, multiLayer, color, category } =
            req.body;
        const exist = await FrameImage.findOne({ title });
        if (exist) {
            res.status(400);
            throw new Error("Frame Name Already Exists!");
        } else {
            const frame = new FrameImage({
                title,
                description,
                image,
                price,
                multiLayer,
                color,
                category,
            });
            if (frame) {
                const createFrame = await frame.save();

                // Add frame to artist's frames array
                const artist = await Artist.findOneAndUpdate(
                    { user: req.user._id },
                    { $push: { frames: createFrame._id } },
                    { new: true }
                );

                if (artist) {
                    res.status(201).json(createFrame);
                } else {
                    res.status(404);
                    throw new Error("Artist Not Found");
                }
            } else {
                res.status(400);
                throw new Error("Invalid Data!");
            }
        }
    })
);

export default frameRoutes;
