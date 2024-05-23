"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var variantSchema = zod_1.z.object({
    type: zod_1.z
        .string({
        required_error: "Variant type is required",
        invalid_type_error: "Variant type must be a string",
    })
        .trim(),
    value: zod_1.z
        .string({
        required_error: "Variant value is required",
        invalid_type_error: "Variant value must be a string",
    })
        .trim()
        .min(1, "Variant value cannot be empty"),
});
var inventorySchema = zod_1.z.object({
    quantity: zod_1.z
        .number({
        required_error: "Inventory quantity is required",
        invalid_type_error: "Inventory quantity must be a number",
    })
        .min(0, "Inventory quantity cannot be negative")
        .int("Inventory quantity must be an integer"),
    inStock: zod_1.z.boolean({
        required_error: "Stock status is required",
        invalid_type_error: "Stock status must be a boolean",
    }),
});
var productSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        required_error: "Product name is required",
        invalid_type_error: "Product name must be a string",
    })
        .trim()
        .min(1, "Product name cannot be empty")
        .max(100, "Product name cannot exceed 100 characters"),
    description: zod_1.z
        .string({
        required_error: "Product description is required",
        invalid_type_error: "Product description must be a string",
    })
        .trim()
        .min(10, "Product description must be at least 10 characters long")
        .max(1000, "Product description cannot exceed 1000 characters"),
    price: zod_1.z
        .number({
        required_error: "Product price is required",
        invalid_type_error: "Product price must be a number",
    })
        .min(0, "Product price cannot be negative")
        .max(100000, "Product price cannot exceed 100,000"),
    category: zod_1.z
        .string({
        required_error: "Product category is required",
        invalid_type_error: "Product category must be a string",
    })
        .trim(),
    tags: zod_1.z.array(zod_1.z.string().trim().toLowerCase()),
    variants: zod_1.z.array(variantSchema),
    inventory: inventorySchema,
});
exports.default = productSchema;
