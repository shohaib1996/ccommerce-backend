"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
// routes/order.routes.js
var express_1 = require("express");
var order_controller_1 = require("./order.controller");
var router = express_1.default.Router();
router.post("/orders", order_controller_1.OrderController.createOrder);
router.get("/orders", order_controller_1.OrderController.getAllOrders);
exports.OrderRoutes = router;
