//import { getCustomRepository } from "typeorm";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
//import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    //const usersRepositories = getCustomRepository(UsersRepositories);

    // Verificar se email existe
    //const user = await usersRepositories.findOne({
    //  email,
    //});
    if (email!="raphael@gmail.com" && email!="admin@gmail.com" ) {
      throw new Error("Email incorrect");
    }
    // verificar se senha está correta
    // 123456 / 783645734-sdhfhsdf7762374234234
    const passwordh= await hash("fatec",8);
    const passwordMatch = await compare(password, passwordh);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    // Gerar token
    const token = sign(
      {
        email: email,
      },
      "4f93ac9d10cb751b8c9c646bc9dbccb9",
      {
        subject: "101",
        expiresIn: "1d",
      }
    );

    return token;
  }
}