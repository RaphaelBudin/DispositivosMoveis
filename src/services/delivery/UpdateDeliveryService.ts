import { getCustomRepository } from "typeorm";
import { DeliveryRepositories } from "../../repositories/DeliveryRepositories";
interface IDelivery {
  id: string;
  sales_id: string;
  dt_entrega: Date;
  obs: string;
}

export class UpdateDeliveryService {
  async execute({ id, sales_id, dt_entrega, obs }: IDelivery) {
    if (!id) throw new Error("id vazio!");
    if (!sales_id && dt_entrega && !obs)
      throw new Error("id e data de entrega vazia!");

    const deliveryRepository = getCustomRepository(DeliveryRepositories);
    let delivery = await deliveryRepository.findOne({ id });
    if (!delivery) throw new Error("ID informado não encontrado");

    if (sales_id) delivery.sales_id = sales_id;
    if (dt_entrega) delivery.dt_entrega = dt_entrega;
    if (obs) delivery.obs = obs;

    return await deliveryRepository.update(id, delivery).then(
      (objUpdate) => {
        console.log(objUpdate);
        return { message: "Registro atualizado com sucesso!" };
      },
      (err) => {
        throw new Error(err);
      }
    );
  }
}
