import { getCustomRepository } from 'typeorm';
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

interface ICategory{
    id:string,
    name:string,
    description:string,
}

export class UpdateCategoryService{
    async execute({id,name,description}:ICategory){
        if(!id) throw new Error("id faltando");
        if(!name) throw new Error("name faltando");
        if(!description) throw new Error("description faltando");

        const categoryRepository = getCustomRepository(CategoryRepositories);
        
        const categoria = await categoryRepository.findOne({id});
        if (!categoria){
            throw new Error("Categoria não existe");
        }

        const newCategory = await categoryRepository.create({
            id,
            name,
            description,
            updated_at: Date(),
        });

        return await categoryRepository.save(newCategory);
        
    }
}