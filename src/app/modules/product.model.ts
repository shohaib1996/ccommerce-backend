import { Schema, model } from "mongoose";

const variantSchema = new Schema({
  type: {
    type: String,
    required: [true, "Variant type is required"],
    trim: true,
    enum: {
      values: ["color", "size", "style"],
      message: "Variant type `{VALUE}` is not supported",
    },
  },
  value: {
    type: String,
    required: [true, "Variant value is required"],
    trim: true,
  },
});

const inventorySchema = new Schema({
  quantity: {
    type: Number,
    required: [true, "Inventory quantity is required"],
    min: [0, "Inventory quantity cannot be negative"],
    validate: {
      validator: Number.isInteger,
      message: "Inventory quantity must be an integer",
    },
  },
  inStock: {
    type: Boolean,
    required: [true, "Stock status is required"],
  },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    trim: true,
    minlength: [10, "Product description must be at least 10 characters long"],
    maxlength: [1000, "Product description cannot exceed 1000 characters"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Product price cannot be negative"],
    max: [100000, "Product price cannot exceed 100,000"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
    trim: true,
    enum: {
      values: ["Electronics", "Clothing", "Books", "Home & Garden", "Other"],
      message: "Category `{VALUE}` is not supported",
    },
  },
  tags: [
    {
      type: String,
      trim: true,
      lowercase: true,
    },
  ],
  variants: [variantSchema],
  inventory: inventorySchema,
});

const ProductModel = model("Product", productSchema);

export default ProductModel;
