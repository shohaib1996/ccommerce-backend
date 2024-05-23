// routes/order.routes.js
import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/orders", OrderController.createOrder);
router.get("/orders", OrderController.getAllOrders);
router.get("/orders/:orderId", OrderController.getSingleOrder);
export const OrderRoutes = router;
