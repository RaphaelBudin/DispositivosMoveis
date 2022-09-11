interface ICategory{
    id: number,
    name:string,
};

export class CreateCategoryService{
    async execute({id,name}:ICategory){
        if(!id) throw new Error("ID vazio");
        if(!name) throw new Error("Nome vazio");

        const categoria = {id, name};

        return categoria;
    }
}