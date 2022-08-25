const {response} = require('express');
const express = require('express');
const app = express();
app.use(express.json());

app.get("/", (request,response) => {
	return response.send("inicio");
});

app.get("/listar", (request,response) => {
	console.log("executou listar");
    return response.send("inicio listar");
});

app.get("/exibir", (request,response) => {
	return response.json({"nome":"inicio exibir"});
});

app.get("/products", (request,response) => {
	return response.json(
        [
            {
                "id":1,
                "nome":"Caderno Pequeno",
                "image":"caderno-p.png",
                "categoria":"7",
                "descricao":"caderno universitário 40 folhas",
                "status":"Ativo",
            },
            {
                "id":2,
                "nome":"Caderno Grande",
                "image":"caderno-g.png",
                "categoria":"7",
                "descricao":"caderno universitário 200 folhas",
                "status":"Ativo",
            },
        ]
    )
});

app.post("/incluir", (request,response) => {
    const body = request.body;
    
    console.log("Deu certo?");
    console.log(body);
	
    const {name, image, categoria, descricao, status} = request.body;

    const id = 120;
    const objeto = {
        id,
        name,
        image,
        categoria,
        descricao,
        status
    }

    return response.json(objeto);
});

app.listen(3000);