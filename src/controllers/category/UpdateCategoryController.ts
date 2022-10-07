import { UpdateCategoryService } from './../../services/category/UpdateCategoryService';
import {Request, Response} from 'express';


export class UpdateCategoryController{
    async handle(request:Request, response:Response){
        const {id,name} = request.body;
        const updateCategoryService = new UpdateCategoryService();
        const resposta = await updateCategoryService.execute({id,name});
        return response.json(resposta);
    }
}