import { getCustomRepository } from "typeorm";
import { hash, compare } from "bcryptjs";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUpdate {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  password: string;
}
//Caso dê algum erro de "Empty Criteria"...
//Garanta que as variáveis que estão sendo passadas no Controller são exatamente as mesmas da interface IUpdate
export class UpdateUserService {
  async execute({ id, name, email, admin = false, password }: IUpdate) {
    //Verifica erros
    if (!id) throw new Error("id não preenchido");
    if (!email) throw new Error("email não preenchido");
    if (!password) throw new Error("senha não preenchida");

    const usersRepositories = getCustomRepository(UsersRepositories);

    let user = await usersRepositories.findOne({ email });
    if (!user) throw new Error("User não existe");

    password = await hash(password, 8);

    user.name = name;
    user.admin = admin;
    user.password = password;
    user.updated_at = new Date();

    return await usersRepositories.update(user.id, user).then(
      (objUpdate) => {
        console.log(objUpdate);
        let messageUpdate = {
          message: "Registro atualizado com sucesso",
        };
        return messageUpdate;
      },
      (err) => {
        throw new Error(err);
      }
    );
  }
}
