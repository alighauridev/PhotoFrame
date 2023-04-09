import express from "express";
import {
    registerUser,
    authUser,
    updateUserProfile,
    allUsers,
} from "../controllers/userController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(authUser);
userRoutes.route("/profile").put(protect, updateUserProfile);
userRoutes.route("/").get(protect, admin, allUsers);

export default userRoutes;
