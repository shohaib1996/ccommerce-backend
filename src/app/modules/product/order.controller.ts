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
      message: "Insufficient quantity available in inventory",
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    let orders;

    if (email) {
      orders = await OrderService.getOrdersByEmail(email as string);
    } else {
      orders = await OrderService.getAllOrdersFromDB();
    }

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching all orders",
      error: err.message,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
