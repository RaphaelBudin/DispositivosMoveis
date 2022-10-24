import { SalesRepositories } from "./../../repositories/SalesRepositories";
import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { User } from "../../entities/User";

interface ISales {
  id: string;
  productId: string;
  userId: string;
  total: number;
  desc: string;
  obs: string;
}

export class UpdateSalesService {
  async execute({ id, productId, userId, total, desc, obs }: ISales) {
    if (!id) throw new Error("id vazio");
    if (!productId && !userId && !total && !desc && !obs)
      throw new Error("Sem argumentos para update...");

    const salesRepository = getCustomRepository(SalesRepositories);

    let venda = await salesRepository.findOne(id);
    if (!venda) throw new Error("Venda não encontrada...");

    if (productId) venda.product_id = productId;
    if (userId) venda.user_id = userId;
    if (total) venda.total = total;
    if (desc) venda.desc = desc;
    if (obs) venda.obs = obs;

    return await salesRepository.update(id, venda).then(
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
