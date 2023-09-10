import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import {
  ITransactionProps,
  ITransactionContextData,
  IChildren,
} from "../interfaces";

export const TransactionContext = createContext({} as ITransactionContextData);

export const TransactionContextProvider = ({ children }: IChildren) => {
  const token = sessionStorage.getItem("NG.CASH: token");

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

  const [balance, setBalance] = useState<number>(0);

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

  const getBalance = () => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        api
          .get(`/accounts/${res.data.accountId.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => setBalance(res.data.balance))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  getBalance();

  const addTransactions = (transaction: ITransactionProps) =>
    setTransactions([transaction, ...transactions!]);

  const handleTransactions = () => {
    setTransactionsBoolean(true);
    setTransactionsCashInBoolean(false);
    setTransactionsCashOutBoolean(false);
    setTransactionsDateBoolean(false);

    api
      .get("/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTransactions(res.data))
      .catch((err) => toast.error("transaction does not exist or not found"));
  };

  const handleTransactionsCashIn = () => {
    setTransactionsBoolean(false);
    setTransactionsCashInBoolean(true);
    setTransactionsCashOutBoolean(false);
    setTransactionsDateBoolean(false);

    api
      .get("/transactions/cash-in", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTransactionsCashIn(res.data))
      .catch((_) => toast.error("transaction does not exist or not found"));
  };

  const handleTransactionsCashOut = () => {
    setTransactionsBoolean(false);
    setTransactionsCashInBoolean(false);
    setTransactionsCashOutBoolean(true);
    setTransactionsDateBoolean(false);

    api
      .get("/transactions/cash-out", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTransactionsCashOut(res.data))
      .catch((_) => toast.error("transaction does not exist or not found"));
  };

  const handleTransactionsDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionsBoolean(false);
    setTransactionsCashInBoolean(false);
    setTransactionsCashOutBoolean(false);
    setTransactionsDateBoolean(true);

    api
      .get(`/transactions/${e.target.value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTransactionsDate(res.data))
      .catch((_) => toast.error("transaction does not exist or not found"));
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        transactionsCashIn,
        transactionsCashOut,
        transactionsDate,
        transactionsBoolean,
        transactionsCashInBoolean,
        transactionsCashOutBoolean,
        transactionsDateBoolean,
        handleTransactions,
        handleTransactionsCashIn,
        handleTransactionsCashOut,
        handleTransactionsDate,
        addTransactions,
        balance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
