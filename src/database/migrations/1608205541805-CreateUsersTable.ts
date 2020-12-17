import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateUsersTable1608205541805 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "users",
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
                  name: "email",
                  type: "varchar",
                },
                {
                  name: "password", 
                  type: "varchar",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

} 
