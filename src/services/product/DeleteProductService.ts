import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";
interface IProduct {
  id: string;
}

export class DeleteProductService {
  async execute({ id }: IProduct) {
    if (!id) throw new Error("Id vazio");

    const productRepository = getCustomRepository(ProductsRepositories);
    const product = await productRepository.findOne(id);
    if (!product) throw new Error("Id do produto não existe no banco");

    return await productRepository.delete(id).then(
      (obj) => {
        console.log(obj);
        return { message: `Registro ${id} deletado com sucesso!` };
      },
      (err) => {
        console.error(err);
        throw new Error(err);
      }
    );
  }
}
