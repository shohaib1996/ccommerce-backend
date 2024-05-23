"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
var product_service_1 = require("./product.service");
var product_validation_1 = require("./product.validation");
var createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productData, zodParseData, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productData = req.body;
                zodParseData = product_validation_1.default.parse(productData);
                return [4 /*yield*/, product_service_1.ProductService.createProductIntoDB(zodParseData)];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    success: true,
                    message: "Product created successfully!",
                    data: result,
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({
                    success: false,
                    message: "An error occurred while creating the Product",
                    error: err_1.message,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getAllProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchTerm, result, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                searchTerm = req.query.searchTerm;
                result = void 0;
                if (!searchTerm) return [3 /*break*/, 2];
                return [4 /*yield*/, product_service_1.ProductService.searchProductsByName(searchTerm)];
            case 1:
                result = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, product_service_1.ProductService.getAllProductsFromDB()];
            case 3:
                result = _a.sent();
                _a.label = 4;
            case 4:
                res.status(200).json({
                    success: true,
                    message: "Products fetched successfully!",
                    data: result,
                });
                return [3 /*break*/, 6];
            case 5:
                err_2 = _a.sent();
                res.status(500).json({
                    success: false,
                    message: "An error occurred while fetching the products",
                    error: err_2.message,
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var getSingleProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productId = req.params.productId;
                return [4 /*yield*/, product_service_1.ProductService.getSingleProductFromDB(productId)];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    success: true,
                    message: "Product fetched successfully!",
                    data: result,
                });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(500).json({
                    success: false,
                    message: err_3.message || "something went wrong",
                    error: err_3,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, productUpdates, zodParseData, result, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productId = req.params.productId;
                productUpdates = req.body;
                zodParseData = product_validation_1.default
                    .partial()
                    .parse(productUpdates);
                return [4 /*yield*/, product_service_1.ProductService.updateProductInDB(productId, zodParseData)];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    success: true,
                    message: "Product updated successfully!",
                    data: result,
                });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(500).json({
                    success: false,
                    message: "An error occurred while updating the Product",
                    error: err_4.message,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, result, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productId = req.params.productId;
                return [4 /*yield*/, product_service_1.ProductService.deleteProductFromDB(productId)];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    success: true,
                    message: "Product deleted successfully",
                    data: null,
                });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(500).json({
                    success: false,
                    message: err_5.message || "something went wrong",
                    error: err_5,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.ProductControllers = {
    createProduct: createProduct,
    getAllProducts: getAllProducts,
    getSingleProduct: getSingleProduct,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
};
