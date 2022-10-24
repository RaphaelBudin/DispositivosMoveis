import { DeliveryRepositories } from "./../../repositories/DeliveryRepositories";
import { getCustomRepository } from "typeorm";
export class ListDeliveryService {
  async execute() {
    const deliveryRepository = getCustomRepository(DeliveryRepositories);
    return await deliveryRepository.find();
  }
}
