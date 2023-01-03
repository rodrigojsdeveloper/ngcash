import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transaction } from "./transactions.entity";

@Entity("accounts")
class Account {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  balance: number;

  @OneToMany(() => Transaction, (transaction) => transaction.creditedAccountId, {
      eager: true,
    })
  creditedTransaction: Transaction[];

  @OneToMany(() => Transaction, (transaction) => transaction.debitedAccountId, {
    eager: true,
  })
  debitedTransaction: Transaction[];
}

export { Account };
