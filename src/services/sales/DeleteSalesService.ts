import { getCustomRepository } from "typeorm";
import { DeliveryRepositories } from "../../repositories/DeliveryRepositories";
import { SalesRepositories } from "./../../repositories/SalesRepositories";
interface ISales {
  id: string;
}

export class DeleteSalesService {
  async execute({ id }: ISales) {
    if (!id) throw new Error("id vazio");

    const salesRepositories = getCustomRepository(SalesRepositories);
    const sale = await salesRepositories.findOne(id);
    if (!sale) throw new Error("Venda não existe");

    /* const deliveriesRepository = getCustomRepository(DeliveryRepositories);
    const dRel = await deliveriesRepository.find({
      relations: ["sales"],
    });
    console.log(dRel); */
    console.log("Delete sales service...");

    return await salesRepositories.delete(id).then(
      (objUpdate) => {
        console.log(objUpdate);
        return { message: "Venda atualizada com sucesso!" };
      },
      (err) => {
        throw new Error(err);
      }
    );
  }
}
