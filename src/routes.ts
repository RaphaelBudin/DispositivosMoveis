import { Router } from "express";
import { ListUsersController } from "./controllers/user/ListUsersController";
import { CreateUserController } from "./controllers/user/CreateUserController";



const router = Router();

const listUsersController  = new ListUsersController();
const createUserController  = new CreateUserController();

router.get("/users", listUsersController.handle);
router.post("/users", createUserController.handle);


export {router}
