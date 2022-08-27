import { CreateProductService } from './../../services/product/CreateProductService';
import {Response, Request} from 'express';

export class CreateProductController {
    async handle(request:Request, response:Response){
        const {name,price,quantity} = request.body;

        //Criamos service
        const createProductService = new CreateProductService();

        //Recebemos do service
        const produto = await createProductService.execute({name,price,quantity});

        //Retornar o JSON
        return response.json(produto);
    }
}