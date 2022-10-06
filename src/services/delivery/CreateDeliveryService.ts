import { DeliveryRepositories } from './../../repositories/DeliveryRepositories';
import { getCustomRepository } from 'typeorm';
interface IDelivery {
    sales_id:string,
    dt_entrega:Date,
    obs?:string,
}

export class CreateDeliveryService {
    async execute({sales_id,dt_entrega,obs=""}:IDelivery){
        if (!sales_id) throw new Error("sales_id vazio");
        if (!dt_entrega) throw new Error("dt_entrega vazio");

        const deliveryRepository = getCustomRepository(DeliveryRepositories);

        const already_exists = await deliveryRepository.findOne({sales_id});
        if (already_exists) throw new Error("Entrega já existe");
        
       const newDelivery = deliveryRepository.create({
            sales_id,
            dt_entrega,
            obs,
       });

       await deliveryRepository.save(newDelivery);

       return newDelivery;
    }
}