import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from './../../repositories/SalesRepositories';

interface ISales{
    product_id:string,
    user_id:string,
    total:number,
    desc:string,
    obs?:string,    
}

export class CreateSalesService{
    async execute({product_id,user_id,total,desc,obs=""}:ISales){
        console.log("Validando dados...");
        if (!product_id) throw new Error("product_id vazio");
        if (!user_id) throw new Error("user_id vazio");
        if (!total) throw new Error("total vazio");
        if (!desc) throw new Error("desc vazio");
        console.log("Todos os dados necessários foram enviados");
        
        console.log("Criando conexão com SalesRepositories...");
        const salesRepository = getCustomRepository(SalesRepositories);
        console.log("Conexão com SalesRepositories criada");

        console.log("Como Sales podem ser duplicadas, duplicatas não serão verificadas");

        const newSales = salesRepository.create({
            product_id,
            user_id,
            total,
            desc,
            obs,
        });

        await salesRepository.save(newSales);

        return newSales;
    }
}