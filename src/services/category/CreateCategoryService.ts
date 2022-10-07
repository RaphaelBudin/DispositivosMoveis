import { getCustomRepository } from 'typeorm';
import { CategoryRepositories } from '../../repositories/CategoryRepositories';
interface ICategory{
    id: string,
    name:string,
    description:string
};

export class CreateCategoryService{
    async execute({id,name,description}:ICategory){
        if(!id) throw new Error("ID vazio");
        if(!name) throw new Error("Nome vazio");
        if(!description) throw new Error("Descrição vazia");

        console.log("Criando Custom Repository: Category");
        const categoryRepository = getCustomRepository(CategoryRepositories);
        
        console.log("Procurando duplicatas");
        const already_exists = await categoryRepository.findOne({name});
        if (already_exists) {
            throw new Error("ID da categoria já existe");
        }
        console.log("Não foram encontradas duplicatas");

        console.log("Criando novo objeto Category");
        const newCategory = categoryRepository.create({
            name,
            description, 
        });
        console.log("Objeto criado");


        console.log("Salvando no repositório...");
        await categoryRepository.save(newCategory);
        console.log("Objeto salvo no repositório");
        console.log(newCategory);

        return newCategory;
    }   
}