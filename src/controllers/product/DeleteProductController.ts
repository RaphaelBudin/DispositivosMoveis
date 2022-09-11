import { DeleteProductService } from './../../services/product/DeleteProductService';
import {Request, Response} from 'express';

export class DeleteProductController{
    async handle(request:Request, response:Response){
        const {id} = request.body;
        const deleteProductService = new DeleteProductService();
        const resposta = await deleteProductService.execute({id});

        return response.json(resposta);
        
    }
}