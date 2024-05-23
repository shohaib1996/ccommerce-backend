import { z } from "zod";

const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .min(1, "Email is required"),
  productId: z.string().min(1, "Product ID is required"),
  price: z
    .number()
    .positive({ message: "Price must be a positive number" })
    .nonnegative({ message: "Price must not be negative" }),
  quantity: z
    .number()
    .int({ message: "Quantity must be an integer" })
    .positive({ message: "Quantity must be greater than zero" })
    .nonnegative({ message: "Quantity must not be negative" }),
});

export default orderValidationSchema;
