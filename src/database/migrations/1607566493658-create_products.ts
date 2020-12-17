import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createProducts1607566493658 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "products",
              columns: [
                {
                  name: "id",
                  type: "integer",
                  unsigned: true,// não fica negativo o id
                  isPrimary: true,
                  isGenerated: true, // é gerado automatico
                  generationStrategy: "increment",
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "price",
                  type: "decimal",
                  scale: 10,// números depois da vírgula
                  precision: 2,// números antes da vírgula
                },
                {
                  name: "description", // informações sobre o orfanato
                  type: "text",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
