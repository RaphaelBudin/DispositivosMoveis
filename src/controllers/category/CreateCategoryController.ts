import {Request, Response} from 'express';
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

export class CreateCategoryController{
    async handle(request:Request, response:Response){
        const {id, name, description} = request.body;
        const createCategoryService = new CreateCategoryService();
        const resposta = await createCategoryService.execute({id,name,description});

        return response.json(resposta);
    }
}