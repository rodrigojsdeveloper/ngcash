import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Account } from "../accounts";

@Entity("transactions")
class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Account, (account) => account.creditedTransaction)
  creditedAccountId: string;

  @ManyToOne(() => Account, (account) => account.debitedTransaction)
  debitedAccountId: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;
}

export { Transaction };
