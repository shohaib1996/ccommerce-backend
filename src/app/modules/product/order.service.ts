// services/order.service.js
import { response } from "express";
import OrderModel from "../order.model";
import ProductModel from "../product.model";
import { Order } from "./order.interface";

const createOrderInDB = async (orderData: Order) => {
  const { productId, quantity } = orderData;

  const product = await ProductModel.findById(productId);
  if (!product) throw new Error("Product not found");
  if (!product.inventory) throw new Error("Inventory details are missing");
  if (product.inventory.quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  product.inventory.quantity -= quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  const order = new OrderModel(orderData);
  await order.save();
  return order;
};
const getAllOrdersFromDB = async () => {
  const orders = await OrderModel.find({});
  return orders;
};
const getOrdersByEmail = async (email: string) => {
  const orders = await OrderModel.find({ email: email });
  return orders;
};

export const OrderService = {
  createOrderInDB,
  getAllOrdersFromDB,
  getOrdersByEmail,
};
