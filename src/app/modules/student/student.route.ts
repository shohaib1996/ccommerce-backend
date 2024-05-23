import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router();

router.post("/products", StudentControllers.createProduct);

router.get("/", StudentControllers.getAllProducts);

router.get("/:productID", StudentControllers.getSingleProduct);

router.delete("/:productID", StudentControllers.deleteProduct);

export const StudentRoutes = router;
