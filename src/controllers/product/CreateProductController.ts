import { CreateProductService } from './../../services/product/CreateProductService';
import {Response, Request} from 'express';

export class CreateProductController {
    async handle(request:Request, response:Response){
        const {id, name,price,description,url} = request.body;

        //Criamos service
        const createProductService = new CreateProductService();

        //Recebemos do service
        const produto = await createProductService.execute({id,name,price,description,url});

        //Retornar o JSON
        return response.json(produto);
    }
}