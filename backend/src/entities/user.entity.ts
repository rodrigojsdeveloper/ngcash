import { Account } from "./account.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Account, {
    eager: true,
  })
  @JoinColumn({ name: "account_id" })
  accountId: Account;
}

export { User };
