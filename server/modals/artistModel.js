import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const artistSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    artworks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "artwork",
        },
    ],
    frames: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FrameImage",
        },
    ],
});

const Artist = mongoose.model("ArtistInfo", artistSchema);
export default Artist;
