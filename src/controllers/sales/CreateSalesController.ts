import { Request, Response } from "express";
import { CreateSalesService } from "../../services/sales/CreateSalesService";

export class CreateSalesController{
    async handle(request:Request, response:Response){
        const {id,productId,userId,total,description,obs} = request.body;
        const createSalesService = new CreateSalesService();
        const retorno = await createSalesService.execute({id,productId,userId,total,description,obs});
        return response.json(retorno);
    }
}