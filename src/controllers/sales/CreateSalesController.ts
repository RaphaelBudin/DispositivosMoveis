import { Request, Response } from "express";
import { CreateSalesService } from "../../services/sales/CreateSalesService";

export class CreateSalesController{
    async handle(request:Request, response:Response){
        const {product_id,user_id,total,desc,obs} = request.body;
        const createSalesService = new CreateSalesService();
        const retorno = await createSalesService.execute({product_id,user_id,total,desc,obs});
        return response.json(retorno);
    }
}