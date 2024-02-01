import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1706789264426 implements MigrationInterface {
    name = 'InitialMigration1706789264426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchase_order_item" DROP CONSTRAINT "FK_1c77f592d2af177be137dac042a"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_item" RENAME COLUMN "purchase_order_id" TO "purchaseOrderId"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_item" ADD CONSTRAINT "FK_13ef910b84865fed2a2799dea55" FOREIGN KEY ("purchaseOrderId") REFERENCES "purchase_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchase_order_item" DROP CONSTRAINT "FK_13ef910b84865fed2a2799dea55"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_item" RENAME COLUMN "purchaseOrderId" TO "purchase_order_id"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_item" ADD CONSTRAINT "FK_1c77f592d2af177be137dac042a" FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
