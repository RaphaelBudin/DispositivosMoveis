interface IUserDelete {
    id: number,
}

export class DeleteUserService{
    async execute(id:IUserDelete){
        var resposta = {
            message:"Usuário deletado com sucesso!"
        };
        return resposta;
    }
}   