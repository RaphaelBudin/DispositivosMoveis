interface IProduct {
    id:number,
    name?:string,
    description?:string,
    price?:number,
    url?:string
}

export class UpdateProductService{
    async execute({id,name,description,price,url}:IProduct){
        if (!id) throw new Error("id vazio");
        if (!name && !description && !price && !url)
            throw new Error("Sem argumentos para atualizar...");

        const objetoAtualizado = {
            id,
            name,
            description,
            price,
            url
        };

        return objetoAtualizado;
    }
}