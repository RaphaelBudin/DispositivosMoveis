import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

export class UpdateUserController{
    async handle(request:Request, response:Response){
        const {id,name,email,admin,password, newPassword} = request.body;
        const updateUserService = new UpdateUserService();

        const resposta = await updateUserService.execute({id,name,email,admin,password,newPassword});
        return response.json(resposta);
    }
}