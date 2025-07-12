import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeVarchar1752336585540 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "cover_image" TYPE character varying(900)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "cover_image" TYPE character varying(800)`);
  }
}
