import ProductModel from "../product.model";
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

const updateProductInDB = async (
  id: string,
  productUpdates: Partial<Product>
) => {
  const result = await ProductModel.findByIdAndUpdate(id, productUpdates, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(
    { _id: id },
    { isDeleted: true }
  );
  return result;
};

const searchProductsByName = async (searchTerm: string) => {
  const result = await ProductModel.find({
    name: { $regex: new RegExp(searchTerm, "i") },
  });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductInDB,
  searchProductsByName,
};
