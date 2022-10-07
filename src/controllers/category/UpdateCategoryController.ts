import { UpdateCategoryService } from './../../services/category/UpdateCategoryService';
import {Request, Response} from 'express';


export class UpdateCategoryController{
    async handle(request:Request, response:Response){
        const {id,name,description} = request.body;
        const updateCategoryService = new UpdateCategoryService();
        const resposta = await updateCategoryService.execute({id,name,description});
        return response.json(resposta);
    }
}