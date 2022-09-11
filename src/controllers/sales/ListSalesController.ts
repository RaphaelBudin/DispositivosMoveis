import { ListSalesService } from './../../services/sales/ListSalesService';
import {Request,Response} from 'express';

export class ListSalesController{
    async handle(request:Request, response:Response){
        const listSalesService = new ListSalesService();
        const retorno = await listSalesService.execute();
        return response.json(retorno);
    }
}