import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";
interface ICategory {
  id: number;
}

export class DeleteCategoryService {
  async execute({ id }: ICategory) {
    if (!id) throw new Error("id vazio");

    const categoryRepository = getCustomRepository(CategoryRepositories);
    const category = await categoryRepository.findOne(id);
    if (!category) throw new Error("Categoria não encontrada!");

    return await categoryRepository.delete(id).then(
      (obj) => {
        console.log(obj);
        return { message: "Categoria deletada com sucesso!" };
      },
      (err) => {
        throw new Error(err);
      }
    );
  }
}
