interface ICategory{
    id:number,
    name:string,
}

export class UpdateCategoryService{
    async execute({id,name}:ICategory){
        if(!id) throw new Error("id faltando");
        if(!name) throw new Error("name faltando");

        const produtoAtualizado ={
            id,
            name
        }

        return produtoAtualizado;
    }
}