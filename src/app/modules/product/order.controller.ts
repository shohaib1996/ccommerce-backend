// controllers/order.controller.js
import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, productId, price, quantity } = req.body;
    const orderData = { email, productId, price, quantity };

    const result = await OrderService.createOrderInDB(orderData);

    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the order",
      error: err.message,
    });
  }
};

export const OrderController = {
  createOrder,
};
