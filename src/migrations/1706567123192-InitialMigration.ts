import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1706567123192 implements MigrationInterface {
    name = 'InitialMigration1706567123192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(30) NOT NULL, "price" numeric(11,2) NOT NULL, "description" character varying(100) NOT NULL, "category" character varying(50) NOT NULL, "image" character varying(200) NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_order_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "price" numeric(15,2) NOT NULL, "product_id" uuid, "purchase_order_id" uuid, CONSTRAINT "PK_f3eaf81afb216ae78a59cc19503" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "userIdId" uuid, CONSTRAINT "PK_ad3e1c7b862f4043b103a6c8c60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(100) NOT NULL, "username" character varying(50) NOT NULL, "password" character varying(50) NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(50) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "purchase_order_item" ADD CONSTRAINT "FK_341ca8e0678132e2561ab338a90" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_order_item" ADD CONSTRAINT "FK_1c77f592d2af177be137dac042a" FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_order" ADD CONSTRAINT "FK_13fa5e45039d01007f4249cf3ce" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchase_order" DROP CONSTRAINT "FK_13fa5e45039d01007f4249cf3ce"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_item" DROP CONSTRAINT "FK_1c77f592d2af177be137dac042a"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_item" DROP CONSTRAINT "FK_341ca8e0678132e2561ab338a90"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "purchase_order"`);
        await queryRunner.query(`DROP TABLE "purchase_order_item"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
