import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

export class UpdateUserController{
    async handle(request:Request, response:Response){
        const {id,nome,email,password} = request.body;
        const updateUserService = new UpdateUserService();

        const resposta = await updateUserService.execute({id,nome,email,password});
        return response.json(resposta);
    }
}