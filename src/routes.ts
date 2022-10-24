import { ListDeliveryController } from "./controllers/delivery/ListDeliveryController";
import { CreateDeliveryController } from "./controllers/delivery/CreateDeliveryController";
import { Router } from "express";

//  USERS
import { ListUsersController } from "./controllers/user/ListUsersController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";

//  PRODUCT
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { UpdateProductController } from "./controllers/product/UpdateProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";

// CATEGORY
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";

// SALES
import { UpdateSalesController } from "./controllers/sales/UpdateSalesController";
import { DeleteSalesController } from "./controllers/sales/DeleteSalesController";
import { CreateSalesController } from "./controllers/sales/CreateSalesController";
import { ListSalesController } from "./controllers/sales/ListSalesController";

import { AuthenticateUserController } from "./controllers/autentication/AuthenticateUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { UpdateDeliveryController } from "./controllers/delivery/UpdateDeliveryController";
import { DeleteDeliveryController } from "./controllers/delivery/DeleteDeliveryContoller";

const router = Router();

//      USER
const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const autenticateUserController = new AuthenticateUserController();

const listCategoryController = new ListCategoryController();
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const listProductController = new ListProductController();
const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

const listSalesController = new ListSalesController();
const createSalesController = new CreateSalesController();
const updateSalesController = new UpdateSalesController();
const deleteSalesController = new DeleteSalesController();

const createDeliveryController = new CreateDeliveryController();
const listDeliveryController = new ListDeliveryController();
const updateDeliveryController = new UpdateDeliveryController();
const deleteDeliveryController = new DeleteDeliveryController();

// SEM AUTENTICAÇÃO
router.post("/login", autenticateUserController.handle);
router.post("/users", createUserController.handle);
router.get("/category", listCategoryController.handle);
router.get("/products", listProductController.handle);

//USERS

router.put("/users", updateUserController.handle);

router.get("/users", listUsersController.handle);
router.delete("/users", deleteUserController.handler);

// CATEGORY
router.post("/category", createCategoryController.handle);
router.put("/category", updateCategoryController.handle);
router.delete("/category", deleteCategoryController.handle);

// PRODUCTS
router.post("/products", createProductController.handle);
router.put("/products", updateProductController.handle);
router.delete("/products", deleteProductController.handle);

//  SALES
router.get("/sales", listSalesController.handle);
router.post("/sales", createSalesController.handle);
router.put("/sales", updateSalesController.handle);
router.delete("/sales", deleteSalesController.handle);

router.post("/delivery", createDeliveryController.handle);
router.get("/delivery", listDeliveryController.handle);
router.put("/delivery", updateDeliveryController.handle);
router.delete("/delivery", deleteDeliveryController.handle);

router.use(ensureAuthenticated);
router.use(ensureAdmin);

export { router };
