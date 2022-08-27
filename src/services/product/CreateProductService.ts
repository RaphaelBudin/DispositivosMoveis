interface IProductRequest {
    name:string;
    price:number;
    quantity:number;
}

export class CreateProductService {
    async execute ({name,price,quantity}:IProductRequest){
        // VALIDAÇÃO
        if (!name)      throw new Error("name vazio");
        if (!price)     throw new Error("price vazio");
        if (!quantity)  throw new Error("quantity vazio");

        const product = {
            name,
            price,
            quantity
        };

        return product;
    }    
}