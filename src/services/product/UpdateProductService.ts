import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";
interface IProduct {
  id: number;
  name: string;
  description: string;
  id_category: string;
  price: number;
  url: string;
}

export class UpdateProductService {
  async execute({ id, name, description, id_category, price, url }: IProduct) {
    if (!id) throw new Error("id vazio");
    if (!name && !description && !price && !url && !id_category)
      throw new Error("Sem argumentos para atualizar...");

    const productRepository = getCustomRepository(ProductsRepositories);

    let produto = await productRepository.findOne(id);
    if (!produto) throw new Error("Usuário não existe");
    console.log(produto);

    if (name) produto.name = name;
    if (description) produto.description = description;
    if (id_category) produto.id_category = id_category;
    if (price) produto.price = price;
    if (url) produto.url = url;

    return await productRepository.update(produto.id, produto).then(
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
