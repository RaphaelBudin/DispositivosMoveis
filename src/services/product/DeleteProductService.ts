interface IProduct{
    id:number,
}

export class DeleteProductService{
    async execute({id}:IProduct){
        if (!id) throw new Error("Id vazio");
        const stringResposta = "Categoria " + id + " deletada com sucesso!";
        const resposta = {
            stringResposta            
        }

        return resposta;
    }
}