
export class ListSalesService{
    async execute(){
        const listaSales = [
            {
                id:1,
                productId:3,
                userId:7,
                total:100.00,
                description:"Descrição sales 1",
                obs:"Sem observações",
            },
            {
                id:2,
                productId:5,
                userId:14,
                total:177.00,
                description:"Descrição sales 2",
                obs:"Sem observações",
            },
            {
                id:3,
                productId:31,
                userId:77,
                total:999.00,
                description:"Descrição sales 3",
                obs:"Sem observações",
            },
        ]

        return listaSales;
    }
}