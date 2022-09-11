import { UpdateSalesService } from './../../services/sales/UpdateSalesService';
import {Request,Response} from 'express';

export class UpdateSalesController{
    async handle(request:Request, response:Response){
        const {id,productId, userId, total, description, obs} = request.body;
        const updateSalesService = new UpdateSalesService();
        const retornoUpdateService = await updateSalesService.execute({id,productId,userId,total,description});
        return response.json(retornoUpdateService);
    }
}