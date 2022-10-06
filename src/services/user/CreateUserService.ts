import { getCustomRepository } from 'typeorm';
import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {

                                                                                console.log("Verificando se falta algum campo...");
    if(!email) throw new Error("Campo vazio: email");
    if(!name) throw new Error("Campo vazio: nome");
    if(!password) throw new Error("Campo vazio: senha");
                                                                                console.log("Todos os campos necessários preenchidos");
    
                                                                                console.log("Criando CustomRepository UserRepositories");
    const userRepository = getCustomRepository(UsersRepositories);
                                                                                console.log("CustomRepository UserRepositories criado");
    
                                                                                console.log("Procurando duplicatas");
    const ja_existe = await userRepository.findOne({
      email,
    });
    if (ja_existe) throw new Error("Usuário já existe");
                                                                                console.log("Duplicata não encontrada");
    
                                                                                console.log("Gerando hash da senha...");
    const passwordHash = await hash(password, 8);
                                                                                console.log(passwordHash);
                                                                                console.log("Hash da senha gerada");
    
                                                                                console.log("Criando novo usuário...");
    const newUser = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });
                                                                                console.log("Novo usuário criado");
    
                                                                                console.log("Salvando no repositório...");
    await userRepository.save(newUser);
                                                                                console.log("USUÁRIO SALVO NO BANCO DE DADOS");

    return newUser;
  }
}

export { CreateUserService };
