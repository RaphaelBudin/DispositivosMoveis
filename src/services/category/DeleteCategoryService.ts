interface ICategory{
    id:number,
}

export class DeleteCategoryService{
    async execute({id}:ICategory){
        if (!id) throw new Error("id vazio");

        const categoriaDeletada = "Categoria " + id + " - " +  "Java deletada com sucesso";
        const resposta = {
            categoriaDeletada
        }
        
        return resposta;
    }
}