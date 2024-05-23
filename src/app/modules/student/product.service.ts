import ProductModel from "./../product.model";
import { Product } from "./product.interface";

const createProductIntoDB = async (productData: Product) => {
  const product = new ProductModel(productData);
  await product.save();
  return product;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.updateOne({ _id: id }, { isDeleted: true });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
};
