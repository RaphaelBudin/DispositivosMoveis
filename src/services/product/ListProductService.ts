export class ListProductService {
    async execute(){
        
        const jsonProducts = [
            {
                id:'1',
                nome:"Produto X",
                price:9.99,
                quantity:3
            },
            {
                id:'2',
                nome:"Produto Y",
                price:7.77,
                quantity:15
            },
        ];

        return jsonProducts;
    }
}