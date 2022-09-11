interface IProductRequest {
    id:number,
    name:string;
    price:number;
    description:string;
    url:string,
}

export class CreateProductService {
    async execute ({id,name,price,description,url}:IProductRequest){
        // VALIDAÇÃO
        if (!id)      throw new Error("id vazio");
        if (!name)      throw new Error("name vazio");
        if (!price)     throw new Error("price vazio");
        if (!description)  throw new Error("description vazio");
        if (!url)  throw new Error("url vazio");

        const product = {
            id,
            name,
            price,
            description,
            url
        };

        return product;
    }    
}