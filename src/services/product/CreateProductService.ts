import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';
interface IProductRequest {
    id?:number,
    name:string,
    price:number,
    description:string,
    id_category:string,
    url:string,
}

export class CreateProductService {
    async execute ({id,name,price,description,id_category,url}:IProductRequest){
        // VALIDAÇÃO
        console.log("Validando dados...");
        if (!name)      throw new Error("name vazio");
        if (!price)     throw new Error("price vazio");
        if (!description)  throw new Error("description vazio");
        if (!id_category) throw new Error("id_category vazio");
        if (!url)  throw new Error("url vazio");
        console.log("Todos os campos necessários foram preenchidos");

        console.log("Criando custom-repository ProductsRepository...");
        const productsRepository = getCustomRepository(ProductsRepositories);
        console.log("custom-repository ProductsRepository criado");

        console.log("Procurando duplicatas...");
        const already_exists = await productsRepository.findOne({url});
        if(already_exists) throw new Error("Produto já existe....");
        console.log("Sem duplicatas");
        
        console.log("Criando novo Produto...");
        const newProduct = productsRepository.create({
            name,
            price,
            description,
            id_category,
            url,
        });
        console.log("Novo produto criado");

        console.log("Salvando produto no banco de dados...");
        await productsRepository.save(newProduct);
        console.log("Produto salvo");

        return newProduct;
    }    
}