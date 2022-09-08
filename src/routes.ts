import { Router } from "express";
import { ListUsersController } from "./controllers/user/ListUsersController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";



const router = Router();

const listUsersController  = new ListUsersController();
const createUserController  = new CreateUserController();
const deleteUserController = new DeleteUserController();


router.get("/users", listUsersController.handle);
router.post("/users", createUserController.handle);
router.delete("/users", deleteUserController.handler);


export {router}
