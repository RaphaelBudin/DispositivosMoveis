import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Product } from "./Product";
import { User } from "./User";

@Entity("sales")
export class Sales {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    product_id!: string;

    @JoinColumn({name: "product_id"})
    @ManyToOne(() => Product)
    productId!:Product;

    @Column()
    user_id!: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    userId!:User;

    @Column()
    total!: number;
    
    @Column()
    desc!: string;
    
    @Column()
    obs!: string;
    
    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor(){
        if (!this.id){
            this.id = uuid();
        }
    }

}