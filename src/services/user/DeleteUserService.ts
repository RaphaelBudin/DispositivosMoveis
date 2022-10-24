import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
interface IUserDelete {
  id: string;
}

export class DeleteUserService {
  async execute(id: IUserDelete) {
    const userRepository = getCustomRepository(UsersRepositories);

    let user = await userRepository.findOne(id);
    if (!user) throw new Error("ID do Usuário não encontrado");

    return await userRepository.delete(id).then(
      (objUpdate) => {
        console.log(objUpdate);
        return { message: "Usuário deletado com sucesso!" };
      },
      (err) => {
        throw new Error(err);
      }
    );
  }
}
