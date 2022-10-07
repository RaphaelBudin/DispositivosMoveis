import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
  } from "typeorm";
  import { Category } from "./Category";
  import { v4 as uuid } from "uuid";
  
  @Entity("products")
  class Product {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
    name!: string;
  
    @Column()
    description!: string;

    @Column()
    id_category!: string;

    @JoinColumn({ name: "id_category" })
    @ManyToOne(() => Category)
    idCategory!:Category;

    @Column()
    price!: number;

    @Column()
    url!: string;

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
  
  export { Product };
  