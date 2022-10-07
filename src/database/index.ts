import { createConnection } from "typeorm";

//Coloca objeto da conexão com banco de dados dentro da memória do nosso programa
const connection = createConnection();
console.log("SERVIDOR CONECTADO");

export {connection};
