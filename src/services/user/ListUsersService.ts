import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class ListUserService {
  async execute() {
    const userRepository = getCustomRepository(UsersRepositories);

    console.log("Listando usuários...");
    return await userRepository.find();
  }
}

export { ListUserService };
