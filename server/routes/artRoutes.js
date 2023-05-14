import express from "express";

import {
    approveArtwork,
    categorizeArtwork,
    createArtwork,
    deleteArtwork,
    getAllApprovedArtworksForUser,
    getAllUnapprovedArtworks,
    updateArtwork,
} from "../controllers/artworkController.js";
const router = express.Router();

// Create artwork
router.post("/artwork", createArtwork);

// Update artwork
router.put("/artwork/:id", updateArtwork);

// Delete artwork
router.delete("/artwork/:id", deleteArtwork);

// Get all artwork
router.get("/artwork", getAllApprovedArtworksForUser);
router.get("/artwork", getAllUnapprovedArtworks);

// Categorize artwork
router.put("/artwork/:id/categorize", categorizeArtwork);

// Approve artwork
router.put("/artwork/:id/approve", approveArtwork);

export default router;
