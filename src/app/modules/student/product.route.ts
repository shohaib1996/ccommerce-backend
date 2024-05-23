import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/products", ProductControllers.createProduct);

router.get("/products", ProductControllers.getAllProducts);

router.get("products/:productID", ProductControllers.getSingleProduct);

router.delete("/:productID", ProductControllers.deleteProduct);

export const ProductRoutes = router;
