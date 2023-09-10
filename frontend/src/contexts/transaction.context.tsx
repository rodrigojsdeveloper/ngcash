import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import {
  ITransactionProps,
  ITransactionContextData,
  IChildren,
} from "../interfaces";

export const TransactionContext = createContext({} as ITransactionContextData);

export const TransactionContextProvider = ({ children }: IChildren) => {
  const token = sessionStorage.getItem("Project NG.CASH: token");

  const [transactions, setTransactions] = useState<ITransactionProps[]>([]);

  const [transactionsCashIn, setTransactionsCashIn] = useState<
    ITransactionProps[]
  >([]);

  const [transactionsCashOut, setTransactionsCashOut] = useState<
    ITransactionProps[]
  >([]);

  const [transactionsDate, setTransactionsDate] = useState<ITransactionProps[]>(
    []
  );

  const [transactionsBoolean, setTransactionsBoolean] = useState<boolean>(true);

  const [transactionsCashInBoolean, setTransactionsCashInBoolean] =
    useState<boolean>(false);

  const [transactionsCashOutBoolean, setTransactionsCashOutBoolean] =
    useState<boolean>(false);

  const [transactionsDateBoolean, setTransactionsDateBoolean] =
    useState<boolean>(false);

  useEffect(() => {
    api
      .get("/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addTransactions = (transaction: ITransactionProps) =>
    setTransactions([transaction, ...transactions!]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        transactionsCashIn,
        setTransactionsCashIn,
        transactionsCashOut,
        setTransactionsCashOut,
        transactionsDate,
        setTransactionsDate,
        transactionsBoolean,
        setTransactionsBoolean,
        transactionsCashInBoolean,
        setTransactionsCashInBoolean,
        transactionsCashOutBoolean,
        setTransactionsCashOutBoolean,
        transactionsDateBoolean,
        setTransactionsDateBoolean,
        addTransactions,
        token,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
