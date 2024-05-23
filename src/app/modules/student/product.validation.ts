import { z } from "zod";

const variantSchema = z.object({
  type: z.enum(["color", "size", "style"], {
    errorMap: () => ({ message: "Variant type is not supported" }),
  }),
  value: z
    .string({
      required_error: "Variant value is required",
      invalid_type_error: "Variant value must be a string",
    })
    .trim()
    .min(1, "Variant value cannot be empty"),
});

const inventorySchema = z.object({
  quantity: z
    .number({
      required_error: "Inventory quantity is required",
      invalid_type_error: "Inventory quantity must be a number",
    })
    .min(0, "Inventory quantity cannot be negative")
    .int("Inventory quantity must be an integer"),
  inStock: z.boolean({
    required_error: "Stock status is required",
    invalid_type_error: "Stock status must be a boolean",
  }),
});

const productSchema = z.object({
  name: z
    .string({
      required_error: "Product name is required",
      invalid_type_error: "Product name must be a string",
    })
    .trim()
    .min(1, "Product name cannot be empty")
    .max(100, "Product name cannot exceed 100 characters"),
  description: z
    .string({
      required_error: "Product description is required",
      invalid_type_error: "Product description must be a string",
    })
    .trim()
    .min(10, "Product description must be at least 10 characters long")
    .max(1000, "Product description cannot exceed 1000 characters"),
  price: z
    .number({
      required_error: "Product price is required",
      invalid_type_error: "Product price must be a number",
    })
    .min(0, "Product price cannot be negative")
    .max(100000, "Product price cannot exceed 100,000"),
  category: z
    .string({
      required_error: "Product category is required",
      invalid_type_error: "Product category must be a string",
    })
    .trim(),
  tags: z.array(z.string().trim().toLowerCase()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});

export default productSchema;
