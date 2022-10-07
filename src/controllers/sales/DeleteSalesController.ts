import {Request,Response} from 'express';
import { DeleteSalesService } from './../../services/sales/DeleteSalesService';

export class DeleteSalesController{
    async handle(request:Request, response:Response){
        const {id} = request.body;
        const deleteSalesService = new DeleteSalesService();
        const retorno = await deleteSalesService.execute({id});
        return response.json(retorno);
    }
}