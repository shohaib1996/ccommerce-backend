import { Request, Response } from "express";
import { ProductService } from "./product.service";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParseData = productValidationSchema.parse(productData);

    const result = await ProductService.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the student",
      error: err.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: "Students are retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await ProductService.getSingleProductFromDB(studentId);

    res.status(200).json({
      success: true,
      message: "Student is retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await ProductService.deleteProductFromDB(studentId);

    res.status(200).json({
      success: true,
      message: "Student is deleted succesfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

export const StudentControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
};
