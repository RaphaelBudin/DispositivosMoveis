interface ISales {
    id:number,
}

export class DeleteSalesService{
    async execute({id}:ISales){
        if (!id) throw new Error("id faltando");
        
        const mensagem = "Categoria ID " + id + " deletada com sucesso!";
        const resposta = {mensagem};
        return resposta;
    }
}