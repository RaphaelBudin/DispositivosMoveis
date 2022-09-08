import { hash } from 'bcryptjs';

interface IUpdate {
    id:number,
    nome:string,
    email:string,
    password:string
}

export class UpdateUserService{
    async execute({id,nome,email,password}:IUpdate){
        //Verifica erros
        if (!id) throw new Error("ID vazio. Preencha o ID");
        if (!nome) throw new Error("Nome vazio. Preencha o nome");
        if (!email) throw new Error("Email vazio. Preencha o email");
        if (!password) throw new Error("Senha vazia. Preencha a senha");

        const passwordHash = await hash(password, 8);
        var vUser = {
            id:id,
            nome:nome,
            email:email,
            password:passwordHash,
        };

        return vUser;

    }
}