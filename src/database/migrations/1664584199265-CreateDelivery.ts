import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class CreateDelivery1664584199265 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "deliveries",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "sales_id",
            type: "uuid",
          },
          {
            name: "dt_entrega",
            type: "timestamp",
          },
          {
            name: "obs",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKsalesId",
            referencedTableName: "sales",
            referencedColumnNames: ["id"],
            columnNames: ["sales_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("deliveries");
  }
}
