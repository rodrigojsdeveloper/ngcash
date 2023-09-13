import { ITransaction } from "../interfaces/transaction.interface";
import { IUser } from "../interfaces/user.interface";

const user: IUser = {
  username: "example",
  password: "Example@123",
};

const anotherUser: IUser = {
  username: "johndoe",
  password: "Johndoe@123",
};

const login: IUser = {
  username: "example",
  password: "Example@123",
};

const invalidLogin: IUser = {
  username: "example",
  password: "Johndoe@123",
};

const transaction: ITransaction = {
  value: 50,
  username: "johndoe",
};

const invalidTransaction: ITransaction = {
  value: 20,
  username: "exx",
};

export {
  user,
  anotherUser,
  login,
  invalidLogin,
  transaction,
  invalidTransaction,
};
