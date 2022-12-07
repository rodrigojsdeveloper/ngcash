import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1670371130519 implements MigrationInterface {
    name = 'createTables1670371130519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "balance" integer NOT NULL, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "creditedAccountIdId" uuid, "debitedAccountIdId" uuid, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "accountIdId" uuid, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "REL_bca6b6f3bf5b14fc88d2bae762" UNIQUE ("accountIdId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_cf148e1a0fab8b3f21f031d1f9b" FOREIGN KEY ("creditedAccountIdId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_451cbcc1a726df852a6f2a905a9" FOREIGN KEY ("debitedAccountIdId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bca6b6f3bf5b14fc88d2bae762d" FOREIGN KEY ("accountIdId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bca6b6f3bf5b14fc88d2bae762d"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_451cbcc1a726df852a6f2a905a9"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_cf148e1a0fab8b3f21f031d1f9b"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
    }

}
