import {Request, Response} from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService';

export class ListCategoryController{
    async handle (request:Request, response:Response){
        const listCategoryService = new ListCategoryService();
        const resposta = await listCategoryService.execute();

        return response.json(resposta);
    }
}