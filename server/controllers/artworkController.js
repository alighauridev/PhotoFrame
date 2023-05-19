import Artwork from "../modals/artworkModel.js";
import Artist from "../modals/artistModel.js";

// Upload artwork
export const createArtwork = async (req, res) => {
    try {
        const { artist, image, title, description, price, type, category } =
            req.body;

        // Create new artwork document
        const newArtwork = new Artwork({
            artist,
            image,
            title,
            description,
            price,
            type,
            category,
        });

        // Save artwork document
        const savedArtwork = await newArtwork.save();

        // Update artist's artworks array
        const artistToUpdate = await Artist.findOneAndUpdate(
            { user: artist },
            { $push: { artworks: savedArtwork._id } },
            { new: true }
        );

        res.status(201).json(savedArtwork);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Edit artwork
export const updateArtwork = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, title, description, price, type, material } = req.body;

        // Find artwork document and update fields
        const updatedArtwork = await Artwork.findByIdAndUpdate(
            id,
            { image, title, description, price, material },
            { new: true }
        );

        if (!updatedArtwork) {
            return res.status(404).json({ message: "Artwork not found" });
        }

        res.status(200).json(updatedArtwork);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Delete artwork
export const deleteArtwork = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete artwork document
        const deletedArtwork = await Artwork.findByIdAndDelete(id);

        if (!deletedArtwork) {
            return res.status(404).json({ message: "Artwork not found" });
        }

        res.status(200).json(deletedArtwork);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get all artwork
export const getAllArtworkByArtist = async (req, res) => {
    try {
        // Find all artwork documents
        const artwork = await Artwork.find({ artist: req.params.id });

        res.status(200).json(artwork);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Categorize artwork as available/unavailable
export const categorizeArtwork = async (req, res) => {
    try {
        const { id } = req.params;
        const { available } = req.body;

        // Find artwork document and update availability
        const updatedArtwork = await Artwork.findByIdAndUpdate(
            id,
            { isAvailable: available },
            { new: true }
        );

        if (!updatedArtwork) {
            return res.status(404).json({ message: "Artwork not found" });
        }

        res.status(200).json(updatedArtwork);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Approve artwork (set approved field to true)
export const approveArtwork = async (req, res) => {
    try {
        const { id } = req.params;

        // Find artwork document and set approved field to true
        const updatedArtwork = await Artwork.findByIdAndUpdate(
            id,
            { approved: true },
            { new: true }
        );

        if (!updatedArtwork) {
            return res.status(404).json({ message: "Artwork not found" });
        }
        return res.status(200).json({ artwork: updatedArtwork });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const getAllApprovedArtworksForUser = async (req, res) => {
    try {
        // Find all approved artwork documents
        const artwork = await Artwork.find({ approved: true });

        res.status(200).json(artwork);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get all unapproved artworks
export const getAllUnapprovedArtworks = async (req, res) => {
    try {
        // Find all unapproved artwork documents
        const artwork = await Artwork.find({ approved: false });

        res.status(200).json(artwork);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
