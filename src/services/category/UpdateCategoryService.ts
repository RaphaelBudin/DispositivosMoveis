import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

interface ICategory {
  id: string;
  name?: string;
  description?: string;
}

export class UpdateCategoryService {
  async execute({ id, name, description }: ICategory) {
    if (!id) throw new Error("id faltando");
    if (!name && !description) throw new Error("sem argumentos para atualizar");

    const categoryRepository = getCustomRepository(CategoryRepositories);

    let categoria = await categoryRepository.findOne(id);
    if (!categoria) throw new Error("ID da categoria não existe");

    if (name) categoria.name = name;
    if (description) categoria.description = description;

    return await categoryRepository.update(id, categoria).then(
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
