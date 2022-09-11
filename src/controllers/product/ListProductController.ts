import { ListProductService } from './../../services/product/ListProductService';
import { Request, Response } from "express";

export class ListProductController {
    async handle(request:Request, response:Response){

        const listProductService = new ListProductService();

        const jsonProducts = await listProductService.execute(); 
        
        return response.json(jsonProducts);
    }
}