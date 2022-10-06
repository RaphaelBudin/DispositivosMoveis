import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ProductsURLAdded1664958619386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("products", new TableColumn({
            name: "url",
            type: "varchar",
            isNullable: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }
}
