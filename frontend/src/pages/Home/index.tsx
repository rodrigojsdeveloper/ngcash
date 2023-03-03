import { Transaction } from "../../components/Transaction";
import { yupResolver } from "@hookform/resolvers/yup";
import { ITransactionProps } from "../../interfaces";
import logout from "../../assets/outline-logout.svg";
import { Button } from "../../components/Button";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { BsCash } from "react-icons/bs";
import { toast } from "react-toastify";
import { Container } from "./style";
import * as yup from "yup";
import { FormTransaction } from "../../components/FormTransaction";

const Home = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("Project NG.CASH: token");

  const [balance, setBalance] = useState<number>(0);

  const [load, setLoad] = useState<boolean>(false);

  const [transactions, setTransactions] = useState<ITransactionProps[]>([]);

  const [transactionsBoolean, setTransactionsBoolean] = useState<boolean>(true);

  const [transactionsCashIn, setTransactionsCashIn] = useState<
    ITransactionProps[]
  >([]);

  const [transactionsCashInBoolean, setTransactionsCashInBoolean] =
    useState<boolean>(false);

  const [transactionsCashOut, setTransactionsCashOut] = useState<
    ITransactionProps[]
  >([]);

  const [transactionsCashOutBoolean, setTransactionsCashOutBoolean] =
    useState<boolean>(false);

  const [transactionsDate, setTransactionsDate] = useState<ITransactionProps[]>(
    []
  );

  const [transactionsDateBoolean, setTransactionsDateBoolean] =
    useState<boolean>(false);

  const addTransactions = (transaction: ITransactionProps) =>
    setTransactions([transaction, ...transactions!]);

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username must contain at least 3 characters"),

    value: yup.number().typeError("Amount must be a number"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data: object) => {
    setLoad(true);

    api
      .post("/transactions", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        addTransactions(res.data);

        toast.success("Completed transaction");

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
      })
      .catch((_) => toast.error("Transaction error"))
      .finally(() => setLoad(false));
  };

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

  useEffect(() => {
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
  }, []);

  if (!token) {
    return navigate("/");
  }

  return (
    <Container>
      <div>
        <img
          src={logout}
          alt="log out"
          onClick={() => {
            toast.success("Check back often!");

            navigate("/session");

            sessionStorage.removeItem("Project NG.CASH: token");
          }}
        />
        <h1>BALANCE</h1>
        <p>$ {balance.toFixed(2)}</p>
        <h2>CASH OUT</h2>
        
        <FormTransaction />
      </div>

      <menu>
        <h1>All transactions</h1>
        <h2>Cash-in, cash-out and date transactions</h2>

        <main>
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
        </main>

        <div>
          <Button
            buttonStyle="home"
            onClick={() => {
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
                .catch((err) => console.error(err));
            }}
          >
            Todos
          </Button>

          <Button
            buttonStyle="home"
            onClick={() => {
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
                .catch((_) =>
                  toast.error("transaction does not exist or not found")
                );
            }}
          >
            Cash in
          </Button>

          <Button
            buttonStyle="home"
            onClick={() => {
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
                .catch((_) =>
                  toast.error("transaction does not exist or not found")
                );
            }}
          >
            Cash out
          </Button>

          <input
            type="date"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                .catch((_) =>
                  toast.error("transaction does not exist or not found")
                );
            }}
          />
        </div>
      </menu>
    </Container>
  );
};

export { Home };
