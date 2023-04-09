import express from "express";
import products from "./assets/data.js";
import users from "./assets/users.js";
import Product from "./modals/productModal.js";
import User from "./modals/userModal.js";
import asyncHandler from "express-async-handler";


const ImportData = express.Router();

ImportData.post(
    "/user",
    asyncHandler(async (req, res) => {
        await User.deleteOne({});
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    })
);

ImportData.post(
    "/products",
    asyncHandler(async (req, res) => {
        await Product.deleteMany({});
        const importProducts = await Product.insertMany(products);
        res.send({ importProducts });
    })
);

export default ImportData;
