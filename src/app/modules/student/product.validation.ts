import { z } from "zod";

const variantSchema = z.object({
  type: z.enum(["color", "size", "style"]),
  value: z.string().trim().min(1, "Variant value is required"),
});

const inventorySchema = z.object({
  quantity: z
    .number()
    .int("Inventory quantity must be an integer")
    .min(0, "Inventory quantity cannot be negative")
    .nonnegative("Inventory quantity cannot be negative"),
  inStock: z.boolean(),
});

const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Product name is required")
    .max(100, "Product name cannot exceed 100 characters"),
  description: z
    .string()
    .trim()
    .min(10, "Product description must be at least 10 characters long")
    .max(1000, "Product description cannot exceed 1000 characters"),
  price: z
    .number()
    .min(0, "Product price cannot be negative")
    .max(100000, "Product price cannot exceed 100,000"),
  category: z.enum([
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Other",
  ]),
  tags: z.array(z.string().trim().toLowerCase()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});

export default productSchema;
