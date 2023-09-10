import { TransactionContextProvider } from "./transaction.context";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return <TransactionContextProvider>{children}</TransactionContextProvider>;
};

export { Providers };
