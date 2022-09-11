import {Request, Response} from 'express';
import { DeleteCategoryService } from '../../services/category/DeleteCategoryService';

export class DeleteCategoryController{
    async handle(request:Request, response:Response){
        const {id} = request.body;
        const deleteCategoryService = new DeleteCategoryService();

        const resposta = await deleteCategoryService.execute({id});

        return response.json(resposta);
    }
}