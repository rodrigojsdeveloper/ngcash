import { TransactionContext } from "../../contexts/transaction.context";
import { FormTransaction } from "../../components/FormTransaction";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Transaction } from "../../components/Transaction";
import React, { useContext, useEffect } from "react";
import { ITransactionProps } from "../../interfaces";
import logout from "../../assets/outline-logout.svg";
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
          <img
            src={logout}
            alt="log out"
            onClick={() => {
              toast.success("Check back often!");

              navigate("/signin");

              sessionStorage.removeItem("NG.CASH: token");
            }}
          />
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
