import { Router } from "express";

//  USERS
import { ListUsersController } from "./controllers/user/ListUsersController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { DeleteUserController } from "./controllers/user/DeleteUserController";

//  PRODUCT
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductController } from './controllers/product/ListProductController';
import { UpdateProductController } from './controllers/product/UpdateProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';

// CATEGORY
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { UpdateCategoryController } from './controllers/category/UpdateCategoryController';
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";

// SALES
import { UpdateSalesController } from "./controllers/sales/UpdateSalesController";
import { DeleteSalesController } from './controllers/sales/DeleteSalesController';
import { CreateSalesController } from './controllers/sales/CreateSalesController';
import { ListSalesController } from './controllers/sales/ListSalesController';
import { AuthenticateUserController } from "./controllers/autentication/AuthenticateUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

//      USER
const listUsersController  = new ListUsersController();
const createUserController  = new CreateUserController();
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


// SEM AUTENTICAÇÃO
router.post("/login", autenticateUserController.handle);
router.post("/users", createUserController.handle);
router.get("/category", listCategoryController.handle);
router.get("/products", listProductController.handle);


//USERS

router.get("/users", listUsersController.handle);
router.patch("/users", updateUserController.handle);
router.delete("/users", deleteUserController.handler);

// CATEGORY
router.post("/category", createCategoryController.handle);
router.patch("/category", updateCategoryController.handle);
router.delete("/category", deleteCategoryController.handle);

// PRODUCTS
router.post("/products", createProductController.handle);
router.patch("/products", updateProductController.handle);
router.delete("/products", deleteProductController.handle);

//  SALES
router.get("/sales", listSalesController.handle);
router.put("/sales", createSalesController.handle);
router.patch("/sales", updateSalesController.handle);
router.delete("/sales", deleteSalesController.handle);

router.use(ensureAuthenticated);


export {router}
