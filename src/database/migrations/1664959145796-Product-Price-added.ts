import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ProductPriceAdded1664959145796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("products", new TableColumn({
            name:"price",
            type:"DECIMAL",
            isNullable: false,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
