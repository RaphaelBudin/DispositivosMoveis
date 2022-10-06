import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { UsersRepositories } from '../../repositories/UsersRepositories';

interface IUpdate {
    email:string,
    password:string,
    newName?:string,
    newPassword?:string,
}

export class UpdateUserService{
    async execute({newName,email,password,newPassword}:IUpdate){
        //Verifica erros
        if(!email) throw new Error("email não preenchido");
        if(!password) throw new Error("senha não preenchida");

        const usersRepositories = getCustomRepository(UsersRepositories);
        
        let user = await usersRepositories.findOne({email})
        if (!user) throw new Error("Email não existe");
        
        password = await hash(password, 8);
        const passwordMatches = await usersRepositories.findOne({email, password});
        if(!passwordMatches) {
            console.log("Hash enviado: ");
            console.log(password);
            throw new Error("Senhas não batem...");
        }   
        
        if(newPassword) {
            password=await hash(newPassword,8);
            console.log("Hash nova senha:");
            console.log(password);
            user.password = newPassword;
        }

        if(newName){
          user.name = newName;
        }

        await usersRepositories.save(user, {
            name:user.name,
            password:user.password,
        });

        return user;

    }
}