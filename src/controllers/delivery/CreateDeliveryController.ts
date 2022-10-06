import {Request, Response} from 'express';
import {CreateDeliveryService} from '../../services/delivery/CreateDeliveryService';

export class CreateDeliveryController{
    async handle(request:Request, response:Response){
        const {sales_id,dt_entrega,obs} = request.body;

        const createDeliveryService = new CreateDeliveryService();
        const delivery = await createDeliveryService.execute({sales_id,dt_entrega,obs});

        return response.json(delivery);

    }
}