export class ListCategoryService{
    async execute(){

        const listaCategorias = [
            {
                id:1,
                name:"Java",
            },
            {
                id:2,

                name:"Node",
            },
            {
                id:1,
                name:"React",
            },
        ]

        return listaCategorias;
    }
}