// routes/categoryRoutes.js
import express from "express";
import {
    createCategory,
    createSubcategory,
    deleteCategory,
    deleteSubcategory,
    getCategories,
    getCategoriesWithSubcategories,
    getCategory,
    getSubcategory,
    updateCategory,
} from "../controllers/categoryController.js";
const router = express.Router();

// categories controllers
router.get("/categories", getCategories);
router.get("/categories/:id", getCategory);
router.post("/categories", createCategory);
router.delete("/categories/:id", deleteCategory);
router.patch("/categories/:id", updateCategory);
// subcategories controller
router.get("/categories/:id/subcategories", getSubcategory);
router.post("/categories/:id/subcategories", createSubcategory);
router.delete("/categories/:id/subcategories", deleteSubcategory);
router.get("/categories-with-subcategories", getCategoriesWithSubcategories);
// ... other routes
export default router;
