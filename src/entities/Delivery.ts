import { Sales } from './Sales';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("delivery")
export class Delivery {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    sales_id!: string;

    @JoinColumn({name : "sales_id"})
    @ManyToOne(()=> Sales)
    idsales!: Sales;

    @CreateDateColumn()
    dt_entrega!: Date;

    @Column()
    obs!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}