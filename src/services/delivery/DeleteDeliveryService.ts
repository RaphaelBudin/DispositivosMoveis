import { getCustomRepository } from "typeorm";
import { DeliveryRepositories } from "../../repositories/DeliveryRepositories";

interface IDelivery {
  id: string;
}

export class DeleteDeliveryService {
  async execute({ id }: IDelivery) {
    if (!id) throw new Error("id vazio!");

    const deliveryRepository = getCustomRepository(DeliveryRepositories);
    const delivery = await deliveryRepository.findOne(id);
    if (!delivery) throw new Error("Id da delivery não encontrado no banco");

    return await deliveryRepository.delete(id).then(
      (obj) => {
        console.log(obj);
        return { message: `Delivery ${id} deletado com sucesso!` };
      },
      (err) => {
        console.error(err);
        throw new Error(err);
      }
    );
  }
}
