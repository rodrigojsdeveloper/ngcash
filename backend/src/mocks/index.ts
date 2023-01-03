import { ITransactionRequest } from "../interfaces/transaction.interface";
import { ISessionRequest } from "../interfaces/login.interface";
import { IUserRequest } from "../interfaces/user.interface";

const user: IUserRequest = {
  username: "example",
  password: "Example@123",
};

const anotherUser: IUserRequest = {
  username: "johndoe",
  password: "Johndoe@123",
};

const session: ISessionRequest = {
  username: "example",
  password: "Example@123",
};

const transaction: ITransactionRequest = {
  value: 50,
  username: "johndoe",
};

export { user, anotherUser, session, transaction };
