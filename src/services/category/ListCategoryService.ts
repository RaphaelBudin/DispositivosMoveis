import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";
export class ListCategoryService {
  async execute() {
    const categoryRepository = getCustomRepository(CategoryRepositories);
    return await categoryRepository.find();
  }
}
