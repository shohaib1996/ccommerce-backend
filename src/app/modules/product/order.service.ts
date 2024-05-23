// services/order.service.js
import OrderModel from "../order.model";
import { Order } from "./order.interface";

const createOrderInDB = async (orderData: Order) => {
  const order = new OrderModel(orderData);
  await order.save();
  return order;
};

export const OrderService = {
  createOrderInDB,
};
