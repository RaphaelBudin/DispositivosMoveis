import { ListProductController } from './controllers/product/ListProductController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { Router } from "express";
import { ListUsersController } from "./controllers/user/ListUsersController";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

//Users
const listUsersController  = new ListUsersController();
router.get("/users", listUsersController.handle);
const createUserController  = new CreateUserController();
router.post("/users", createUserController.handle);

//Products
const listProductController = new ListProductController();
router.get("/product", listProductController.handle);
const createProductController = new CreateProductController();
router.post("/product", createProductController.handle);


export {router}
