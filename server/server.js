import express from "express";
import Products from "./assets/data.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import ImportData from "./importData.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import orderRoutes from "./routes/orderRoutes.js";
import frameRoutes from "./routes/frameRoutes.js";

const app = express();
connectDb();
dotenv.config();
app.use(express.json());
console.log(process.env.PORT);

// app.get("/api/products", (req, res) => {
//     res.json(Products);
// });

// app.get("/api/products/:id", (req, res) => {
//     const product = Products.find((item) => item.id == req.params.id);
//     res.json(product);
// });

app.use("/api/users", userRoutes);
app.use("/api/import", ImportData);
app.use("/api/products", frameRoutes);
app.use("/api/orders", orderRoutes);
app.use(notFound);
app.use(errorHandler);
app.get("/", (req, res) => {
    res.send("api is running");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Has Started ${PORT}`));
