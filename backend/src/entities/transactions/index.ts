import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Account } from "../accounts";

@Entity("transactions")
class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Account, (account) => account.creditedTransaction)
  @JoinColumn({ name: "creditedAccount_id" })
  creditedAccountId: string;

  @ManyToOne(() => Account, (account) => account.debitedTransaction)
  @JoinColumn({ name: "debitedAccount_id" })
  debitedAccountId: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;
}

export { Transaction };
