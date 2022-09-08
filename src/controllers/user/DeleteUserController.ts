import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

export class DeleteUserController {
    async handler(request:Request, response:Response){
        const id = request.body.id;
        const deleteUserService = new DeleteUserService();
        
        const mensagem = await deleteUserService.execute({id});

        return response.json(mensagem);
    }
}