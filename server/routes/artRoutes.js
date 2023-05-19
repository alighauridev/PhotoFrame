import express from "express";

import {
    approveArtwork,
    categorizeArtwork,
    createArtwork,
    deleteArtwork,
    getAllApprovedArtworksForUser,
    getAllArtworkByArtist,
    getAllUnapprovedArtworks,
    updateArtwork,
} from "../controllers/artworkController.js";
import { admin } from "../middlewares/authMiddleware.js";
const router = express.Router();

// Create artwork
router.post("/artwork", createArtwork);

// Update artwork
router.put("/artwork/:id", updateArtwork);

// Delete artwork
router.delete("/artwork/:id", deleteArtwork);
router.delete("/artwork/artist/:id", getAllArtworkByArtist);

// Get all artwork
router.get("/artwork", getAllApprovedArtworksForUser);
router.get("/artwork", getAllUnapprovedArtworks);

// Categorize artwork
router.put("/artwork/:id/categorize", categorizeArtwork);

// Approve artwork
router.put("/artwork/admin/:id/approve", admin, approveArtwork);

export default router;
