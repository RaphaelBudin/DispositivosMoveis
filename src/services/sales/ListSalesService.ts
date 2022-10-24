import { SalesRepositories } from "./../../repositories/SalesRepositories";
import { getCustomRepository } from "typeorm";

export class ListSalesService {
  async execute() {
    const salesRepository = getCustomRepository(SalesRepositories);

    return await salesRepository.find();
  }
}
