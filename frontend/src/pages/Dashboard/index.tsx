import { TransactionContext } from "../../contexts/transaction.context";
import { FormTransaction } from "../../components/FormTransaction";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Transaction } from "../../components/Transaction";
import React, { useContext, useEffect } from "react";
import { ITransactionProps } from "../../interfaces";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container } from "./style";

const Dashboard = () => {
  const token = sessionStorage.getItem("NG.CASH: token");

  const {
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
    balance,
  } = useContext(TransactionContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Dashboard | NG.CASH" />
      </HelmetProvider>
      <Container>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            onClick={() => {
              toast.success("Check back often!");

              navigate("/signin");

              sessionStorage.removeItem("NG.CASH: token");
            }}
          >
            <path
              fill="white"
              d="m17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4l-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"
            />
          </svg>
          <h1>BALANCE</h1>
          <p>$ {balance.toFixed(2)}</p>
          <h2>CASH OUT</h2>

          <FormTransaction />
        </div>

        <main>
          <h2>All transactions</h2>
          <h3>Cash-in, cash-out and date transactions</h3>

          <menu>
            {transactionsBoolean &&
              transactions.map((transaction: ITransactionProps) => (
                <Transaction key={transaction.id} transaction={transaction} />
              ))}
            {transactionsCashInBoolean &&
              transactionsCashIn.map((transaction: ITransactionProps) => (
                <Transaction key={transaction.id} transaction={transaction} />
              ))}
            {transactionsCashOutBoolean &&
              transactionsCashOut.map((transaction: ITransactionProps) => (
                <Transaction key={transaction.id} transaction={transaction} />
              ))}
            {transactionsDateBoolean &&
              transactionsDate.map((transaction: ITransactionProps) => (
                <Transaction key={transaction.id} transaction={transaction} />
              ))}
          </menu>

          <div>
            <Button
              buttonStyle="dashboard"
              onClick={() => handleTransactions()}
            >
              Todos
            </Button>

            <Button
              buttonStyle="dashboard"
              onClick={() => handleTransactionsCashIn()}
            >
              Cash in
            </Button>

            <Button
              buttonStyle="dashboard"
              onClick={() => handleTransactionsCashOut()}
            >
              Cash out
            </Button>

            <input
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleTransactionsDate(e)
              }
            />
          </div>
        </main>
      </Container>
    </React.Fragment>
  );
};

export { Dashboard };
