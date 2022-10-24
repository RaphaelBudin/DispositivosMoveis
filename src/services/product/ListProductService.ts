import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";
export class ListProductService {
  async execute() {
    const productRepository = getCustomRepository(ProductsRepositories);

    return await productRepository.find();
  }
}
