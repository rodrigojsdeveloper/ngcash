import { ITransactionRequest } from "../interfaces/transactions";
import { ISessionRequest } from "../interfaces/session";
import { IUserRequest } from "../interfaces/users";

const user: IUserRequest = {
  username: "example",
  password: "Example@123",
};

const user2: IUserRequest = {
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

export { user, user2, session, transaction };
