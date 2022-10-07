import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";

  import { Exclude } from "class-transformer";
  import { v4 as uuid } from "uuid";

  // CRIA UMA TABELA NO BANCO DE DADOS COM OS ATRIBUTOS
  
  @Entity("users") //nome da entidade no banco de dados
  class User {
    @PrimaryColumn() //Coluna primária/identificador
    readonly id!: string ;
  
    @Column()
      name!: string;
  
    @Column()
      email!: string;
  
    @Column()
      admin!: boolean;
  

    @Column()
      password!: string;
  
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { User };
  