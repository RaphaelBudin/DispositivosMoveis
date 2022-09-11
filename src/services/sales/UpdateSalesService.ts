interface ISales {
    id:number,
    productId?:number,
    userId?:number,
    total?:number,
    description?:string,
    obs?:string
}

export class UpdateSalesService{
    async execute({id,productId,userId,total,description,obs}:ISales){
        if (!id) throw new Error("id vazio");
        if (!productId && !userId && !total && !description && !obs)
            throw new Error("Sem argumentos para update...");

        const objeto = {
            id,
            productId,
            userId,
            total,
            description,
            obs
        }

        return objeto;

    }
}