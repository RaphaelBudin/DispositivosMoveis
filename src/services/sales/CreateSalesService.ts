interface ISales{
    id:number,
    productId:number,
    userId:number,
    total:number,
    description:string,
    obs?:string,
}

export class CreateSalesService{
    async execute({id,productId,userId,total,description,obs}:ISales){
        if (!id) throw new Error("id vazio");
        if (!productId) throw new Error("productId vazio");
        if (!userId) throw new Error("userId vazio");
        if (!total) throw new Error("total vazio");
        if (!description) throw new Error("description vazio");
        if (!obs) obs="";
        
        const objetoResposta = {
            id,
            productId,
            userId,
            total,
            description,
            obs,
        }

        return objetoResposta;
    }
}