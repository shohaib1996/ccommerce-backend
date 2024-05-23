// services/order.service.js
import OrderModel from "../order.model";
import { Order } from "./order.interface";

const createOrderInDB = async (orderData: Order) => {
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
